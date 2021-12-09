import express from "express";
import cors from 'cors';
import bookRoute from './api/books.routes'

const app = express();

try {
    app.use(express.json())

    app.use(cors({
        origin: '*'
    }))

    app.use('/', bookRoute);

    const PORT = 3333
    app.listen(PORT, () => {
        console.log(`Server running at port ${PORT}`);
    })
} catch (error) {
    console.log(error);
}