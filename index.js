import express from "express"
import session from "express-session";
import connectPgSimple from "connect-pg-simple";
import passport from "passport";
import "dotenv/config"

import signupRoute from "./routes/signupRouter.js"
import loginRouter from "./routes/loginRouter.js"
import logoutRouter from "./routes/logoutRouter.js"
import homeRouter from "./routes/homeRouter.js" 
import membeshipRouter from "./routes/membershipRouter.js"
import "./passportConfig.js";

const app = express();
app.use(express.static('public'));
const PORT = process.env.PORT || 3000;
app.set("view engine", "ejs");
app.use(express.urlencoded({"extended": true}))


app.use(session({
    secret: process.env.SECRET,
    store: new (connectPgSimple(session))({
        conString: process.env.URL
      }),
    resave: false,
    saveUninitialized: false  
}))

app.use(passport.initialize())
app.use(passport.session());

app.use("/", homeRouter);
app.use("/signUp", signupRoute)
app.use("/login", loginRouter)
app.use("/logout", logoutRouter)
app.use("/membership", membeshipRouter)


app.listen(PORT, ()=>{console.log(`Listening at http://localhost:${PORT}`)})