import React, { useState } from "react";
import Nav from "./Nav";
import { FeedSplit, HiddenNav, MainPadBox } from "../../styles/layout";
import Modal from './Modal'

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <FeedSplit fraction="1/5">
      <HiddenNav as="aside" color="gray8">
        <Nav setIsOpen={setIsOpen} />

       <Modal open={isOpen} onClose={() => setIsOpen(false)}>I am a Modal</Modal>
      </HiddenNav>
      <MainPadBox color="gray9" padding="lg">
        {children}
      </MainPadBox>
    </FeedSplit>
  );
};

export default Layout;