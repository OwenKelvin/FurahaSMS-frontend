//Install express server
const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 5555;

// Serve only the static files form the dist directory
app.use(express.static(__dirname + "/dist/furaha-sms"));

app.get("/*", function(req, res) {
  res.sendFile(path.join(__dirname + "/dist/furaha-sms/index.html"));
});

// Start the app by listening on the default Heroku port
console.log( `App is running on port ${ port }` )
app.listen( port );


