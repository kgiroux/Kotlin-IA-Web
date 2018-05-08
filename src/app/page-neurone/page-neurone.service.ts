import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Environment } from '../websocket.service';
import { Config } from '../dto/Config';
import { tap} from 'rxjs/operators';
import { Observable } from 'rxjs';
@Injectable()
export class PageNeuroneService {

  private environmentVar: Environment;

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor( private http: HttpClient) {
    this.environmentVar = environment;
  }

  sendConfigToLearning(config: Config): Observable<Object> {
    return this.http.put(`${this.environmentVar.network.protocols.http}://${this.environmentVar.hostWebService}:${this.environmentVar.network.ports.http}/${this.environmentVar.configWS}`,config,this.httpOptions)
    .pipe(
      tap(_ => console.log(`updated configuration id=${config}`)));
  }

}
