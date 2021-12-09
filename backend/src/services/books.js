import database from "../database"


export const getBooks = async (req, res) => {
    const db = database();
    const books = await db.getBooks();
    res.status(200).json({ data: books });
}

export const getBook = async (req, res)=>{
    const db = database();
    const book = await db.getBook(req.params.slug);
    return res.status(200).json({data:book});
}