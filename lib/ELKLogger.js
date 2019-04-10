var elasticsearch = require("elasticsearch"),
  ELK_HOST =
    "https://search-kinesis-ingestion-stage-temp-wlmuadurdfgvyhvjjvhlfzr36u.us-east-1.es.amazonaws.com",
  ELK_INDEX = "npm-api-client",
  ELK_TYPE = "logs",
  winston = require("winston"),
  Elasticsearch = require("winston-elasticsearch"),
  client = new elasticsearch.Client({ host: ELK_HOST }),
  esTransportOpts = {
    level: "info",
    indexPrefix: ELK_INDEX,
    indexSuffixPattern: "DD-MM-YYYY",
    client: client,
    messageType: ELK_TYPE
  },
  logger = winston.createLogger({
    transports: [new Elasticsearch(esTransportOpts)]
  });
module.exports = {
  log: function(message, fields) {
    try {
      logger.info(message, fields);
    } catch (e) { }
  }
};
