import express from "express";
import {
  AdminDashboard,
  ClickShortUrl,
  GetUrlcounts,
  ListAllUsers,
  Loginuser,
  RegisterUser,
  ResetPassword,
  forgotPassword,
  generateShortUrl,
} from "../Controllers/User.Controller.js";
import authMiddleware from "../Middleware/Auth.Middleware.js";

const userRouter = express.Router();

userRouter.post("/register", RegisterUser);
userRouter.post("/login", Loginuser);
userRouter.get("/listallusers", ListAllUsers);
userRouter.post("/forgotpassword", forgotPassword);
userRouter.put("/resetpassword", ResetPassword);
userRouter.post("/shorturl/:email", generateShortUrl);
userRouter.get("/shortid/:shortUrl", ClickShortUrl);
userRouter.get("/geturlcounts", GetUrlcounts);

userRouter.get("/authorized", authMiddleware, AdminDashboard);

export default userRouter;
