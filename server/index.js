import express from 'express';
import cors from 'cors';

const PORT=5000
const app = express();

app.use(express.json());
app.use(cors());

//API route
app.get("/api/message", (req, res) => {
    res.json({message: "Hello from arunava server"})
    console.log("Hello");
    
})

app.listen(PORT, ()=> console.log(`Server is running at http://localhost:${PORT}`))