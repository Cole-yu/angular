import { Component, OnInit } from '@angular/core';
import {WebSocketService} from '../../share/web-socket.service';

@Component({
  selector: 'app-web-socket',
  templateUrl: './web-socket.component.html',
  styleUrls: ['./web-socket.component.css']
})
export class WebSocketComponent implements OnInit {

  constructor(private  wsService:WebSocketService) {

  }

  ngOnInit() {
    this.wsService.createObservableSocket('ws://localhost:8085',3)
      .subscribe(
        data=>console.log(data),
        err=>console.log(err),
        ()=>console.log('流已经结束了！！！')

      );
  }

  messageToServer(message:string) {
    this.wsService.sendMessage('Hello Server,I am from client!!!消息是：'+message );
    console.log('向服务器端发送了消息，消息内容是'+message);
  }

}
