import { Button } from "antd";
import Link from "next/link";

const ManagementDepartmentPage = () => {
  return (
    <div>
      <h2>Department List</h2>
      <Link href="/super_admin/department/create">
        <Button
          type="primary"
          style={{
            margin: "1rem 0",
          }}
        >
          Create
        </Button>
      </Link>
    </div>
  );
};

export default ManagementDepartmentPage;
