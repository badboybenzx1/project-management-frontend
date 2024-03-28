import { Card, Col, Row } from "antd";
import Meta from "antd/es/card/Meta";
import Title from "antd/es/typography/Title";
import { PlusOutlined } from "@ant-design/icons";

const NewWorkflowColumn = () => {
  return (
    <>
      <Row gutter={30} wrap={false} style={{ marginLeft: 0 }} align="middle" justify="center" >
        <Col>
          <Title level={4}>Add new</Title>
        </Col>
      </Row>

      <Row gutter={30} wrap={false} style={{ marginLeft: 0 }} align="middle">
        <Col
          style={{
            // backgroundColor: "rgba(0, 0, 0, 0.01)",
            width: 300,
            // padding: "0.5rem",
            minHeight: "65vh",
            maxHeight: "690px",
            // borderRadius: "5px",
            // overflowY: "scroll",
            display: "flex",
          }}
          flex={"auto"}
        >
          <Card
            hoverable
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
            }}
            // cover={
            //   <img
            //     alt="example"
            //     src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
            //   />
            // }
          >
            <PlusOutlined style={{ fontSize: "32px" }} />
            <Meta title="" description="Add new Task" />
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default NewWorkflowColumn;
