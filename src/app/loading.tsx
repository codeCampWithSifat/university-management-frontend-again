import { Row, Spin } from "antd";

const Loading = () => {
  return (
    <Row
      style={{
        minHeight: "100vh",
      }}
      justify="center"
      align="middle"
    >
      <Spin tip="Loading" size="large">
        <div className="content" />
      </Spin>
    </Row>
  );
};

export default Loading;
