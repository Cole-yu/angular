import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
// import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';

@Injectable()
export class WebSocketService {

  ws:WebSocket;

  constructor() { }

  // 创建一个可观测的WebSocket的流
  createObservableSocket(url:string,id:number):Observable<any> {
    this.ws=new WebSocket(url);
    return new Observable<string>(
      observer=> {
        this.ws.onmessage=(event)=>observer.next(event.data);
        this.ws.onerror=(event)=>observer.error(event);
        this.ws.onclose=(event)=>observer.complete();
        this.ws.onopen=(event)=>this.sendMessage({productId:id});// 连接打开时
        return ()=>this.ws.close();// 回调函数，取消订阅的时候会关闭流，防止内存泄露
      }
    ).map(message=> {
      JSON.parse(message);
      console.log('服务中打印出来的数据:'+message);
    });
  }

  // 向服务器发送消息
  sendMessage(message:any) {
    this.ws.send(JSON.stringify(message));
  }

}
