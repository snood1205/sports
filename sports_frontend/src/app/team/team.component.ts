import {Component, OnInit} from '@angular/core'
import {TeamService} from '../../common/services/team.service'
import {ITeam} from '../../common/interfaces/ITeam'
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  team: ITeam

  constructor (private teamService: TeamService, private route: ActivatedRoute) { }

  ngOnInit () {
    this.route.params.subscribe(params => {
      this.teamService.show(params.id).toPromise().then(data => this.team = data.json())
    })
  }

}
