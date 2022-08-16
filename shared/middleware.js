const jwt = require("jsonwebtoken");

// middleware
const middleware = {
  // auth middleware
  async auth(req, res, next) {
    try {
      if (req.headers && req.headers.authorization) {
        const [_, token] = req.headers.authorization.split(" ");
        req.user = await jwt.verify(token, "Thambi.. soldradhuku illa😏");
        console.log(req.user);
        next();
      } else {
        res.status(403).send({ error: "No authorization headers" });
      }
    } catch (error) {
      res.status(403).send({ error: error.message });
    }
  },
}

module.exports  =middleware