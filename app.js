import express from 'express';
import {studentRouter} from './routers/studentRouter.js'
import mongoose from 'mongoose'
// teste alteração - git
mongoose.connect('mongodb+srv://alcione:1986@cluster0.g0udn.mongodb.net/grades?retryWrites=true&w=majority', 
{ useNewUrlParser: true,
useUnifiedTopology: true  }).then(
    console.log('Conectado ao MongoDB Atlas/Connected to MongoDB Atlas')).catch((err) => {
        console.log(err);;
    }
);

const app = express();

app.use(express.json());
app.use(studentRouter);

app.listen(3000, ()=> {
    console.log('Servidor ativo');
})



