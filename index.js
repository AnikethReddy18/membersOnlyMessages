import express from "express"
import session from "express-session";
import connectPgSimple from "connect-pg-simple";
import "dotenv/config"

import signUpRoute from "./routes/signUpRoute.js"

const app = express();
const PORT = process.env.PORT || 3000;
app.set("view engine", "ejs");
app.use(express.urlencoded({"extended": true}))

app.use(session({
    secret: "Rockstar Gowtham",
    store: new (connectPgSimple(session))({
        conString: process.env.URL
      }),
    resave: false,
    saveUninitialized: false  
}))

app.get("/", (req, res)=>{
    res.render("home")
});

app.use("/signUp", signUpRoute)

app.listen(PORT, ()=>{console.log(`Listening at http://localhost:${PORT}`)})