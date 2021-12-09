import { Routes, Route } from "react-router-dom";
import { Layout } from "antd";
import Book from "./components/Book";
import Books from "./components/Books";
import { useEffect } from "react";
import { getBooks, getBook, postBook } from "./api";
import BookModel from "./models/Book";
import BookForm from "./components/BookForm";

const { Content, Header, Footer } = Layout;

function App() {
 
  return (
    <Layout>
      <Header />
      <Content>
        <Routes>
          <Route path="/add-book" element={<BookForm />} />
          <Route path="/" element={<BookForm />} />
        </Routes>
      </Content>
      <Footer />
    </Layout>
  );
}

export default App;
