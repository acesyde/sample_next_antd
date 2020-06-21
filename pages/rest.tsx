import React, { Component } from "react";
import { NextPage, NextPageContext } from "next";
import axios from "axios";

interface Props {
  title?: string;
  response?: any;
}

export default class rest extends Component<Props> {
  static async getInitialProps({ req }: NextPageContext) {
    const result = await axios.get(
      "https://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=439d4b804bc8187953eb36d2a8c26a02"
    );
    const data = await result.data;
    console.log(data);
    return { response: data };
  }

  render() {
    return <div>{this.props.response.coord.lon}</div>;
  }
}
