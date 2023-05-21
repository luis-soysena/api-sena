"use strict";

class ApiKeyMiddleware {
  static check(req, res, next) {
    const apiKey = req.header("x-api-key");

    if (!apiKey){
      return next(
        res.status(401).send({
          code: 401,
          message: "Unauthorized: No API key supplied.",
        })
      );
    }

    if (apiKey !== process.env.API_KEY) {
      return next(
        res.status(401).send({
          code: 401,
          message: "Unauthorized: Invalid API key.",
        })
      );
    }

    return next();
  }
}

module.exports = ApiKeyMiddleware;
