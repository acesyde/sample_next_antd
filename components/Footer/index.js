import React, { Component } from "react";
import { Layout } from "antd";

const style = {
  textAlign: "center",
};

export default class Footer extends Component {
  render() {
    return (
      <Layout.Footer style={style}>PE Design or not / 2020</Layout.Footer>
    );
  }
}
