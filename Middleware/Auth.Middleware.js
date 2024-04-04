import dotenv from "dotenv";
import User from "../Models/User.Schema.js";
import jwt from "jsonwebtoken";
dotenv.config();

const authMiddleware = async (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Token is missing" });
  }

  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    req.user = decoded;

    const user = await User.findById(req.user._id);

    if (user.role != "Admin") {
      return res
        .status(401)
        .json({ message: "Access Denied.User is not an admin" });
    }
    next();
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Invalid Token,Internal Server Error" });
  }
};

export default authMiddleware;