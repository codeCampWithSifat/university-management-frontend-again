import { Button } from "antd";
import Link from "next/link";

const ManageFaculty = () => {
  return (
    <div>
      <h2>Manage Faculty</h2>
      <Link href="/super_admin/manage-faculty/create">
        <Button type="primary" style={{ margin: "1rem 0" }}>
          Create Faculty
        </Button>
      </Link>
    </div>
  );
};

export default ManageFaculty;
