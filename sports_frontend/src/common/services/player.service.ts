import {Injectable} from '@angular/core'
import {Http} from '@angular/http'
import 'rxjs/add/operator/map'

@Injectable()
export class PlayerService {
  constructor (private http: Http) {}

  index () {
    return this.http.get('/players.json')
      .map(response => response.json())
  }
}
