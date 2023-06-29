const express = require('express');
const router = express.Router();

router.get('/project1',(req, res)=> {
    const str = "This is a test trial";
    res.json(str);
});


module.exports = router;