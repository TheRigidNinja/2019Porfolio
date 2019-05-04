const express = require("express");
const app = express();
const http = require("http").Server(app);
const sgMail = require("@sendgrid/mail");
const bodyParser = require("body-parser");
sgMail.setApiKey("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");


app.set("view engine", "ejs");
// ---- // Middleware
app.use("/public",express.static("public")); 

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Sending email
app.post('/send', (req, res) => {
    res.render("send");

    const msg = {
        from: "Coming from Portfolio<brianportfolio@gmail.com>",
        "reply-to":req.body.email,
        to: "brian.shisanya2000@gmail.com",
        subject: req.body.subject,
        text: req.body.message,
        html:`
        <pre style="font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif">${req.body.message}</pre>
        `
    };
    sgMail.send(msg);
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