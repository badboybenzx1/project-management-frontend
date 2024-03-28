import { Avatar, Button, Space, Tabs, TabsProps } from "antd";
import {
  ProfileOutlined,
  ProjectOutlined,
  CalendarOutlined,
  UnorderedListOutlined,
  LineChartOutlined,
  UserOutlined,
  AntDesignOutlined,
  UserAddOutlined
} from "@ant-design/icons";
import Title from "antd/es/typography/Title";
import ProjectTimeline from "./Tabs/ProjectTimeline/ProjectTimeline";
import Dashboard from "./Tabs/Dashboard/Dashboard";
import TaskList from "./Tabs/TaskList/TaskList";
import ProjectBoard from "./Tabs/Board/ProjectBoard";
import ProjectOverview from "./Tabs/ProjectOverview";

const items: TabsProps["items"] = [
  {
    key: "1",
    label: "Overview",
    children: <ProjectOverview />,
    icon: <ProfileOutlined />,
  },
  {
    key: "2",
    label: "List",
    children: <TaskList />,
    icon: <UnorderedListOutlined />,
  },
  {
    key: "3",
    label: "Board",
    children: <ProjectBoard />, //"Content of Tab Pane 3",
    icon: <ProjectOutlined />,
  },
  {
    key: "4",
    label: "Timeline",
    children: <ProjectTimeline />,
    icon: <CalendarOutlined />,
  },
  {
    key: "5",
    label: "Dashboard",
    children: <Dashboard />,
    icon: <LineChartOutlined />,
  },
];

const operations = (
  <>
    <Space>
      <Avatar.Group
        maxCount={4}
        maxStyle={{ color: "#f56a00", backgroundColor: "#fde3cf" }}
      >
        <Avatar style={{ backgroundColor: "#fde3cf" }}>A</Avatar>
        <Avatar style={{ backgroundColor: "#f56a00" }}>K</Avatar>
        <Avatar
          style={{ backgroundColor: "#87d068" }}
          icon={<UserOutlined />}
        />
        <Avatar
          style={{ backgroundColor: "#1677ff" }}
          icon={<AntDesignOutlined />}
        />
        <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />
        <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=2" />
        <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=3" />
      </Avatar.Group>
      <Button type="dashed" size="small"  icon={<UserAddOutlined />}>Add member</Button>
    </Space>
  </>
);
const ProjectDetail = () => {
  return (
    <>
      {/* <div>ProjectDetail</div> */}
      <Title level={4}>Project Name: #Little Boy</Title>

      <Tabs tabBarExtraContent={operations} items={items} />
    </>
  );
};

export default ProjectDetail;
