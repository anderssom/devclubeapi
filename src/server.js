import express from  'express';

const  app = express();

app.get('/users', (req, res)=> {
    res.send('Ok filhinho')

})

const port = 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})