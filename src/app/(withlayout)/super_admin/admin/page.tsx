import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import ActionBar from "@/components/ui/ActionBar";
import Link from "next/link";
import { Button } from "antd";

const AdminPage = () => {
  return (
    <div>
      <UMBreadCrumb
        items={[
          {
            label: "super_admin",
            link: "/super_admin",
          },
        ]}
      />

      <ActionBar title="Admin List">
        <Link href="/super_admin/admin/create">
          <Button
            style={{
              margin: "1rem 0",
            }}
            type="primary"
          >
            {" "}
            Admin List
          </Button>
        </Link>
      </ActionBar>
    </div>
  );
};

export default AdminPage;
