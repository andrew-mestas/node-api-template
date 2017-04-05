const Router = require('express').Router;
const router = module.exports = exports = Router();

router.get('/', (req, res) => {
  res.status(200).json({"Message" : "GET /api works!"});
});

router.get('/:test', (req, res) => {
  res.status(200).json({"Message" : "GET /api/" + req.params.test + " works!"});
});

router.post('/', (req, res) => {
  res.status(200).json({"Message" : "POST /api works!"});
});

router.post('/hasbody', (req, res) => {
  res.status(200).json({"Message" : "POST /api works!", body: req.body.value});
});
