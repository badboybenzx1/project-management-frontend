import React, { useEffect, useState } from "react";
import useData from "../../hooks/useData";
import { Space } from "antd";
import { ColumnTypes } from "../../constants/enums";
import { IProduct } from "../../constants/models";
import WorkflowColumn from "./components/WorkflowColumn";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Cards from "./components/Cards";
import Title from "antd/es/typography/Title";

const ProjectDetail = () => {
  const [newArr, products] = useData();
  const [orders, setOrders] = useState<IProduct[] | undefined>([]);

  //creating side effects based on the data's response.
  useEffect(
    () => {
      setOrders(newArr);
    },
    [
      // products
    ]
  );

  const columnItem = (columnName: string) => {
    return orders
      ?.filter((order) => order.column === columnName)
      .map((order, index) => (
        <Cards
          key={order.id}
          name={order.name}
          material={order.material}
          setOrders={setOrders}
          index={index}
        />
      ));
  };

  const { ORDERS, IN_PROGRESS, DELIVERED, RETURNED } = ColumnTypes;

  return (
    <>
      <Title level={3}>Project Name: #Little Boy</Title>

      <div style={{ width: "100%", overflow: "auto", paddingBottom: 16 }}>
        <DndProvider backend={HTML5Backend}>
          <Space
            direction="horizontal"
            align="baseline"
            //   size={[8, 16]}
            size={109}
            style={{
              display: "flex",
            //   marginLeft: "20px",
              // marginTop: "20px",
              gap: "2rem",
            }}
          >
            <WorkflowColumn name={ORDERS}>{columnItem(ORDERS)}</WorkflowColumn>
            <WorkflowColumn name={IN_PROGRESS}>
              {columnItem(IN_PROGRESS)}
            </WorkflowColumn>
            <WorkflowColumn name={DELIVERED}>
              {columnItem(DELIVERED)}
            </WorkflowColumn>
            <WorkflowColumn name={RETURNED}>
              {columnItem(RETURNED)}
            </WorkflowColumn>
          </Space>
        </DndProvider>
      </div>
    </>
  );
};

export default ProjectDetail;
