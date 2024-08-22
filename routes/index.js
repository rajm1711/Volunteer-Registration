const express = require('express');
const router = express.Router();
const controller = require('../controller/controller');

router.get('/', controller.homeController);
router.post('/addVOL', controller.addController);
router.get('/editVOL/:id', controller.editController);
router.post('/updateVOL/:id', controller.updateController);
router.get('/deleteVOL/:id', controller.deleteController);


module.exports = router;

