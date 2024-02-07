type HeaderProps = {
  collapsed: boolean;
  setCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
};
const Header = ({ collapsed, setCollapsed }: HeaderProps) => {
  return (
    <>
      <header className="flex items-center h-16 p-4 text-semibold text-gray-100 bg-gray-900">
        <button className="p-1 mr-4" onClick={() => setCollapsed(!collapsed)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-6 w-6">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        Header
      </header>
    </>
  );
};

export default Header;
