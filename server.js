import express from "express";
import emaildata from "./emaildb.js";
import emailclient from "./emailsclient.js";
import buggycomments from "./commentdb.js";
import buggyclient from "./commentclient.js";
var commentArrays = buggyclient.init();
const emailArray = emailclient.init();
const port = 8080;
const app = express();

app.use("/", express.static("cilviastudios"));
app.listen(port, function () {
    console.log("Listening to port " + port);
});
app.use(express.json({limit: "20mb"}));

app.get("/api", (request, response) => {
    response.json({emails: emailArray});
});

app.post("/api", (request, response) => {
    console.log("I got an email.");
    // console.log(request.body);
    emaildata.init(request.body.subscriber);
    response.json({
        status: "subscribed",
        email: request.body.subscriber
    });
});

app.get("/comment", (request, response) => {
    response.json({comments: commentArrays});
    commentArrays = buggyclient.init();
});

app.post("/comment", (request, response) => {
    console.log("I got a comment");
    // console.log(request.body);
    buggycomments.init(request.body.userName, request.body.userFeedback);
    response.json({
        name: request.body.userName,
        comment: request.body.userFeedback
    });
    commentArrays = buggyclient.init();
});