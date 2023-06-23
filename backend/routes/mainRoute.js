const express = require('express');
const router = express.Router();

router.get('/intro',(req, res)=> {
    const str = `I am a skilled software developer with a strong background in Java and Python programming. 
    In addition to my expertise in these languages, I am also proficient in Node.js and React.js, which have 
    allowed me to develop modern and scalable web applications. With a Bachelor of Science in Computer Science,
    I possess a solid foundation in software development principles and techniques.My experience includes database
    management using SQL, where I have designed and implemented database structures, optimized query performance, 
    and ensured data integrity. With my exceptional problem-solving skills, attention to detail, and collaborative
    approach, I am committed to delivering high-quality software solutions.`;
    
    res.json(str);
});


module.exports = router;