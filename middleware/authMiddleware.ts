import { RequestHandler } from "express";

const token = "NE1UfhgViLOFl1EevJPkVxSy0DMRBqZ9qkOYlBFP41cfbf10";
const checkToken:RequestHandler = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    
    if (authHeader && authHeader !== "null" && authHeader === token) {
      next();
    } else {
      res.status(403).json({ success: false, message: "UnAuthorized" });
    }
  } catch (error) {
    throw error;
  }
}

export default checkToken;
