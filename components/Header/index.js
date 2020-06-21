import React from "react";
import { Layout, Menu } from "antd";
import css from "./header.module.css";

export default function Header() {
  return (
    <Layout.Header>
      <div className={css.logo}></div>
      <Menu theme="dark" mode="horizontal">
        <Menu.Item key="1">Home</Menu.Item>
      </Menu>
    </Layout.Header>
  );
}
