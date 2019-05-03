import * as express from 'express';
import {Server} from 'ws';
import * as path from 'path';

const  app=express();

export class Product {
    constructor(
        public id:number,
        public title:string,
        public  price:number,
        public  rating:number,
        public desc:string,
        public categories:Array<string>
    ) {
    }
}

export class Comment {
    constructor(public  id:number,
                public productId:number,
                public timestamp:string,
                public user:string,
                public rating:number,
                public content:string ) {
    }
}

const comments:Comment[]=[
    new Comment(1,1,'2018-05-15 20:54:38','张三',3,'东西不错'),
    new Comment(2,1,'2018-05-15 20:54:38','李四',4,'东西很不错'),
    new Comment(3,1,'2018-05-15 20:54:38','王五',2,'东西还行'),
    new Comment(4,2,'2018-05-15 20:54:38','赵六',2.5,'东西也不错'),
    new Comment(5,3,'2018-05-15 20:54:38','周七',5,'东西真的不错'),
    new Comment(6,2,'2018-05-15 20:54:38','喻八',3,'东西还可以'),
];

const products:Product[]=[
    new Product(1,'第一个商品',1.99,3.5,'这是第一个商品，慕课网实例angular',['电子产品','硬件设备']),
    new Product(2,'第二个商品',2.99,2.5,'这是第二个商品，慕课网实例angular',['图书']),
    new Product(3,'第三个商品',3.99,4.5,'这是第三个商品，慕课网实例angular',['电子产品','硬件设备']),
    new Product(4,'第四个商品',4.99,1.5,'这是第四个商品，慕课网实例angular',['电子产品']),
    new Product(5,'第五个商品',5.99,3.5,'这是第五个商品，慕课网实例angular',['电子产品']),
    new Product(6,'第六个商品',6.99,2.5,'这是第六个商品，慕课网实例angular',['图书']),
];

// 进行开发时作为服务器端的访问代码
app.get('/',(req,res)=>{
    res.end("Hello Express");
});

// 部署时需要添加的文件访问路径
// app.use('/',express.static(path.join(__dirname,'..','client')));

app.get('/api/products',(req,res)=>{
    let result=products;
    let params=req.query;
    if(params.title){
        result=result.filter(p=>p.title.indexOf( params.title)!==-1);
    }
    if(params.price&&result.length>0){
        result=result.filter(p=>p.price<=parseInt(params.price));
    }
    if(params.category!=='-1'&&result.length>0){
        result=result.filter(p=>p.categories.indexOf(params.category)!==-1);
    }

    res.json(result);
    // res.send("接收到商品服务请求");
});

app.get('/api/product/:id',(req,res)=>{
    res.json(products.find((product)=>product.id==req.params.id));
});

app.get('/api/product/:id/comments',(req,res)=>{
    res.json(comments.filter((comment:Comment)=>comment.productId==req.params.id));
});

const server=app.listen(8000,"localhost",()=>{
    console.log("服务器已启动,地址为http://localhost：8000");
});

// productId的集合，所有客户端关注的商品Id数组，例:A客户端关注了商品1，商品2，B客户端关注了商品2，商品4
const subscriptions=new Map<any,number[]>();// 待注释,number[],为商品Id的数组，一个客户端关注多个商品Id

const  wsServer=new Server({port:8085});
wsServer.on("connection",websocket=>{
    // websocket.send("这个消息是服务器端推送过来的！！！"); //todo 这行代码会影响后面subscriptions中发送数据,好神奇。。。因为前端会把此条数据作为报价业务处理了，导致报错，前端接收数据逻辑不够严谨
    websocket.on('message',message=>{
        console.log("接收到客户端发来的消息"+message);
        let messageObj=JSON.parse(message.toString());// 将字符串解析为javascript对象,为客户端发送过来的消息对象
        let productIds=subscriptions.get(websocket)||[];//获取单个客户端的历史商品id,
        subscriptions.set(websocket,[...productIds,messageObj.productId]);
    });
});

//各个商品的当前价格集合，例:A商品10元，B商品15元，C商品7元
const currentBids =new Map<number,number>();// key是商品的Id,值是商品的价格

setInterval(()=>{

    // if(wsServer.clients){
    //     wsServer.clients.forEach(client=>
    //         client.send('这是服务器定时推送过来的！'));
    // }


    products.forEach(p=>{// 循环遍历所有的商品，给商品重新定价，价格为原价格+5*随机数
        let currentBid=currentBids.get(p.id)||p.price;// 商品价格或根据Id获取当前的价格
        let newBid=currentBid+Math.random()*5;// 重新生成出来的最新报价
        currentBids.set(p.id,newBid);
        // console.log(currentBids);
    });

    subscriptions.forEach((productIds:number[],ws)=>{// 给每个客户端推送每个商品的最新出价，一个客户端存在关注多个商品，productIds，一个客户端订阅的商品Id数组
        if(ws.readyState==1){// 不判断状态发送数据，客户端刷新时会报错：Gateway Timeout,客户端还在，否则即断开连接
            let newBids=productIds.map(
                pid=>({// 根据商品Id获取商品价格
                    productId:pid,
                    bid:currentBids.get(pid)
                })
            );
            console.log(newBids);
            // ws.send('这是服务器定时推送过来的yfx');// 不要手贱，瞎鸡巴发送信息，前端没做处理会报错的
            ws.send(JSON.stringify(newBids));
        }else{
            subscriptions.delete(ws);// readyState不为1，浏览器已经断开连接，则删除客户端
        }
    })
},2000);

// setInterval(()=>{
//     if(wsServer.clients){
//         wsServer.clients.forEach(client=>
//             client.send('这是服务器定时推送过来的！！！');
//     }
// },2000);