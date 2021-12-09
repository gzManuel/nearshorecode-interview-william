import express from 'express';
import { getBook, getBooks, postBook, } from '../services/books'

const router = express.Router();

router.get('/books', getBooks);

router.get('/books/:slug', getBook);
router.post('/books', postBook);


export default router;