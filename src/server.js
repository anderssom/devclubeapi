import express from  'express';
import cors from 'cors';
//prisma
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const  app = express();
app.use(express.json());
app.use(cors());


//rota de criar usuario
app.post('/users', async (req, res)=> {

   await prisma.user.create ({
        data: {  
            email: req.body.email,
            name: req.body.name,
            age: req.body.age
        }
    })

    res.status(201).json(req.body);
});

//rota de listar usuario
app.get('/users', async (req, res)=> {
    
    const users  = await prisma.user.findMany();

    res.status(200).json(users);

});

//rota de editar usuario
app.put('/users/:id', async (req, res)=> {

   await prisma.user.update ({
    where: { 
        id: req.params.id

    },

        data: {  
            email: req.body.email,
            name: req.body.name,
            age: req.body.age
        }
    })

res.status(201).json(req.body);
});

//rota de deletar usuario
app.delete('/users/:id', async (req, res)=> {

    await prisma.user.delete ({
     where: { 
         id: req.params.id
 
     },
    })
 
 res.status(200).json({menssage: 'Usuario deletado com  sucesso'});
 });

 //rota de listar um usuario
app.get('/users', async (req, res)=> {

    let users = [];

    if  (req.query) {
    
     users  = await prisma.user.findMany({
        where:  { 
            email: req.body.email,
            name: req.body.name,
            age: req.body.age

            }
        })

     } else {

          users = await prisma.user.findMany();
     }
      res.status(200).json(users)

});

const port = 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});