# CRUD API with TypeORM

This was created during my time as a student at Code Chrysalis

It's the start to an application I'd like to make to help English speakers in Japan find doctors that they can easily communicate with.

Please enjoy my first attempt at creating a RESTful API!

# Usage

Steps to run this project:

1. Run `yarn` command
2. Setup database settings inside `ormconfig.json` file
3. Run `yarn install` command
4. Run `yarn dev` command to start the server
5. Open browser to `localhost:3000/`


# Documentation

Below are the endpoints that can be used with the database through the back-end.  

## Methods
`app.get()`:
GET request to the homepage.  
---


![](images/GET.png)


`app.post()`: POST request to the homepage.
---

![](images/POST.png)  


`app.update()`: PATCH request to the homepage used to make changes to 
the database.
---

![](images/PATCH.png)


`app.delete()`: DELETE request to remove entries from the database. 
---

![](images/DELETE.png)

# Resources

Here are links to the technologies that were used in this project.

## TypeORM  
https://typeorm.io

## PostgresQL  
https://www.postgresql.org

## Express
https://expressjs.com