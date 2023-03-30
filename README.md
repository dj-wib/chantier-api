# chantier-api

# Description

application allows you to create, read, update or delete a Building Site in mongoDB database.

# Installation

`npm init -y`
`npm install mongoose express dotenv cors`
`npm install -D nodemon`

# Run

`npm start`

# Test application

With "postman" you can:

- CREAT
  POST : http://localhost:8000/buildingsites
  body:

```{
    "name": "---",
    "description": "---",
    "adress":{
            "number": "-",
            "street": "--",
            "zip_code": "-----",
            "town": "-"
    },
    "completed": false or true
}
```

- READ
  GET : http://localhost:8000/buildingsites

- UPDATE
  by changing buildingsites_id in the command below for the ID number to update
  PUT : http://localhost:8000/buildingsites/buildingsites_id
  body:

```{
    "name": "---",
    "description": "---",
    "adress":{
            "number": "-",
            "street": "--",
            "zip_code": "-----",
            "town": "-"
    },
    "completed": false or true
}
```

- DELETE
  by changing buildingsites_id in the command below for the ID number to delete
  DELETE : http://localhost:8000/buildingsites/buildingsites_id
