import express from "express";

const app = express();

try {
    app.use(express.json())
    app.use('/',(req,res)=>{
        return res.status(200).json({message:"Hello World"})
    })
    const PORT = 3333
    app.listen(PORT,()=>{
        console.log(`Server running at port ${PORT}`);
    })
} catch (error) {
    console.log(error);
}