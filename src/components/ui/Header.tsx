import { Button, Dropdown, Layout, Row, Space } from "antd";
const { Header: AntHeader } = Layout;
import type { MenuProps } from "antd";
import { UserOutlined } from "@ant-design/icons";

import { Avatar } from "antd";
import { getUserInfo, removeUserInfo } from "@/services/auth.service";
import { authKey } from "@/constants/storageKey";
import { useRouter } from "next/navigation";
const Header = () => {
  const router = useRouter();
  const logOut = () => {
    removeUserInfo(authKey);
    router.push("/login");
  };
  const { role } = getUserInfo() as any;
  const items: MenuProps["items"] = [
    {
      key: "0",
      label: (
        <Button type="text" danger onClick={logOut}>
          LogOut
        </Button>
      ),
    },
  ];
  return (
    <AntHeader
      style={{
        color: "#ffff",
        background: "#ffff",
      }}
    >
      <Row
        justify="end"
        align="middle"
        style={{
          height: "100%",
        }}
      >
        <p
          style={{
            margin: "0px 5px",
            color: "black",
            fontSize: "1rem",
            padding: "5px",
          }}
        >
          {role}
        </p>
        <Dropdown menu={{ items }} placement="bottomLeft" arrow>
          <Space wrap size={16}>
            <Avatar size="large" icon={<UserOutlined />} />
          </Space>
        </Dropdown>
      </Row>
    </AntHeader>
  );
};

export default Header;
