import { Routes, Route } from "react-router-dom";
import { Layout } from "antd";
import Books from "./components/Books";
import BookForm from "./components/BookForm";

const { Content, Header, Footer } = Layout;

function App() {
 
  return (
    <Layout>
      <Header />
      <Content>
        <Routes>
          <Route path="/add-book" element={<BookForm />} />
          <Route path="/" element={<Books />} />
        </Routes>
      </Content>
      <Footer />
    </Layout>
  );
}

export default App;
