import { Avatar, Card, Col, Row, Typography } from "antd";
import Paragraph from "antd/es/typography/Paragraph";
import Title from "antd/es/typography/Title";
import React from "react";
import {
  SettingOutlined,
  EditOutlined,
  EllipsisOutlined,
} from "@ant-design/icons";
import Meta from "antd/es/card/Meta";
import { Player } from "@lottiefiles/react-lottie-player";
import animationData from "./../../../assets/lotties/project-description.json";

const ProjectOverview = () => {
  return (
    <>
      {/* <div>ProjectOverview</div> */}

      <Row align={"middle"}>
        <Col span={6} offset={2}>
          <Player
            autoplay
            // loop
            keepLastFrame
            speed={0.875}
            src={animationData}
            
            // style={{ height: "300px", width: "300px" }}
          />
        </Col>
        <Col span={12} offset={1}>
          <Typography>
            <Title>Project description</Title>

            <Paragraph>
              โปสเตอร์ โนติสเจ๊าะแจ๊ะแคปเพนตากอนแอปเปิ้ล ไนท์วอลนัตเยอร์บีราอะ
              เนอะอีสต์อินดอร์แอโรบิคสต๊อก ภควัทคีตาลิมูซีนเยลลี่ไชน่าคันถธุระ
              แพตเทิร์นสโรชาจิตพิสัยวีนชาร์ต คอนโด ผลไม้พอเพียงอัลมอนด์
              อิเหนายังไง ภควัมบดีซาฟารีพรีเมียร์รีทัช แอคทีฟเทวาสี่แยกดยุกดีเจ
              จังโก้ฮาราคีรีคาราโอเกะหน่อมแน้ม เปปเปอร์มินต์ไอติมด็อกเตอร์
              ไชน่าฟรังก์ คาแร็คเตอร์ท็อปบู๊ทดราม่า
              อพาร์ทเมนต์เช็งเม้งคอนแท็ควาทกรรม
            </Paragraph>
          </Typography>
          {/* <Card
            style={{ width: 300 }}
            cover={
              <img
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              />
            }
            actions={[
              <SettingOutlined key="setting" />,
              <EditOutlined key="edit" />,
              <EllipsisOutlined key="ellipsis" />,
            ]}
          >
            <Meta
              avatar={
                <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />
              }
              title="Card title"
              description="This is the description"
            />
          </Card> */}
        </Col>
      </Row>
    </>
  );
};

export default ProjectOverview;
