import MenuItem from "../MenuItem";
import { TfiAnnouncement } from "react-icons/tfi";
import { MdManageAccounts } from "react-icons/md";
import { MdReportProblem } from "react-icons/md";
import { CgProfile } from "react-icons/cg";

const AdminMenu = () => {
  return (
    <>
      <MenuItem
        icon={CgProfile}
        label="Admin Profile"
        address="/dashboard/admin-profile"
      />
      <MenuItem
        icon={TfiAnnouncement}
        label="Make Announcement"
        address="/dashboard/make-announcement"
      />
      <MenuItem
        icon={MdManageAccounts}
        label="Manage Users"
        address="/dashboard/manage-users"
      />
      <MenuItem
        icon={MdReportProblem}
        label="Reported Activities"
        address="/dashboard/reported-activities"
      />
    </>
  );
};

export default AdminMenu;
