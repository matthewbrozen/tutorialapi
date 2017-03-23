var express = require('express');
var router = express.Router();

var ideasController = require('../controllers/ideas');

router.use(function(req, res, next){
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

router.get('/', ideasController.index);
router.get('/:id', ideasController.show);
router.post('/', ideasController.create);
router.put('/:id', ideasController.update);
router.delete('/:id', ideasController.destroy);

module.exports = router;
