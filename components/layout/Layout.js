/** Common Components */
import Footer from "@/components/shared/footer/Footer";
import Header from "@/components/shared/header/Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
