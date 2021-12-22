// import { Route } from "react-router-dom";
import React from "react";
import { List, Button, Typography } from "antd";
// import "../styles/TodoComponentStyle.css";
const { Text } = Typography;

export default function TodoComponent({ todo }) {
  return (
    <>
      <List.Item>
        <Text>{todo.task}</Text>
      </List.Item>
    </>
  );
}
