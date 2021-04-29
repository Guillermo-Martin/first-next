const express = require("express");
const next = require('next')  // <--- used to hand off info to NextJS

const dev = process.env.NODE_ENV !== 'production'  // <--- checking to see if there's a process.env node environmental variable
const app = next({ dev })  // <--- this initializes and instance of NextJS
const handle = app.getRequestHandler()  // <--- this is a special method that comes back from NextJS; it knows what to do given a certain request


app.prepare().then(() => {
  // initialize express
  const server = express();

  server.get("/p/:id", (req, res) => {
    // you can get the id from the url using "req.params.id"
    // make sure to pass in a query object
    // this object will contain the information we want to use to populate the query string
    app.render(req, res, "/post", { id: req.params.id });
  });

  // here, we're sending all the requests to NextJS
  server.get("*", (req, res) => {
    return handle(req, res);
  });



  // add listener
  server.listen(3000, err => {
    if (err) throw err;
    console.log("> Now serving on localhost: 3000");
  });
});