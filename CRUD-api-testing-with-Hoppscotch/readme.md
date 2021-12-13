## Creating and testing RESTful API built using Node, Express.js, Hoppscotch , HarperDB and Docker.

Step-by-step instructions for crafting our API.

1. Create a project folder.

<p align="center">
<img src="https://user-images.githubusercontent.com/37651620/129438264-c3a75cf3-cfb8-46ae-a9af-e7761f34e0fc.png">
</p>

```
mkdir crud-api
cd crud-api
```

2. Initialize Node application inside that project folder.

<p align="center">
<img src="https://user-images.githubusercontent.com/37651620/129438275-6d507e9b-3b22-475d-8d48-36db43bb0cbf.png"/>
</p>

```
npm init -y
```

3. Install four dependencies – express, nodemon, harperive & dotenv

<p align="center">
<img src="https://user-images.githubusercontent.com/37651620/129438282-044037da-ecc4-4504-b043-0e579f199b73.png" />
</p>

```
npm install express harperive nodemon dotenv

```

4. Create ”controllers”, ”routes” and “util” folders.

<p align="center">
<img src="https://user-images.githubusercontent.com/37651620/129438291-4814fc39-653c-4935-a0e1-4c140d62b285.png" />
</p>

5. Create index.js file.

<p align="center">
<img src="https://user-images.githubusercontent.com/37651620/129438297-563ecd79-64c2-43f1-b872-671482c2c8d0.png" />
</p>

```
const express = require("express");
const app = express();
app.use(express.json());

```

Import express , initialize it & set headers.

<p align="center">
<img src="https://user-images.githubusercontent.com/37651620/129438303-ada5702e-ca07-40f5-a128-ba4b4cee5d61.png" />
</p>

```
const express = require("express");
const app = express();
require("dotenv").config();

app.use(express.json());

const PORT = process.env.PORT || 5000;

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

```

6. Setup two routes. One for testing purposes and another one for actual implementation.

<p align="center">
<img src="https://user-images.githubusercontent.com/37651620/129438307-2a1bc0af-781d-44e6-8c32-3b51d607551f.png" />
</p>

```
app.use("/testing", require("./routes/testing.routes.js"));
app.use("/students", require("./routes/students.routes.js"));
app.listen(process.env.PORT, () => {
  console.log(`App is currently running at http://localhost:${PORT}`);
});

```

7. Create db.js inside util folder and create connection for HarperDB.

```

// create connection for Harper DB
const harperive = require("harperive");
const configuration = {
  username: process.env.HARPER_INSTANCE_USERNAME,
  password: process.env.HARPER_INSTANCE_PASSWORD,
  schema: process.env.HARPER_INSTANCE_SCHEMA,
  harperHost: process.env.HARPER_HOST_INSTANCE_URL,
};
const db = new harperive.Client(configuration);
module.exports = db;

```

8. Create testing.routes.js file inside routes folder. It is just a test endpoint to test whether the application is working or not.

```

const controller = require("../controllers/testing.controllers.js");
const router = require("express").Router();
router.get("/appinfo", controller.getAppInfo);
module.exports = router;

```

9. Create students.routes.js file inside routes folder and add references to your api endpoint.

```

const router = require("express").Router();
const controller = require("../controllers/" + "students" + ".controllers");
router
  .get("/", controller.getAllStudent)
  .get("/:id", controller.getOneStudent)
  .post("/", controller.createOneStudent)
  .put("/:id", controller.updateOneStudent)
  .delete("/:id", controller.deleteOneStudent);
module.exports = router;

```

10. Create testing.controllers.js file inside controllers folder. This will be used for testing purposes only , to test whether the app / db instances are running or not.

```
exports.getAppInfo = (req, res, next) => {
  return res.status(200).json({ "Aviyel CRUD API Testing": "v1.0.0" });
};

```

11. Create students.controllers.js file inside controllers folder and add the following code.

Import and add client, schema and table name.

```

const client = require("../util/db");
const DB_SCHEMA = process.env.HARPER_INSTANCE_SCHEMA;
const TABLE = "students";

```

getAllStudent method fetches all the student info.

```

//Get all the student
exports.getAllStudent = async (req, res, next) => {
  try {
    const qry = `SELECT * FROM ${DB_SCHEMA}.${TABLE}`;
    const students = await client.query(qry);
    res.json(students);
  } catch (error) {
    console.error("ERROR while fetching all student " + "Student:", error);
    return res.status(500).json(error)}};

```

getOneStudent method fetches only one student info by their id.

```

//Get only one student
exports.getOneStudent = async (req, res, next) => {
  try {
    const qry = `SELECT * FROM ${DB_SCHEMA}.${TABLE} WHERE id="${req.params.id}"`;
    const student = await client.query(qry);
    res.json(student);
  } catch (error) {
    console.error("ERROR while fetching student " + "Student:", error);
    return res.status(500).json(error);
  }
};

```

createOneStudent method add/insert only one student.

```

//create new student
exports.createOneStudent = async (req, res, next) => {
  try {
    const user = await client.insert({
      table: TABLE,
      records: [
        {
          username: req.body.username,
          password: req.body.password,
          rollNumber: req.body.rollNumber,
        },
      ],
    });
    res.json(user);
  } catch (error) {
    res.json(error);
  }};

```

updateOneStudent method updates only one student.

```

//update one student
exports.updateOneStudent = async (req, res, next) => {
  try {
    const updateStudent = await client.update({
      table: TABLE,
      records: [
        {
          id: req.params.id,
          username: req.body.username,
          password: req.body.password,
          rollNumber: req.body.rollNumber,
        },
      ],
    });
    res.json(updateStudent);
  } catch (error) {
    res.status(500).json(error);
  }
};

```

deleteOneStudent method deletes only one student.

```

//Delete one student
exports.deleteOneStudent = async (req, res, next) => {
  try {
    const qry = `DELETE FROM ${DB_SCHEMA}.${TABLE} WHERE id="${req.params.id}"`;
    const deleteStudent = await client.query(qry);
    res.json(deleteStudent);
  } catch (error) {
    res.status(500).json(error);
  }
};

```

Now, Let’s create a Docker image of the above crafted application.
Note: Docker should be installed and initialized. Installation guide for the docker can be found here
[https://docs.docker.com/engine/install/](https://docs.docker.com/engine/install)

12. Create three file Dockerfile, docker-compose.yml and .dockerignore.
    Inside .dockerignore file add all the code below.

```

# Node
## Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*

## Dependency directories
node_modules

.git

```

Inside Dockerfile add all the code below.(Note: A Dockerfile has no file extension)

```

FROM node:14.1.0

EXPOSE 8080

WORKDIR /src

COPY package*.json ./

RUN npm install

COPY . .

CMD ["node", "index.js"]

```

Add all the below code inside docker-compose.yml and give the image name whatever you want.

```

version: "3.8"
services:
  app:
    container_name: crudapi_aviyel
    image: pramitmarattha/aviyel-crudapi:0.0.1
    build:
      context: .
    ports:
      - "8080:8080"
    env_file: .env

```

Update the .env file by adding proper configuration.

```

PORT=8080
HARPER_HOST_INSTANCE_URL=https://----
HARPER_INSTANCE_USERNAME=………
HARPER_INSTANCE_PASSWORD=………
HARPER_INSTANCE_SCHEMA=………….

```

For“HARPER_HOST_INSTANCE_URL” , head over to the config of that running cloud instance inside the dashboard UI of Harper DB and copy the URL and paste it inside .env .

<p align="center">
<img src="https://user-images.githubusercontent.com/37651620/129438320-15b0536a-b849-4f59-85bc-d32ded118fdb.png" />
</p>

To retrieve username and password simply toggle to the users section of that running instance.

<p align="center">
<img src="https://user-images.githubusercontent.com/37651620/129438329-70db9773-ace3-4594-9fe5-e59b72bc742e.png" />
</p>

And finally, Schema name can be retrieved from the browse section of that instance.

<p align="center">
<img src="https://user-images.githubusercontent.com/37651620/129438331-65080698-b42b-4b3e-9935-4d4e96f4348d.png" />
</p>

Finally, It's time to create a docker image.
Note: Make sure your docker is still up and running.
In your CLI type:

```
 docker-compose build

```
<p align="center">
<img src="https://user-images.githubusercontent.com/37651620/129438334-fe0e55fe-d36b-43e8-be94-ca059bec7e68.png" />
</p>

And After building image run:

```
docker-compose up

```

or

```
docker compose up

```
<p align="center">
<img src="https://user-images.githubusercontent.com/37651620/129438342-c47273c5-22ea-440a-9fdb-25c04f10274f.png" />
</p>

## Hoppscotch

<p align="center">
<img src="https://user-images.githubusercontent.com/37651620/129457227-606ae6dd-6b2d-41b8-849a-a71b2ec76339.png" width=100/>
</p>

## POST

<p align="center">
<img src="https://user-images.githubusercontent.com/37651620/129438378-a8228d81-7e42-4a1d-9970-d8d6ecde043b.png" />
</p>

<p align="center">
<img src="https://user-images.githubusercontent.com/37651620/129438382-efc32bf9-e6f1-46ac-bb90-53dc94b4a3ae.png" />
</p>

---

## GET student by id.

<p align="center">
<img src="https://user-images.githubusercontent.com/37651620/129438400-0dc2587b-e415-4f21-a3bb-d4a90559f0af.png" />
</p>

---

## GET all student

<p align="center">
<img src="https://user-images.githubusercontent.com/37651620/129438404-028076be-d723-4e94-bad2-0eec499ca881.png" />
</p>

---

## Update student by id.

<p align="center">
<img src="https://user-images.githubusercontent.com/37651620/129438409-daff788e-cb71-46c7-a0fe-46e9ece0ac92.png" />
</p>

---

## DELETE student by id

<p align="center">
<img src="https://user-images.githubusercontent.com/37651620/129438422-bcfa7126-b223-48ed-997a-d2afafd7d329.png" />
</p>

---

## API documentation auto generation

<p align="center">
<img src="https://user-images.githubusercontent.com/37651620/129438446-4f03dabc-8beb-492d-843c-1072ef757b9c.png" />
</p>


---
---

## Request: Testing appinfo

**Method**: GET

**Request URL**:

```
http://localhost:8080/testing/appinfo
```

**Content Type**: `application/json`

## Request: Add One Students

**Method**: POST

**Request URL**:

```
http://localhost:8080/students
```

**Raw Parameters**:

```json
{
  "username": "pramit",
  "password": "0101010",
  "rollNumber": 23
}
```

**Content Type**: `application/json`

## Request: Get Student by ID

**Method**: GET

**Request URL**:

```
http://localhost:8080/students/789ce40f-6ffb-441c-9e9a-5b6770af6b3f
```

**Raw Parameters**:

```json
{
  "username": "pramit",
  "password": "0101010",
  "rollNumber": 23
}
```

**Content Type**: `application/json`

## Request: Update Student by ID

**Method**: PUT

**Request URL**:

```
http://localhost:8080/students/789ce40f-6ffb-441c-9e9a-5b6770af6b3f
```

**Raw Parameters**:

```json
{
  "username": "pramit",
  "password": "0101010",
  "rollNumber": 69
}
```

**Content Type**: `application/json`

## Request: Get all students

**Method**: GET

**Request URL**:

```
http://localhost:8080/students
```

**Raw Parameters**:

```json
{
  "username": "pramit",
  "password": "0101010",
  "rollNumber": 69
}
```

**Content Type**: `application/json`

## Request: Delete Student by ID

**Method**: DELETE

**Request URL**:

```
http://localhost:8080/students/f8658a20-dfca-4a0c-9ed2-1ea2f77558c3
```

**Raw Parameters**:

```json
{
  "username": "pramit",
  "password": "0101010",
  "rollNumber": 69
}
```

**Content Type**: `application/json`

---

Documentation made with [Hoppscotch](https://github.com/hoppscotch/hoppscotch)
