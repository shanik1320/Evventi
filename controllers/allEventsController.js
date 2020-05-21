const Event = require("../models/event");

module.exports = {
    getEvents: function (req, res) {
console.log("get events");

			Event.find()
				.then(eventData => {
					console.log(eventData);
					return res.status(200).json(
						eventData
					)
				})
	
		},
     
    createEvent: function (req, res) {
		console.log('/create Event', req.body);
        Event.create( req.body)
        .then(err =>{
            console.log(err);
            res.send('event saved')
        })

    }
};