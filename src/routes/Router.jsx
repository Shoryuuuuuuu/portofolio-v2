import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import Loading from "../components/common/loading/Loading";

const Home = lazy(() => import("../pages/Home"));
const Main = lazy(() => import("../layouts/Main"));

// HAPUS BARIS INI: Tidak diperlukan di Vercel
// const repoName = import.meta.env.VITE_REPO_NAME || ""; 

export const router = createBrowserRouter(
  [
    {
      path: "/", // Pastikan tetap "/"
      element: (
        <Suspense fallback={<Loading />}>
          <Main />
        </Suspense>
      ),
      children: [
        {
          path: "/",
          element: <Home />,
        },
      ],
    },
  ]
  // HAPUS BAGIAN INI: Ini penyebab error "basename is not defined"
  // { basename } 
);