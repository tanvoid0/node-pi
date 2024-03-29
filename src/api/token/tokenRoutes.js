var express = require('express');
var router = express.Router();
var tokenController = require('./tokenController.js');

/*
 * GET
 */
router.get('/', tokenController.list);

/*
 * GET
 */
router.get('/:id', tokenController.show);

/*
 * POST
 */
router.post('/', tokenController.create);

/*
 * PUT
 */
router.put('/:id', tokenController.update);

/*
 * DELETE
 */
router.delete('/:id', tokenController.remove);

module.exports = router;
