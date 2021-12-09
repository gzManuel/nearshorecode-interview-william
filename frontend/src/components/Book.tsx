import { List } from "antd";

const Book: React.FC<{title:string, description:string}> = (props) => {
  return (
    <List.Item>
      <List.Item.Meta title={props.title} description={props.description} />
    </List.Item>
  );
};

export default Book;
