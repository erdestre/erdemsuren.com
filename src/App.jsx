import { Fragment, lazy, Suspense } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Layout from "./components/layout/Layout.jsx";
import { LanguageProvider } from "./i18n/LanguageContext.jsx";
import NotFound from "./pages/NotFound.jsx";
import { PAGES } from "./pages/registry.js";
import { langFromPath, LANGS, ROUTES } from "./routes.js";

// Dev server only: every registered diagram (src/components/diagrams). The import sits in a branch that production
// builds drop, so neither the page nor the diagrams registry reaches the main bundle.
const DiagramsPreview = import.meta.env.DEV ? lazy(() => import("./components/diagrams/DiagramsPreview.jsx")) : null;

// No router in here: the client entry wraps App in <BrowserRouter>, the server entry in <StaticRouter>.
// Pages are code-split (src/pages/registry.js). The Suspense boundary is the same on the server and the client;
// its fallback never shows on the first load (main.jsx loads the page before hydrating) and navigations run in a
// transition, so the previous page stays until the next one is ready.
export default function App() {
  const { pathname } = useLocation();
  const lang = langFromPath(pathname);

  return (
    <LanguageProvider lang={lang}>
      <Layout>
        <Suspense fallback={null}>
          <Routes>
            {LANGS.map((code) => (
              <Fragment key={code}>
                {Object.entries(PAGES).map(([key, { Component }]) => (
                  <Route key={key} path={ROUTES[key][code]} element={<Component />} />
                ))}
              </Fragment>
            ))}
            {DiagramsPreview ? <Route path="/__diagrams/" element={<DiagramsPreview />} /> : null}
            <Route path="/en/*" element={<NotFound />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Layout>
    </LanguageProvider>
  );
}
