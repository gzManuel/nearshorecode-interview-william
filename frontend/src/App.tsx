import { Routes, Route } from "react-router-dom";
import { Layout } from "antd";
import BookList from "./components/BookList";
import BookForm from "./components/BookForm";
import Book from "./components/Book";
import 'antd/dist/antd.css';

const { Content, Header, Footer } = Layout;

function App() {


  return (
    <Layout>
      <Header />
      <Content>
        <Routes>
          <Route path="/books/:slug" element={<Book />} />
          <Route path="/add-book" element={<BookForm />} />
          <Route path="/" element={<BookList />} />
        </Routes>
      </Content>
      <Footer />
    </Layout>
  );
}

export default App;
