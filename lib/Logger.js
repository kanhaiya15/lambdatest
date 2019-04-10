var winston = require("winston"),
  logger = winston.createLogger({
    level: "info",
    format: winston.format.combine(
      winston.format.timestamp(),
      winston.format.json()
    ),
    transports: [new winston.transports.File({ filename: "lambda_api.log" })]
  });
module.exports = logger;