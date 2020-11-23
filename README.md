# Solo Project with TypeORM

This was created during my time as a student at Code Chrysalis

It's the start to an application I'd like to make to help English speakers in Japan find doctors that they can easily communicate with.

# Usage

Steps to run this project:

1. Run `yarn` command
2. Setup database settings inside `ormconfig.json` file
3. Run `yarn install` command
4. Run `yarn dev` command to start the server
5. Open browser to `localhost:3000/doctor`

![](images/localhost.png)

# Documentation

## Methods
`app.get('/', function (req, res) {})`:
GET request to the homepage. \
`app.post('/', function (req, res) {})`: POST request to the homepage. \
`app.patch('/', function (req, res) {})`: PATCH request to the homepage used to make changes to the database. \
`app.delete('/', function (req, res) {})`: DELETE request to remove entries from the database. 