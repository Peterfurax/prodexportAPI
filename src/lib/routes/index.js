const express = require('express');
const router = express.Router();
const store = require('../store/store');

router.get('/web2web.json', (req, res) => {
  // console.log('MYSTORE', store.ARR);
  // console.log(Array.isArray(store.ARR));
  // var d = JSON.stringify(store.ARR);
  // console.log(d);
  // var n = d.toJSON();
  // let response = store.ARR;
  // res.json(store.ARR).status(200);
  // require('../actions/actions').JSON_TO_CSV(store.ARR);
  res.json(store.ARR).status(200);
});
router.get('/', (req, res) => {
  // console.log('MYSTORE', store.ARR);
  // console.log(Array.isArray(store.ARR));
  // var d = JSON.stringify(store.ARR);
  // console.log(d);
  // var n = d.toJSON();
  // let response = store.ARR;
  // res.json(store.ARR).status(200);
  // require('../actions/actions').JSON_TO_CSV(store.ARR);
  res.json(store.ARR).status(200);
});

router.get('/json', (req, res) => {
  // console.log('MYSTORE', store.ARR);
  // console.log(Array.isArray(store.ARR));
  // var d = JSON.stringify(store.ARR);
  // console.log(d);
  // var n = d.toJSON();
  // let response = store.ARR;
  // res.json(store.ARR).status(200);
  // require('../actions/actions').JSON_TO_CSV(store.ARR);
  res.download(require('../actions/actions').JSON_TO_CSV(store.ARR), 'report.pdf', function(err) {
    if (err) {
      // Handle error, but keep in mind the response may be partially-sent
      // so check res.headersSent
    } else {
      // decrement a download credit, etc.
    }
  });
});
module.exports = router;
