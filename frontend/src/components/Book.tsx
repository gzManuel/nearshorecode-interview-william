import { Card } from "antd";
import { useCallback, useEffect, useState } from "react";
import BookInterface from "../models/Book";
import { getBook } from "../api";
import { useParams } from "react-router-dom";

const Book: React.FC = (props) => {
  const { slug } = useParams();
  
  const [book, setBook] = useState<BookInterface>({
    title: "",
    slug: "",
    isbn: "",
    author: "",
    publisher: "",
    synopsis: "",
  });

  const setData = useCallback(async () => {
    const bookRetrieved = await getBook(slug);
    setBook(bookRetrieved);
  }, [slug]);

  useEffect(() => {
    setData();
  }, [setData]);

  return (
    <div className="site-card-border-less-wrapper">
      <Card title={book.title} bordered={true} style={{ width: 300 }}>
        <p>slug: {book.slug}</p>
        <p>isbn: {book.isbn}</p>
        <p>Author: {book.author}</p>
        <p>publisher: {book.publisher}</p>
        <p>Synopsis: {book.synopsis}</p>
      </Card>
    </div>
  );
};

export default Book;
