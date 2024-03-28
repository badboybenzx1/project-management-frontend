/* eslint-disable @typescript-eslint/no-explicit-any */
import { useDrag } from "react-dnd";
import { Avatar, Card, Checkbox, Space, Tag, Tooltip } from "antd";
import {
  AntDesignOutlined,
  UserOutlined,
  ClockCircleOutlined,
} from "@ant-design/icons";
import { ColumnTypes, cardType } from "../../../../constants/enums";

type obj = {
  name: string;
};

const Cards = ({
  // id,
  name,
  start,
  end,
  subtasks,
  // material,
  description,
  setOrders,
}: {
  // id: number;
  name: string;
  start?: Date;
  end?: Date;
  subtasks: string[];
  // material: string;
  description?: string;
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
      hoverable={true}
      title={name}
      className="card"
      ref={drag}
      style={{
        opacity: isDragging ? "0.5" : "1",
        marginBottom: "15px",
      }}
    >
      <Space direction="vertical">
        {/* <span>{description}</span> */}

        {description ? (
          <>
            <span>{description}</span>
            <Tag color="volcano">Hight</Tag>
          </>
        ) : (
          <Tag color="volcano">Hight</Tag>
        )}

        {/* <Tag color="volcano">Hight</Tag> */}

        <Space size="small" direction="vertical">
          {/* <Checkbox>Apple</Checkbox>
          <Checkbox>Pear</Checkbox>
          <Checkbox>Orange</Checkbox> */}
          {subtasks.map((x: string) => {
            return <Checkbox key={x}>{x}</Checkbox>;
          })}
        </Space>

        <p>
          <Tag icon={<ClockCircleOutlined />} color="default">
            {start?.toDateString()} - {end?.toDateString()}
          </Tag>
        </p>

        <Avatar.Group
          maxCount={2}
          size={"small"}
          maxStyle={{ color: "#f56a00", backgroundColor: "#fde3cf" }}
        >
          <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />
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
      <br />
      <br />

      <Space align="center"></Space>
    </Card>
  );
};

export default Cards;
