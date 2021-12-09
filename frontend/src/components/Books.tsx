import { List } from "antd";
import { useEffect, useState } from "react";
import { getBooks } from "../api";
import BookInterface from '../models/Book'

const Books: React.FC = (props) => {
  const [books, setBooks] = useState<BookInterface[]>([]);

  const setData = async () => {
    const booksRetrieved = await getBooks();
    setBooks(booksRetrieved);
  };

  useEffect(() => {
    setData();
  }, []);

  const listBooks = books.map((book) => 

    <List.Item>
      <List.Item.Meta title={book.title} description={book.synopsis} />
    </List.Item>

  );

  return <List>{listBooks}</List>;
};
export default Books;
