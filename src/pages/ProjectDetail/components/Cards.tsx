/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { useDrag } from "react-dnd";
import { Avatar, Card, Space, Tooltip } from "antd";
import { ColumnTypes, cardType } from "../../../constants/enums";
import { AntDesignOutlined, UserOutlined } from "@ant-design/icons";

type obj = {
  name: string;
};

const Cards = ({
  name,
  material,
  setOrders,
}: {
  name: string;
  material: string;
  setOrders: any;
  index: number;
}) => {
  const orderColumnChange = (CurrentOrder: any, columnName: string) => {
    setOrders((prevState: string[]) => {
      return prevState.map((item: any) => {
        return {
          ...item,
          column: item.name === CurrentOrder.name ? columnName : item.column,
        };
      });
    });
  };

  const [{ isDragging }, drag] = useDrag({
    type: cardType.ORDER,
    item: { name },
    end: (order, monitor) => {
      const dropResult = monitor.getDropResult<obj>();

      if (dropResult) {
        const { name } = dropResult;
        const { ORDERS, IN_PROGRESS, DELIVERED, RETURNED } = ColumnTypes;
        switch (name) {
          case ORDERS:
            orderColumnChange(order, ColumnTypes.ORDERS);
            break;
          case IN_PROGRESS:
            orderColumnChange(order, ColumnTypes.IN_PROGRESS);
            break;
          case DELIVERED:
            orderColumnChange(order, ColumnTypes.DELIVERED);
            break;
          case RETURNED:
            orderColumnChange(order, ColumnTypes.RETURNED);
            break;
          default:
            break;
        }
      }
    },

    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <Card
      title={name}
      className="card"
      ref={drag}
      style={{
        opacity: isDragging ? "0.5" : "1",
        marginBottom: "15px",
        boxShadow: "1px 4px 11px -2px rgba(135,135,135,0.75)",
      }}
    >
      {material}
      <br />
      <br />

      <Space align="center">
        <Avatar.Group
          maxCount={2}
          size={"small"}
          maxStyle={{ color: "#f56a00", backgroundColor: "#fde3cf" }}
        >
          <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=2" />
          <Avatar style={{ backgroundColor: "#f56a00" }}>K</Avatar>
          <Tooltip title="Ant User" placement="top">
            <Avatar
              style={{ backgroundColor: "#87d068" }}
              icon={<UserOutlined />}
            />
          </Tooltip>
          <Avatar
            style={{ backgroundColor: "#1677ff" }}
            icon={<AntDesignOutlined />}
          />
        </Avatar.Group>
      </Space>
    </Card>
  );
};

export default Cards;
