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
		Event.create(req.body)
			.then(err => {
				console.log(err);
				res.send('event saved')
			})

	},
	deleteEvent: function (req, res) {
		//get the id from the request
		const {id} = req.params;
		console.log('/delete Event', id);
		//remove this one from the db
		Event.deleteOne({_id :id})
			.then(err => {
				console.log(err);
				res.redirect('/profile')
			})

	},
	getEvent: function (req, res) {
		//get the id from the request
		const {id} = req.params;
		console.log('/get Event', id);
		//remove this one from the db
		Event.findById(id)
			.then(data => {
				res.json(data);
			})

	},

	
	
}
