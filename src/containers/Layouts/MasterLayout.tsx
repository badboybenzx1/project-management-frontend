function AuthStatus() {
  // Get our logged in user, if they exist, from the root route loader data
  const { user } = useRouteLoaderData("root") as { user: string | null };
  const fetcher = useFetcher();

  if (!user) {
    return <span>You are not logged in.</span>;
  }

  const isLoggingOut = fetcher.formData != null;

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
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Button, theme, Row, Col, Space, Divider } from "antd";
import { Link, Outlet, useFetcher, useRouteLoaderData } from "react-router-dom";

const { Header, Sider, Content } = Layout;

const MasterLayout: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const fetcher = useFetcher();
  const { user } = useRouteLoaderData("root") as { user: string | null };
  const isLoggingOut = fetcher.formData != null;

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: <UserOutlined />,
              label: <Link to="/">Public Page</Link>,
            },
            {
              key: "2",
              icon: <VideoCameraOutlined />,
              label: <Link to="/protected">Protected Page</Link>,
            },
            {
              key: "3",
              icon: <UploadOutlined />,
              label: <Link to="/login">Login Page</Link>,
            },
          ]}
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
              {/* <Flex justify="end"> */}
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
              {/* </Flex> */}
            </Col>
          </Row>

          {/* <Flex style={boxStyle} justify="space-between">
            <Button type="primary">Primary</Button>
            <Button type="primary">Primary</Button>
            <Button type="primary">Primary</Button>
            <Button type="primary">Primary</Button>

            <AuthStatus />

            <fetcher.Form method="post" action="/logout">
              <Button type="default" disabled={isLoggingOut}>
                {isLoggingOut ? "Signing out..." : "Sign out"}
              </Button>
            </fetcher.Form>
          </Flex> */}
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
          Content
          <AuthStatus />
          <ul>
            <li>
              <Link to="/">Public Page</Link>
            </li>
            <li>
              <Link to="/protected">Protected Page</Link>
            </li>
          </ul>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default MasterLayout;
