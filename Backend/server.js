import express from "express";
import morgan from "morgan";
import cors from "cors";
import { fileURLToPath } from "url";
import path from "path";


const app = express();


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static('public'));


app.get('/api/health', (req,res)=>{
    res.status(200).json({status: 'ok'});
})

app.get('/api/hello', (req,res)=>{
    res.status(200).json({message: 'Hello from the backend!'});
})

app.get('/api/users', (req,res)=>{
    const users = [
        {id: 1, name: 'John Doe'},
        {id: 2, name: 'Jane Smith'},
        {id: 3, name: 'Alice Johnson'}
    ];
    res.status(200).json(users);
})


app.get("*name", (req, res) => {
    res.sendFile("public/index.html", { root: __dirname});
})

app.listen(3000, "0.0.0.0", () => {
  console.log("Server is running on port 3000");
});

