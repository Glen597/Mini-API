import express from 'express'
import userRoutes from './routes/userRoutes.js';

const app = express();
const port = 3000;


app.use(express.json());

app.use(express.urlencoded({extended: true}));

app.use("/users",userRoutes);


app.listen(port, ()=>{
    console.log(`Server is listening on port ${port}`);
})