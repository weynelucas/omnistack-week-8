const router = require('express').Router();

const { authenticate } = require('./middlewares/AuthMiddleware');

const DevController = require('./controllers/DevController');
const LikeController = require('./controllers/LikeController');
const DislikeController = require('./controllers/DislikeController');

const required = authenticate({
  headerProperty: 'user',
  requestProperty: 'user'
});

router.post('/devs', DevController.store);
router.post('/devs/:devId/likes', required, LikeController.store);
router.post('/devs/:devId/dislikes', required, DislikeController.store);


module.exports = router;