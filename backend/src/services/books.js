import database from "../database"


export const getBooks = async (req, res) => {
    const db = database();
    const books = await db.getBooks();
    res.status(200).json({ data: books })
}
