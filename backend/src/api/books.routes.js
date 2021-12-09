import express from 'express';
import { getBooks } from '../services/books'

const router = express.Router();

router.get('/books', getBooks);

export default router;