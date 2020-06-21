import stylesheet from "antd/dist/antd.min.css";
import { Layout } from "antd";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Breadcrumb from "../components/Breadcrumb";
import css from "./app.module.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout style={{ minHeight: "100vh", overflow: "auto" }}>
      <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
      <Header />
      <Layout.Content style={{ padding: "0 50px" }}>
        <Breadcrumb />
        <div className={css.content}>
          <Component {...pageProps} />
        </div>
      </Layout.Content>
      <Footer />
    </Layout>
  );
}

export default MyApp;
