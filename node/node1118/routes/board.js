const express = require('express');

const router = express.Router();

router.get('/',(req,res)=>{
    res.send('Hello Board');
});

router.get('/write',(req,res)=>{
    res.send('글쓰기');
});

module.exports = router;