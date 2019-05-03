"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var ws_1 = require("ws");
var app = express();
var Product = /** @class */ (function () {
    function Product(id, title, price, rating, desc, categories) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.rating = rating;
        this.desc = desc;
        this.categories = categories;
    }
    return Product;
}());
exports.Product = Product;
var Comment = /** @class */ (function () {
    function Comment(id, productId, timestamp, user, rating, content) {
        this.id = id;
        this.productId = productId;
        this.timestamp = timestamp;
        this.user = user;
        this.rating = rating;
        this.content = content;
    }
    return Comment;
}());
exports.Comment = Comment;
var comments = [
    new Comment(1, 1, '2018-05-15 20:54:38', '张三', 3, '东西不错'),
    new Comment(2, 1, '2018-05-15 20:54:38', '李四', 4, '东西很不错'),
    new Comment(3, 1, '2018-05-15 20:54:38', '王五', 2, '东西还行'),
    new Comment(4, 2, '2018-05-15 20:54:38', '赵六', 2.5, '东西也不错'),
    new Comment(5, 3, '2018-05-15 20:54:38', '周七', 5, '东西真的不错'),
    new Comment(6, 2, '2018-05-15 20:54:38', '喻八', 3, '东西还可以'),
];
var products = [
    new Product(1, '第一个商品', 1.99, 3.5, '这是第一个商品，慕课网实例angular', ['电子产品', '硬件设备']),
    new Product(2, '第二个商品', 2.99, 2.5, '这是第二个商品，慕课网实例angular', ['图书']),
    new Product(3, '第三个商品', 3.99, 4.5, '这是第三个商品，慕课网实例angular', ['电子产品', '硬件设备']),
    new Product(4, '第四个商品', 4.99, 1.5, '这是第四个商品，慕课网实例angular', ['电子产品']),
    new Product(5, '第五个商品', 5.99, 3.5, '这是第五个商品，慕课网实例angular', ['电子产品']),
    new Product(6, '第六个商品', 6.99, 2.5, '这是第六个商品，慕课网实例angular', ['图书']),
];
// 进行开发时作为服务器端的访问代码
app.get('/', function (req, res) {
    res.end("Hello Express");
});
// 部署时需要添加的文件访问路径
// app.use('/',express.static(path.join(__dirname,'..','client')));
app.get('/api/products', function (req, res) {
    var result = products;
    var params = req.query;
    if (params.title) {
        result = result.filter(function (p) { return p.title.indexOf(params.title) !== -1; });
    }
    if (params.price && result.length > 0) {
        result = result.filter(function (p) { return p.price <= parseInt(params.price); });
    }
    if (params.category !== '-1' && result.length > 0) {
        result = result.filter(function (p) { return p.categories.indexOf(params.category) !== -1; });
    }
    res.json(result);
    // res.send("接收到商品服务请求");
});
app.get('/api/product/:id', function (req, res) {
    res.json(products.find(function (product) { return product.id == req.params.id; }));
});
app.get('/api/product/:id/comments', function (req, res) {
    res.json(comments.filter(function (comment) { return comment.productId == req.params.id; }));
});
var server = app.listen(8000, "localhost", function () {
    console.log("服务器已启动,地址为http://localhost：8000");
});
// productId的集合，所有客户端关注的商品Id数组，例:A客户端关注了商品1，商品2，B客户端关注了商品2，商品4
var subscriptions = new Map(); // 待注释,number[],为商品Id的数组，一个客户端关注多个商品Id
var wsServer = new ws_1.Server({ port: 8085 });
wsServer.on("connection", function (websocket) {
    // websocket.send("这个消息是服务器端推送过来的！！！"); //todo 这行代码会影响后面subscriptions中发送数据,好神奇。。。因为前端会把此条数据作为报价业务处理了，导致报错，前端接收数据逻辑不够严谨
    websocket.on('message', function (message) {
        console.log("接收到客户端发来的消息" + message);
        var messageObj = JSON.parse(message.toString()); // 将字符串解析为javascript对象,为客户端发送过来的消息对象
        var productIds = subscriptions.get(websocket) || []; //获取单个客户端的历史商品id,
        subscriptions.set(websocket, productIds.concat([messageObj.productId]));
    });
});
//各个商品的当前价格集合，例:A商品10元，B商品15元，C商品7元
var currentBids = new Map(); // key是商品的Id,值是商品的价格
setInterval(function () {
    // if(wsServer.clients){
    //     wsServer.clients.forEach(client=>
    //         client.send('这是服务器定时推送过来的！'));
    // }
    products.forEach(function (p) {
        var currentBid = currentBids.get(p.id) || p.price; // 商品价格或根据Id获取当前的价格
        var newBid = currentBid + Math.random() * 5; // 重新生成出来的最新报价
        currentBids.set(p.id, newBid);
        // console.log(currentBids);
    });
    subscriptions.forEach(function (productIds, ws) {
        if (ws.readyState == 1) {
            var newBids = productIds.map(function (pid) { return ({
                productId: pid,
                bid: currentBids.get(pid)
            }); });
            console.log(newBids);
            // ws.send('这是服务器定时推送过来的yfx');// 不要手贱，瞎鸡巴发送信息，前端没做处理会报错的
            ws.send(JSON.stringify(newBids));
        }
        else {
            subscriptions.delete(ws); // readyState不为1，浏览器已经断开连接，则删除客户端
        }
    });
}, 2000);
// setInterval(()=>{
//     if(wsServer.clients){
//         wsServer.clients.forEach(client=>
//             client.send('这是服务器定时推送过来的！！！');
//     }
// },2000); 
