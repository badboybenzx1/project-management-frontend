function AuthStatus() {
  // Get our logged in user, if they exist, from the root route loader data
  const { user } = useRouteLoaderData("root") as { user: string | null };
  // const fetcher = useFetcher();

  if (!user) {
    return <span>You are not logged in.</span>;
  }

  // const isLoggingOut = fetcher.formData != null;

  return (
    <div>
      <span>Welcome {user}!</span>
    </div>
  );
}

import React, { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  ProjectOutlined,
  HomeOutlined,
  UserOutlined,
  LoginOutlined,
} from "@ant-design/icons";
import {
  Layout,
  Menu,
  Button,
  theme,
  Row,
  Col,
  Space,
  Divider,
  MenuProps,
} from "antd";
import {
  Link,
  NavLink,
  Outlet,
  useFetcher,
  useRouteLoaderData,
  // withRouter,
} from "react-router-dom";

const { Header, Sider, Content } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

const MasterLayout: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const fetcher = useFetcher();
  const { user } = useRouteLoaderData("root") as { user: string | null };
  const isLoggingOut = fetcher.formData != null;

  const [items] = useState<MenuItem[]>([
    {
      key: "1",
      icon: <HomeOutlined />,
      label: (
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Public Page
        </NavLink>
      ),
    },
    {
      key: "2",
      icon: <LoginOutlined />,
      label: (
        <NavLink
          to="/login"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Login Page
        </NavLink>
      ),
    },
    {
      key: "3",
      icon: <UserOutlined />,
      label: <Link to="/protected">Protected Page</Link>,
    },
    {
      key: "4",
      icon: <ProjectOutlined />,
      label: <Link to="/project-detail">Project Detail</Link>,
    },
  ]);

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" style={{ height: 85 }} />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={items}
        />
      </Sider>
      <Layout style={{ minHeight: "100vh" }}>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Row justify="space-between">
            <Col span={12}>
              <Button
                type="text"
                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                onClick={() => setCollapsed(!collapsed)}
                style={{
                  fontSize: "16px",
                  width: 64,
                  height: 64,
                }}
              />
            </Col>
            <Col span={12}>
              <Space
                align="center"
                split={<Divider type="vertical" />}
                style={{
                  display: "flex",
                  justifyContent: "end",
                  marginRight: 16,
                }}
              >
                <AuthStatus />

                {user ? (
                  <fetcher.Form method="post" action="/logout">
                    <Button
                      type="default"
                      disabled={isLoggingOut}
                      htmlType="submit"
                    >
                      {isLoggingOut ? "Signing out..." : "Sign out"}
                    </Button>
                  </fetcher.Form>
                ) : null}
              </Space>
            </Col>
          </Row>
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          {/* Content
          <AuthStatus />
          <ul>
            <li>
              <Link to="/">Public Page</Link>
            </li>
            <li>
              <Link to="/protected">Protected Page</Link>
            </li>
          </ul> */}
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default MasterLayout;
