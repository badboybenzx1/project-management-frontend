/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Row,
  Col,
  Card,
  Radio,
  Table,
  Progress,
  Avatar,
  Typography,
  Space,
} from "antd";

// Images
import ava1 from "../../../../assets/images/logo-shopify.svg";
import ava2 from "../../../../assets/images/logo-atlassian.svg";
import ava3 from "../../../../assets/images/logo-slack.svg";
import ava5 from "../../../../assets/images/logo-jira.svg";
import ava6 from "../../../../assets/images/logo-invision.svg";

const { Text } = Typography;

const project = [
  {
    title: "COMPANIES",
    dataIndex: "name",
    width: "32%",
  },
  {
    title: "BUDGET",
    dataIndex: "age",
  },
  {
    title: "STATUS",
    dataIndex: "address",
  },
  {
    title: "COMPLETION",
    dataIndex: "completion",
  },
];
const dataproject = [
  {
    key: "1",

    name: (
      <>
        <Space align="baseline">
          <Avatar className="shape-avatar" src={ava1} size={25} alt="" />
          <Text strong>Spotify Version</Text>
        </Space>
      </>
    ),
    age: (
      <>
        <div className="semibold">$14,000</div>
      </>
    ),
    address: (
      <>
        <div className="text-sm">working</div>
      </>
    ),
    completion: (
      <>
        <div className="ant-progress-project">
          <Progress percent={30} size="small" />
        </div>
      </>
    ),
  },

  {
    key: "2",
    name: (
      <>
        <Space align="baseline">
          <Avatar className="shape-avatar" src={ava2} size={25} alt="" />
          <Text strong>Progress Track</Text>
        </Space>
      </>
    ),
    age: (
      <>
        <div className="semibold">$3,000</div>
      </>
    ),
    address: (
      <>
        <div className="text-sm">working</div>
      </>
    ),
    completion: (
      <>
        <div className="ant-progress-project">
          <Progress percent={10} size="small" />
        </div>
      </>
    ),
  },

  {
    key: "3",
    name: (
      <>
        <Space align="baseline">
          <Avatar className="shape-avatar" src={ava3} size={25} alt="" />
          <Text strong>Jira Platform Errors</Text>
        </Space>
      </>
    ),
    age: (
      <>
        <div className="semibold">Not Set</div>
      </>
    ),
    address: (
      <>
        <div className="text-sm">done</div>
      </>
    ),
    completion: (
      <>
        <div className="ant-progress-project">
          <Progress percent={100} size="small" format={() => "done"} />
        </div>
      </>
    ),
  },

  {
    key: "4",
    name: (
      <>
        <Space align="baseline">
          <Avatar className="shape-avatar" src={ava5} size={25} alt="" />
          <Text strong>Launch new Mobile App</Text>
        </Space>
      </>
    ),
    age: (
      <>
        <div className="semibold">$20,600</div>
      </>
    ),
    address: (
      <>
        <div className="text-sm">canceled</div>
      </>
    ),
    completion: (
      <>
        <div className="ant-progress-project">
          <Progress
            percent={50}
            size="small"
            status="exception"
            format={() => "50%"}
          />
        </div>
      </>
    ),
  },

  {
    key: "5",
    name: (
      <>
        <Space align="baseline">
          <Avatar className="shape-avatar" src={ava5} size={25} alt="" />
          <Text strong>Web Dev</Text>
        </Space>
      </>
    ),
    age: (
      <>
        <div className="semibold">$4,000</div>
      </>
    ),
    address: (
      <>
        <div className="text-sm">working</div>
      </>
    ),
    completion: (
      <>
        <div className="ant-progress-project">
          <Progress percent={80} size="small" />
        </div>
      </>
    ),
  },

  {
    key: "6",
    name: (
      <>
        <Space align="baseline">
          <Avatar className="shape-avatar" src={ava6} size={25} alt="" />
          <Text strong>Redesign Online Store</Text>
        </Space>
      </>
    ),
    age: (
      <>
        <div className="semibold">$2,000</div>
      </>
    ),
    address: (
      <>
        <div className="text-sm">canceled</div>
      </>
    ),
    completion: (
      <>
        <div className="ant-progress-project">
          <Progress percent={0} size="small" />
        </div>
      </>
    ),
  },
];

function Tables() {
  const onChange = (e: any) => console.log(`radio checked:${e.target.value}`);

  return (
    <>
      <div className="tabled">
        <Row gutter={[24, 0]}>
          <Col xs="24" xl={24}>
            <Card
              bordered={false}
              className="criclebox tablespace mb-24"
              title="Projects Table"
              extra={
                <>
                  <Radio.Group onChange={onChange} defaultValue="all">
                    <Radio.Button value="all">All</Radio.Button>
                    <Radio.Button value="online">ONLINE</Radio.Button>
                    <Radio.Button value="store">STORES</Radio.Button>
                  </Radio.Group>
                </>
              }
            >
              <div className="table-responsive">
                <Table
                  columns={project}
                  dataSource={dataproject}
                  pagination={false}
                  className="ant-border-space"
                />
              </div>
              {/* <div className="uploadfile pb-15 shadow-none">
                <Upload {...formProps}>
                  <Button
                    type="dashed"
                    className="ant-full-box"
                    icon={<ToTopOutlined />}
                  >
                    Click to Upload
                  </Button>
                </Upload>
              </div> */}
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

// export default Tables;

const TaskList = () => {
  return (
    <>
      <div>TaskList</div>
      <br />
      <Tables></Tables>
    </>
  );
};

export default TaskList;
