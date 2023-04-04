import expressSession from "express-session";

import connectPgSimple from "connect-pg-simple";
import { db } from "./db.config.js";

const session = connectPgSimple(expressSession);

export default expressSession({
  store: new session({ pool: db }),

  secret: "iabadabadu",

  resave: false,

  saveUninitialized: false,

  proxy: true,

  cookie: {
    httpOnly: false,
    secure: true,
    sameSite: "none",
    maxAge: 30 * 24 * 60 * 60 * 1000,
  },
});
