import React from "react";
import { Row, Col } from "antd";
import { useDrop } from "react-dnd";
import Title from "antd/es/typography/Title";
import { cardType } from "../../../../constants/enums";

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
      <Title level={4}>{name}</Title>

      <Row gutter={30} wrap={false} style={{ marginLeft: 0 }}>
        <Col
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.05)",
            width: 300,
            padding: "0.5rem",
            minHeight: "65vh",
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
              border: isOver ? "dashed 1px #1677ff" : "",
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
