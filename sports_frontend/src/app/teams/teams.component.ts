import {Component, OnInit} from '@angular/core'
import {TeamService} from '../../common/services/team.service'
import {ITeam} from '../../common/interfaces/ITeam'
import 'rxjs/add/operator/toPromise'

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
  teams: ITeam[]

  constructor (private teamService: TeamService) { }

  ngOnInit () {
    this.teamService.index().toPromise().then(data => this.teams = data)
  }
}
