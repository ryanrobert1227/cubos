import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.tsx";
import LoginPage from "./pages/Login/login.tsx";
import PasswordRecoverPage from "./pages/Esqueceu-Senha/index.tsx";
import RegistroPage from "./pages/Registrar-se/Registrar.tsx";
import HomePage from "./pages/Home/Home.tsx";
import DadosPage from "./pages/Dados/Dados.tsx";
import ConteudosPage from "./pages/Conteudos/Conteudos.tsx";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <LoginPage />,
    children: [
      {
        path: "/",
        element: <LoginPage />,
      },
      {
        path: "/Esqueceu_Senha",
        element: <PasswordRecoverPage />,
      },
      {
        path: "/registrar-se",
        element: <RegistroPage />,
      },
      {
        path: "/inicio",
        element: <HomePage />,
      },
      {
        path: "/perfil",
        element: <DadosPage />,
      },
      {
        path: "/conteudos",
        element: <ConteudosPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
