const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const messageSchema = new Schema({
	'sender': {
		type: String,
		required: true
	},
	'reciever': {
		type: String,
		required: true
	},
	"header": {
		type: String,
	},
	"message": {
		type: String,
	},
	"createdAt": {
		type: Date,
		default: Date.now()
	}
});
const Message = module.exports = mongoose.model("Message", messageSchema);
