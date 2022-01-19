# BOTWKey
The ultimate guide to Hyrule

### API
https://gadhagod.github.io/Hyrule-Compendium-API/#/
https://github.com/gadhagod/Hyrule-Compendium-API
**Create API**
1. Install LoopBack CLI via NPM: npm install -g loopback-cli
2. Make directory to store project: lb
3. Enter name of application: botwkey-api
4. Enter version of Loopback to use: 3.x (current)
5. Enter kind of application: api-server
6. API is created, to run: node .
7. Go to localhost:3000/explorer to view Swagger API
**Connect database**
8. Connect api to database, open the datasources.json in the Server folder
9. Currently the data source used is the memory of our computer, need to change this to Mongo so install mongo connector: npm install --save loopback-connector-mongodb
10. Connect the connector: lb datasource mongoDS --connector mongoDB
11. Enter datasource name: mongoDS
12. Select the connector for mongoDS: MongoDB
13. Go into MongoDB database to use and click Connect
14. Click Connect your application
15. Copy connection string and input password: mongodb+srv://botwkey:sandyluna2022@cluster0.rueff.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
16. Back in terminal, enter connection string url
17. Enter host: localhost
18. Port: 27017
19. User: [blank]
20. Password: [blank]
21. Database: botw-key
22. Add data models: lb model
23. Open datasources.json and remove memory datasource
**Create data models** (if not already created)
24. Run: lb model
25. Enter model name: [category:creatures]
26. Select datasource: db (mongodb)
27. Select model's base class: PersistedModel
28. Expose model via REST API: Yes
29. Custom plural: [blank]
30. Common model or server only: common
31. Enter properties

### Running Locally
In terminal: 
- `cd botwkey`
- `npm start`

# Dependencies
- React Bootstrap
  - `npm install react-bootstrap bootstrap@5.1.3`
- Robomongo, Robo 3T is the Mongo DB GUI
  -https://robomongo.org/
- Install LoopBack CLI via NPM
  -https://www.freecodecamp.org/news/build-restful-api-with-authentication-under-5-minutes-using-loopback-by-expressjs-no-programming-31231b8472ca/
- Install react router for linking to another page.
  - `npm i react-router-dom`
  
# Posting Data
1. Obtain POST url from Loopback API Explorer
2. Created postToDb.js file to post all instances of each model to mongoDB Atlas database
3. Need to download XMLHTTPrequest: npm install xmlhttprequest --save
4. Add: var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

