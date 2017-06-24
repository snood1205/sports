# Sports

This is a sample Rails 5.1.1 API / Angular 4 application that displays sports teams and scores. It is currently just in development and nowhere near completion.

## Startup

To manually begin everything follow the step by step process

### Initialize Rails
1. `cd sports_backend` from `sports` to be in the Rails directory
2. `bundle install` to install all the requisite gems
3. Create, migrate, and (optionally) seed the database
```bash
# Drop just in case any such databases already exist
rails db:drop
# Create databases
rails db:create
# Migrate the migrations to create the appropriate database tables
rails db:migrate
# (Optionally) seed information in the database to start with some information
rails db:seed
```
4. `rails s` to start the rails server

### Initialize Angular
1. `cd sports_frontend` from `sports` or `cd ../sports_frontend` from `sports_backend`
2. `yarn` to install the packages
3. `yarn start` to start serving angular


## Author

Eli Sadoff &mdash; [snood1205@gmail.com](mailto:snood1205@gmail.com)

## License

This is under the MIT License. The license can be found [here](LICENSE.txt)
