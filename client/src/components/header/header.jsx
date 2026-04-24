import React, { useState } from "react";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import ProjectForm from "../projectForm";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <header className="min-h-14 px-4 py-3  bg-white-300 border-b border-red-400">
        <div className="flex justify-between">
          <SidebarTrigger />
          <span>hello how are yaa</span>
          <Button onClick={() => setIsOpen(true)}>
            <span>Create</span>
            <ProjectForm isOpen={isOpen} setIsOpen={setIsOpen} />
          </Button>
        </div>
      </header>
    </div>
  );
};

export default Header;
