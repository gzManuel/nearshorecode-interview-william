import express from 'express';
import { getBook, getBooks } from '../services/books'

const router = express.Router();

router.get('/books', getBooks);

router.get('/books/:slug', getBook);

export default router;