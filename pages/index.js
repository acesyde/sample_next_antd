import Head from "next/head";
import { Timeline, Button, Empty, Divider, PageHeader, Tag } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";

export default function Home() {
  const buildText = "Build : 123456";
  return (
    <div>
      <Head>
        <title>{buildText}</title>
      </Head>
      <PageHeader
        style={{ paddingLeft: "0px" }}
        title={buildText}
        subTitle="10/02/2009"
        tags={<Tag color="red">Error</Tag>}
        extra={[<Button type="primary">Retry</Button>]}
      ></PageHeader>
      <Divider />
      <Empty />
      <Divider />
      <Timeline mode="alternate">
        <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
        <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
        <Timeline.Item>Technical testing 2015-09-01</Timeline.Item>
        <Timeline.Item
          color="red"
          dot={<ExclamationCircleOutlined style={{ fontSize: "16px" }} />}
        >
          Network problems being solved 2015-09-01
        </Timeline.Item>
      </Timeline>
    </div>
  );
}
