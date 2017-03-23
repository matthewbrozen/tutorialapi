var mongoose = require('mongoose');

var ideaSchema = mongoose.Schema({
    name: String,
    description: String
});

var Idea = mongoose.model("Idea", ideaSchema);
module.exports = Idea;
