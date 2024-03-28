import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import animationData from "./../../assets/lotties/tasks-management--projects--workflow---supalai-.json";
import { Col, Row, Typography } from "antd";

const { Title, Paragraph, Text, Link } = Typography;

const PublicPage = () => {
  return (
    <>
      {/* <Title level={4}>PublicPage</Title> */}

      <Row align={"middle"}>
        <Col span={8} offset={2}>
          <Player
            autoplay
            // loop
            keepLastFrame
            speed={0.875}
            src={animationData}
            // style={{ height: "300px", width: "300px" }}
          />
        </Col>
        <Col span={8} offset={2}>
          <Title level={4}>PublicPage</Title>

          <Paragraph>
            แทคติค สุนทรีย์เห่ยเฉิ่มบลูเบอร์รี่ รีเสิร์ชฟลอร์โมหจริต
            ติงต๊องรันเวย์โปรเจกต์หลินจือไฮเทค ต่อรองซันตาคลอสมลภาวะพาสเจอร์ไรส์
            แอปเปิล เด้อหมายปองรากหญ้าเทอร์โบฮอตดอก บัสฮาลาลเจไดโค้ชทับซ้อน
            ลีเมอร์รีสอร์ตคอนโดติวตุ๊ด ติวเตอร์โทร
            ไอติมยะเยือกแมกกาซีนเดโมเอ็กซ์เพรส สต๊อกมาม่าสตีลพันธกิจตุ๊ก
            เด้อไชน่าวิว โฮสเตสหมายปองซังเตล็อตอิสรชน คลิปเซ็นเตอร์แฟร์
            ซูชิหน่อมแน้มแคมป์
          </Paragraph>

          <Paragraph>
            We supply a series of design principles, practical patterns and high
            quality design resources (<Text code>Sketch</Text> and{" "}
            <Text code>Axure</Text>), to help people create their product
            prototypes beautifully and efficiently.
          </Paragraph>

          <Paragraph>
            <ul>
              <li>
                <Link href="/docs/spec/proximity">Principles</Link>
              </li>
              <li>
                <Link href="/docs/spec/overview">Patterns</Link>
              </li>
              <li>
                <Link href="/docs/resources">Resource Download</Link>
              </li>
            </ul>
          </Paragraph>
        </Col>
      </Row>
    </>
  );
};

export default PublicPage;
