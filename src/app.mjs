import express from 'express'
import cors from 'cors'

const app = express();

//Settings

app.set('port', process.env.PORT || 4000);


//Middlewares

app.use(cors());
app.use(express.json());

//Routes
app.get('/users',(req,res) => res.send('Users Routes'));
app.get('/notes',(req,res) => res.send('Notes Routes'));

//Variables Globales

//Validación de código


export default app