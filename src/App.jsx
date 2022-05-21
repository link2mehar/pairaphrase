import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import WebFont from "webfontloader";
import Layout from "@components/Layout";
import { LoaderPage } from "@components/Loaders";
import ActiveDocuments from "@pages/ActiveDocuments/ActiveDocuments";
import TranslationDetail from "@pages/TranslationDetail/TranslationDetail";

WebFont.load({ google: { families: ["Roboto:300,400,500"] } });

// import Home from "@pages/Home"; // Without lazy and Suspense
const Home = lazy(() => import("@pages/HomePage/Home"));

export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={(
              <Suspense fallback={<LoaderPage />}>
                <Home />
              </Suspense>
            )}
          />
          {/* <Route index element={<Home />} /> */}
          {/* Without lazy and Suspense 👆️ */}
        </Route>
        <Route
          path="/ActiveDocuments"
          element={<Layout />}
        >
          <Route
            index
            element={(
              <Suspense fallback={<LoaderPage />}>
                <ActiveDocuments />
              </Suspense>
            )}
          />
        </Route>
        <Route
          path="/translations/:id"
          element={<Layout />}
        >
          <Route
            index
            element={(
              <Suspense fallback={<LoaderPage />}>
                <TranslationDetail />
              </Suspense>
            )}
          />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}
