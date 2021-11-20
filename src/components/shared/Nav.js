import React from "react";
import { Stack, Center, LogoStyle } from "../../styles/layout";
import { FaPlusSquare, FaUserCircle, FaSearch } from "react-icons/fa";
import ToolTip from "./ToolTip";

const Nav = ({ setIsOpen }) => {
  return (
    <>
      <Stack gutter="xxl">
        <LogoStyle><strong>Logo</strong></LogoStyle>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', position: 'relative' }}>
          <input type="text" />
          <FaSearch style={{ position: 'absolute', marginLeft: '190px', top: '8px' }}></FaSearch>


        </div>
        <Center centerChildren={true}>
          <Stack gutter="xxl">
            <ToolTip text="Add Post">
              <FaPlusSquare
                style={{ color: 'hsl(0, 0%, 57%)', fontSize: 30 }}
                onClick={() => setIsOpen(true)}
              ></FaPlusSquare>
            </ToolTip>
            <ToolTip text="My Account">
              <FaUserCircle
                style={{ color: 'hsl(0, 0%, 57%)', fontSize: 30 }}
                onClick={() => setIsOpen(true)}
              ></FaUserCircle>
            </ToolTip>
          </Stack>
        </Center>
      </Stack>
    </>
  );
};

export default Nav;