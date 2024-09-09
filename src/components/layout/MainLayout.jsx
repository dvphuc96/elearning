import { Footer, Header } from "components";
import { Outlet, useLocation } from "react-router-dom";

export const MainLayout = () => {
  const location = useLocation();

  const hideHeaderFooterPaths = ["/sale","/giangsinh","/noel"];

  const shouldHideHeaderFooter = hideHeaderFooterPaths.includes(location.pathname);

  return (
    <main>
      {!shouldHideHeaderFooter && <Header />}
      <Outlet />
      {!shouldHideHeaderFooter && <Footer />}
    </main>
  );
};
