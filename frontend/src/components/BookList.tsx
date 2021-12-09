import { List } from "antd";
import { useEffect, useState } from "react";
import { getBooks } from "../api";
import BookInterface from "../models/Book";
import { useNavigate } from "react-router-dom";

import classes from './BookList.module.css'

const BookList: React.FC = (props) => {
  const [books, setBooks] = useState<BookInterface[]>([]);
  const navigate = useNavigate();

  const setData = async () => {
    const booksRetrieved = await getBooks();
    setBooks(booksRetrieved);
  };

  const moveToBook = (slug:string) => {
    navigate(`/books/${slug}`)
  };

  useEffect(() => {
    setData();
  }, []);

  const listBooks = books.map((book) => (
    <List.Item key={book.slug} onClick={()=>moveToBook(book.slug)}>
      <List.Item.Meta title={book.title} description={book.synopsis} />
    </List.Item>
  ));

  return <List className={classes.bookList}>{listBooks}</List>;
};
export default BookList;
