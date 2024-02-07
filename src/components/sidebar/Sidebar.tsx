import { TriangleIcon } from "utils/imgImport";
import styled from "@emotion/styled";

type SidebarProps = {
  children: React.ReactNode;
  collapsed: boolean;
  setCollapsed: (value: boolean) => void;
};

const NavImg = styled.img((props: any) => ({
  transform: props.collapsed && "rotate(180deg)",
  marginLeft: props.collapsed && "4px",
}));

const Sidebar = ({ children, collapsed, setCollapsed }: SidebarProps) => {
  const changeSidebarWidth = () => {
    setCollapsed(!collapsed);
  };

  return (
    <aside
      className={`relative flex-shrink-0 flex flex-col ${
        collapsed ? "sm:w-96" : "sm:w-1/2"
      } w-full border-r transition-all duration-300 z-10`}>
      {" "}
      {children}
      <div className="navigator absolute top-1/2 -right-4">
        <button
          onClick={changeSidebarWidth}
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 w-[30px] h-[30px] rounded-full flex justify-center items-center">
          <NavImg
            src={TriangleIcon}
            collapsed={collapsed}
            className="-ml-1"
            alt="nav"
          />
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
