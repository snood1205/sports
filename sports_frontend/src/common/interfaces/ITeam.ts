import {IPlayer} from './IPlayer'

export interface ITeam {
  id: number
  location: string
  name: string
  players: IPlayer[]
}
