import { Form, Input, Button } from "antd";
import { useReducer } from "react";
import BookInterface from "../models/Book";
import { postBook } from "../api";

enum FormActionKind {
  UPDATE_TITLE = "UPDATE_TITLE",
  UPDATE_SLUG = "UPDATE_SLUG",
  UPDATE_ISBN = "UPDATE_ISBN",
  UPDATE_AUTHOR = "UPDATE_AUTHOR",
  UPDATE_PUBLISHER = "UPDATE_PUBLISHER",
  UPDATE_SYNOPSIS = "UPDATE_SYNOPSIS",
}

interface ActionForm {
  type: FormActionKind;
  payload: string;
}


const formReducer = (state: BookInterface, action: ActionForm): BookInterface => {
  const { type, payload } = action;

  switch (type) {
    case FormActionKind.UPDATE_TITLE:
      return { ...state, title: payload };
    case FormActionKind.UPDATE_SLUG:
      return { ...state, slug: payload };
    case FormActionKind.UPDATE_ISBN:
      return { ...state, isbn: payload };
    case FormActionKind.UPDATE_AUTHOR:
      return { ...state, author: payload };
    case FormActionKind.UPDATE_PUBLISHER:
      return { ...state, publisher: payload };
    case FormActionKind.UPDATE_SYNOPSIS:
      return { ...state, synopsis: payload };
  }
};

const BookForm: React.FC = (props) => {

  const [formState, dispatchReducer] = useReducer(formReducer, {
    title: '',
    slug: '',
    isbn: '',
    author: '',
    publisher: '',
    synopsis: ''
  });

  const onFinish = async () => {
    const book ={
      title: formState.title,
      slug: formState.slug,
      isbn: formState.isbn,
      author: formState.author,
      publisher: formState.publisher,
      synopsis: formState.synopsis
    };
    const savedBook = await postBook(book);
    console.log(savedBook);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Title"
        name="title"
        rules={[{ required: true, message: "Please input your Title!" }]}
      >
        <Input
          onChange={(event) =>
            dispatchReducer({
              type: FormActionKind.UPDATE_TITLE,
              payload: event.target.value,
            })
          }
        />
      </Form.Item>

      <Form.Item
        label="Slug"
        name="slug"
        rules={[{ required: true, message: "Please input your Slug!" }]}
      >
        <Input
          onChange={(event) =>
            dispatchReducer({
              type: FormActionKind.UPDATE_SLUG,
              payload: event.target.value,
            })
          }
        />
      </Form.Item>

      <Form.Item
        label="Isbn"
        name="isbn"
        rules={[{ required: true, message: "Please input your Isbn!" }]}
      >
        <Input
          onChange={(event) =>
            dispatchReducer({
              type: FormActionKind.UPDATE_ISBN,
              payload: event.target.value,
            })
          }
        />
      </Form.Item>

      <Form.Item
        label="Author"
        name="author"
        rules={[{ required: true, message: "Please input your Author!" }]}
      >
        <Input
          onChange={(event) =>
            dispatchReducer({
              type: FormActionKind.UPDATE_AUTHOR,
              payload: event.target.value,
            })
          }
        />
      </Form.Item>

      <Form.Item
        label="Publisher"
        name="publisher"
        rules={[{ required: true, message: "Please input your Publisher!" }]}
      >
        <Input
          onChange={(event) =>
            dispatchReducer({
              type: FormActionKind.UPDATE_PUBLISHER,
              payload: event.target.value,
            })
          }
        />
      </Form.Item>
      <Form.Item
        label="Synopsis"
        name="synopsis"
        rules={[{ required: true, message: "Please input your Synopsis!" }]}
      >
        <Input.TextArea
          onChange={(event) =>
            dispatchReducer({
              type: FormActionKind.UPDATE_SYNOPSIS,
              payload: event.target.value,
            })
          }
        />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default BookForm;
