import Footer from "./Footer";
import { Helmet } from "react-helmet-async";

type LayoutProps = {
  children: React.ReactNode;
};
const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Helmet>
        <link rel="canonical" href="https://www.avunja.com/" />
      </Helmet>
      <div className="flex overflow-x-hidden h-screen">{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
