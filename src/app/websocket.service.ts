import { Injectable, OnDestroy } from '@angular/core';
import { environment } from '../environments/environment';


class Environment {
  network: {
    protocols: {
      http: string;
      ws: string;
    };
    ports: {
      http: string;
      ws: string;
    };
  };
  hostWebSocket: string;
  logWSIA: string;
}


@Injectable()
export class WebsocketService implements OnDestroy {

  private environmentVar: Environment;
  private websocketIA: WebSocket;
  private intervalClear;
  constructor() {
    this.environmentVar = environment;
    console.log('Connexion');
    this.websocketIA = new WebSocket(`${this.environmentVar.network.protocols.ws}://${this.environmentVar.hostWebSocket}:${this.environmentVar.network.ports.ws}/${this.environmentVar.logWSIA}`);
    this.intervalClear = setInterval(this.heartBeat.bind(this), 2000);

  }
  heartBeat() {
    if (this.websocketIA && this.websocketIA.readyState === WebSocket.OPEN) {
      this.websocketIA.send('alive');
    }
  }

  getWebSocketIA(): WebSocket {
    return this.websocketIA;
  }

  ngOnDestroy() {
    clearInterval(this.intervalClear);
  }

}
