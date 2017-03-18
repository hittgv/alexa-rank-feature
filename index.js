const express = require("express");
const app = express();

global.port = process.env.PORT || 3000;
global.logger = require("winston");
logger.level = process.env.LOG_LEVEL || "debug";

const bodyParser = require("body-parser");
app.use(bodyParser.json({limit: "20mb"}));

const morgan = require("morgan");
app.use(morgan('combined'));

const alexaData = require("alexa-traffic-rank");
app.post("/", function(req, res) {
    const url = req.body.url;
    alexaData.AlexaWebData(url, function(err, result) {
        if(err) {
            logger.error(err);
            return res.status(500).send();
        }

        return res.send(result);
    });
});

app.listen(port, function(err) {
    if(err) {
        logger.error(`Failed to listen on port ${port}.`);
        return process.exit(1);
    }

    logger.info(`Listening on port ${port}.`);
});
