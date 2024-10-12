import express from  'express';
import cors from 'cors';

const  app = express();
app.use(express.json());
app.use(cors());

app.get('/users', (req, res)=> {
    res.send('Ok filhinho')

})

const port = 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})