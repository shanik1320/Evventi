const router = require("express").Router();
const passport = require('passport');
const allEventsController = require("../../controllers/allEventsController");
// Matches with "/api/events"
router.route("/")
  .get(allEventsController.getEvents);


router.route("/addevent")
 .post(allEventsController.createEvent);

  module.exports = router;