import passport from "passport";
import passportLocal from "passport-local";

import { User } from "../models/UserModel";

passport.serializeUser<any, any>((user, done) => {
  done(null, user._id);
});

passport.deserializeUser<any, any>(async (id, done) => {
  try {
    let user = await User.findById(id, "name email");

    if (!user) return done(new Error("user not found"));

    return done(null, user);
  } catch (error) {
    console.error(error);
    return done(error);
  }
});

passport.use(
  "local",
  new passportLocal.Strategy(
    { usernameField: "email" },
    async (email, password, done) => {
      try {
        const user = await User.findOne({ email });

        if (!user) return done(null, false);

        const passwordMatch = await user.comparePassword(password);

        if (!passwordMatch) return done(null, false);

        return done(null, user);
      } catch (error) {
        console.error(error);
        done(error);
      }
    }
  )
);

export { passport };
