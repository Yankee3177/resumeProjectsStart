const express = require('express');
const router = express.Router();

router.get('/recipeApp',(req, res)=> {
    const str = "Recipe App";
    res.json(str);
});

router.get('/sqlInterface',(req, res)=> {
    const str = "Sql Interface";
    res.json(str);
});

router.get('/stitchingDesign',(req, res)=> {
    const str = "Stitching Design";
    res.json(str);
});

router.get('/caesarEncrypt',(req, res)=> {
    const str = "Caesar Encryption";
    res.json(str);
});


module.exports = router;