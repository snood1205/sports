# /bin/bash

# initialize rails first
cd sports_backend
bundle install
rails db:drop
rails db:create
rails db:migrate
rails db:seed
rails s &

cd ..

# initialize angular
cd sports_frontend
yarn
yarn start
