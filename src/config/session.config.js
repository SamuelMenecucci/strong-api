import expressSession from "express-session";

export const session = expressSession({
  secret: "iabadabadu",

  resave: false,

  saveUninitialized: false,

  cookie: {
    maxAge: 30 * 24 * 60 * 60 * 1000,
  },
});
