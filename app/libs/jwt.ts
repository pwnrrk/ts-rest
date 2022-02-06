import jwt from "jsonwebtoken";
import process from "process";
import express from "express";

const config = process.env;

function verifiyToken(
  request: express.Request,
  response: express.Response,
  next: express.NextFunction
) {
  const token =
    request.body.token ||
    request.query.token ||
    request.headers["x-access-token"] ||
    (request.headers.authorization &&
      request.headers.authorization.split(" ")[1]);
  const prefix = request.headers.authorization
    ? request.headers.authorization.split(" ")[0]
    : "";
  if (!token || prefix !== "Bearer") {
    return response.status(403).json({ message: "Invalid Token" });
  }
  try {
    if (!config.TOKEN_KEY)
      return response.status(500).json({ message: "Internal Exception" });
    const decoded = jwt.verify(token, config.TOKEN_KEY, {});
    request.body.user = decoded;
  } catch (error) {
    return response.status(401).json({ message: "Unauthorized" });
  }
  return next();
}

export default verifiyToken;
