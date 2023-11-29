
import MenuItem from '../MenuItem';
import { CgProfile } from "react-icons/cg";
import { GiPostOffice } from "react-icons/gi";
import { FaPen } from "react-icons/fa";

const UserMenu = () => {
    return (
        <>
            <MenuItem
                icon={CgProfile}
                label="My Profile"
                address="/dashboard/my-profile"
              />
              <MenuItem
                icon={FaPen}
                label="Add Post"
                address="/dashboard/add-post"
              />
              <MenuItem
                icon={GiPostOffice}
                label="My Posts"
                address="/dashboard/my-posts"
              />
        </>
    );
};

export default UserMenu;