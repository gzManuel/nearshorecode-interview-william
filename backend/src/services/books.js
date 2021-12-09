import database from "../database"

const db = database();

export const getBooks = async (req, res) => {
    const books = await db.getBooks();
    res.status(200).json({ data: books });
}

export const getBook = async (req, res) => {
    const book = await db.getBook(req.params.slug);
    return res.status(200).json({ data: book });
}

export const postBook = async (req, res) => {
    const body = req.body;
    // const book = {
    //     title: body.,
    //     slug: 'cracking-the-code-interview',
    //     isbn: '193-454-344',
    //     author: 'Gayle Laakmann McDowell',
    //     publisher: 'Career up',
    //     synopsis: `Cracking the Coding Interview, 6th Edition is here to help you through this process, teaching you what you need to know and enabling you to perform at your very best. I've coached and interviewed hundreds of software engineers. The result is this book.`
    // }
    
    const bookSaved = await db.setBook('cracking-the-code-interview', body);
    return res.status(200).json({ data: bookSaved })
}