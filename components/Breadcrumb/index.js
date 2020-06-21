import React, { Component } from "react";
import { Breadcrumb as AntdBreadcrumb } from "antd";
import BreadcrumbItem from "antd/lib/breadcrumb/BreadcrumbItem";

const breadcrumbStyle = {
    padding: '16px 0'
}

export default class Breadcrumb extends Component {
  render() {
    return <AntdBreadcrumb style={breadcrumbStyle} separator=">">
        <AntdBreadcrumb.Item>Home</AntdBreadcrumb.Item>
        <AntdBreadcrumb.Item>Index</AntdBreadcrumb.Item>
    </AntdBreadcrumb>;
  }
}
