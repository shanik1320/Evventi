const router = require("express").Router();
const passport = require('passport');
const eventsController = require("../../controllers/eventsController");


// Matches with "/api/events"
router.route("/").get(eventsController.getEvents);

router.route("/addevent").post(eventsController.createEvent);

router.route("/:id").delete(eventsController.deleteEvent);

router.route("/:id").get(eventsController.getEvent);


module.exports = router;
