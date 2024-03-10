import React from "react";
import { Row, Col, Space } from "antd";
import { useDrop } from "react-dnd";
import { cardType } from "../../../constants/enums";
import Title from "antd/es/typography/Title";

const WorkflowColumn = ({
  children,
  name,
}: {
  children: React.ReactNode;
  name: string;
}) => {
  const [{ isOver }, dropref] = useDrop({
    accept: cardType.ORDER,
    drop: () => ({
      name,
    }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  return (
    <>
      <Title level={4}>h4. {name}</Title>

      <Row gutter={30} wrap={false} style={{ marginLeft: 0 }}>
        <Col
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.05)",
            width: 300,
            padding: "0.5rem",
            minHeight: "70vh",
            maxHeight: "690px",
            borderRadius: "5px",
            overflowY: "scroll",
          }}
        >
          <div
            ref={dropref}
            style={{
              width: "100%",
              height: "100%",
              padding: "4px",
              border: isOver ? "dashed 1px black" : "",
            }}
          >
            {children}
          </div>
        </Col>
      </Row>
    </>
  );
};

export default WorkflowColumn;