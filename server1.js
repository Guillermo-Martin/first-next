// server.js
const { createServer } = require('http')  // <--- used to make a server
const { parse } = require('url')  // <--- used to parse a url
const next = require('next')  // <--- used to hand off info to NextJS


const dev = process.env.NODE_ENV !== 'production'  // <--- checking to see if there's a process.env node environmental variable
const app = next({ dev })  // <--- this initializes and instance of NextJS
const handle = app.getRequestHandler()  // <--- this is a special method that comes back from NextJS; it knows what to do given a certain request


app.prepare().then(() => {
  // here, we're setting up a simple server.  For every request and response, any route, any information that's requested
  // how do we want to respond?  All we're doing is calling a method called "handle" (which is coming from NextJS). We're
  // passing it off to NextJS.  
  // "createServer" is listening for requests on localhost:3000 then passing them on to NextJS (via handle)
  createServer((req, res) => {
    // Be sure to pass `true` as the second argument to `url.parse`.
    // This tells it to parse the query portion of the URL.
    const parsedUrl = parse(req.url, true)
    const { pathname, query } = parsedUrl

    // creating a custom route
    if(pathname === "/chicken") {
      // pass in the request and response every single time, then what to actually render, and "query" (which is the query string that was parsed)
      // if there happened to be a query string
      app.render(req, res, "/contact", query); // <--- "app.render" is another method from NextJS
    } else {
      // this is the line of code that is handing off the info to NextJS.
      handle(req, res, parsedUrl);
    }

    // The "if" statement below is showing a simple example of creating custom routes so you can override the default behavior.
    // if (pathname === '/a') {
    //   app.render(req, res, '/a', query)
    // } else if (pathname === '/b') {
    //   app.render(req, res, '/b', query)
    // } else {
    //   handle(req, res, parsedUrl)
    // }
  }).listen(3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})