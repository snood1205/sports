class TeamsController < ApplicationController
  def index
    render json: Team.all
  end

  def show
    render json: Team.find(params[:id]).to_json(methods: :players)
  end

  def players
    team = Team.find(params[:id])
    render json: team.players
  end
end