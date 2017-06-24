import {Injectable} from '@angular/core'
import {Http} from '@angular/http'
import 'rxjs/add/operator/map'

@Injectable()
export class TeamService {
  constructor (private http: Http) {}

  index () {
    return this.http.get('/teams.json')
      .map(response => response.json())
  }

  show(id: number) {
    return this.http.get(`/teams/${id}.json`)
  }

  players (id: number) {
    return this.http.get(`/teams/${id}/players.json`)
      .map(response => response.json())
  }
}
