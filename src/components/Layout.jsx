import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

import "@stylesComponents/Layout.scss";

import Header from "@components/Header/Header";
import Footer from "@components/Footer/Footer";

export default function Layout({ auth }) {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Header auth={auth} />
      <main className="layout">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
