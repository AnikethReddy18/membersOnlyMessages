import express from "express"
import session from "express-session";
import connectPgSimple from "connect-pg-simple";
import passport from "passport";
import "dotenv/config"

import signupRoute from "./routes/signupRouter.js"
import loginRouter from "./routes/loginRouter.js"
import logoutRouter from "./routes/logoutRouter.js"
import "./part.js";

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

app.use(passport.initialize())
app.use(passport.session());

app.get("/", (req, res)=>{
    console.log(req.user);
    res.render("home", {user: req.user})
});

app.use("/signUp", signupRoute)
app.use("/login", loginRouter)
app.use("/logout", logoutRouter)

app.listen(PORT, ()=>{console.log(`Listening at http://localhost:${PORT}`)})