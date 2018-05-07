import { Injectable } from '@angular/core';
import { WebsocketService } from '../websocket.service';
import { NeuroneResult } from './result/result.component';
import { Neurone } from '../dto/Neurone';
import { Observable, Observer, Subject } from 'rxjs';

@Injectable()
export class ResultService {

  private observable: Observable<String>;
  private lastMessage: Neurone;

  public getLastMessage(): Neurone {
    return this.lastMessage;
  }

  constructor(private _webSocketService: WebsocketService) {
    console.log('Create Service');
    this.lookUpForMessage().subscribe((message: MessageEvent) => {
      const value = message.data.split('|')[1];
      this.lastMessage = JSON.parse(value);
      console.log(JSON.parse(message.data.split('|')[1]));
      console.log(this.lastMessage);
    });
  }

  lookUpForMessage(): Observable<MessageEvent> {
    this.observable = Observable.create((obs: Observer<String>) => {
      this._webSocketService.getWebSocketIA().onmessage = obs.next.bind(obs);
      this._webSocketService.getWebSocketIA().onerror = obs.error.bind(obs);
      this._webSocketService.getWebSocketIA().onclose = obs.complete.bind(obs);
      return this._webSocketService.getWebSocketIA().onclose;
    });
    const observer = {
      next: (data: MessageEvent) => {
        if (this._webSocketService.getWebSocketIA().readyState === WebSocket.OPEN) {
          console.log('PASSAGE PAR LE NEXT');
        }
      }
    };
    return Subject.create(observer, this.observable);
  }
}
