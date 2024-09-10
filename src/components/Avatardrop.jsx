import React from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Avatar,
  User,
} from "@nextui-org/react";
import { Link } from "react-router-dom";


export default function AvatarDrop({ img , name, email ,onclick }) {
  

  return (
    <div className="flex items-center gap-4">
      <Dropdown placement="bottom-start">
        <DropdownTrigger>
          <User
            as="button"
            avatarProps={{
              isBordered: true,
              src:  img ,
            }}
            className="transition-transform"
            description={email}
            name={name}
          />
        </DropdownTrigger>
        <DropdownMenu aria-label="User Actions" variant="flat" className="bg-white text-black rounded">
          <DropdownItem key="profile" className="h-14 gap-2">
            <p className="font-bold">Signed in as</p>
            <p className="font-bold">{email}</p>
          </DropdownItem>
          <DropdownItem key="settings">My Settings</DropdownItem>
          <DropdownItem key="team_settings">Team Settings</DropdownItem>
          <DropdownItem key="analytics">Analytics</DropdownItem>
          <DropdownItem key="system">System</DropdownItem>
          <DropdownItem key="configurations">Configurations</DropdownItem>
          
          <DropdownItem key="help_and_feedback"><Link to={'/contact'}>Help & Feedback</Link></DropdownItem>
          <DropdownItem  key="logout" color="danger" onClick={onclick}>
            Log Out
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}
