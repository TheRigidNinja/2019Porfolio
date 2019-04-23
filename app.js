const express = require("express");
const app = express();
const http = require("http").Server(app);




app.set("view engine", "ejs");

// ---- // Middleware
app.use("/public",express.static("public")); 

app.get("/moreprojects",(req,res)=>{
    res.render("MoreProjects")
})

app.get("/", function(req, res) {
    res.render("index");
  });

http.listen(process.env.PORT || 8080, function(){
    console.table({"Host URL --> ":"http://localhost:8080"});
});

// Reloading HTML fILE
const path = require("path");
const livereload = require("livereload").createServer({
  exts:["ejs","js","css","svg"]
});

livereload.watch(path.join(__dirname,"views"));
livereload.watch(path.join(__dirname,"public"));