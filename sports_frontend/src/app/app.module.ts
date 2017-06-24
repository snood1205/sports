import {BrowserModule} from '@angular/platform-browser'
import {NgModule} from '@angular/core'

import {AppComponent} from './app.component'
import {TeamComponent} from './team/team.component'
import {RouterModule, Routes} from '@angular/router'
import {TeamsComponent} from './teams/teams.component'
import {TeamService} from '../common/services/team.service'
import {HttpModule, RequestOptions} from '@angular/http'
import {CustomRequestOptions} from '../common/options/custom-request.options'

const appRoutes: Routes = [
  {path: 'teams', component: TeamsComponent},
  {path: 'team/:id', component: TeamComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    TeamComponent,
    TeamsComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    HttpModule
  ],
  providers: [
    {provide: RequestOptions, useClass: CustomRequestOptions},
    TeamService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
