var Idea = require('../models/idea');


//show all ideas
function index(req, res, next) {
  Idea.find({}, function(err, ideas) {
    if (err) throw err;
    res.json({allIdeas: ideas});
  }).select('-_v');
}

//show one idea
function show(req, res, next) {
  var id = req.params.id;
  Idea.findOne({_id: id}, function(err, idea) {
    if (err) throw err;
    res.json({selectedIdea: idea});
  });
}

//create a idea
function create(req, res, next) {
  var idea = new Idea();
      idea.name = req.body.name;
      idea.description = req.body.description;
  idea.save(function(err, idea) {
    if (err) throw err;
    res.json({newIdea: idea});
  });
}

//update a idea
function update(req, res) {
  var id = req.params.id;

  Idea.findOne({_id:id}, function(err, idea) {
    if (err) throw err;
    if(req.body.name) idea.name = req.body.name;
    if(req.body.description) idea.description = req.body.description;
    idea.save(function(err, idea) {
      res.json({updatedIdea: idea});
    });
  });
}

// delete a idea
function destroy(req, res) {
  var id = req.params.id;

  Idea.remove({_id: id}, function(err) {
    if(err) response.json({message: 'Could not delete idea b/c:' + err});

    res.json({message: 'Idea successfully deleted'});
  }).select('-__v');
}

module.exports = {
  index: index,
  show: show,
  create: create,
  update: update,
  destroy: destroy
}
