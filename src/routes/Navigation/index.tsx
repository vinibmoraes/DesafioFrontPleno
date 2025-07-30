// src/routes/Navigation/index.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "../../pages/Inicio/Main";
import AgendaPage from "../../pages/Agenda/Main";
import AlunosPage from "../../pages/Alunos/Main";
import { Layout } from "../Layout";

export const Navigation = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/agenda" element={<AgendaPage />} />
          <Route path="/alunos" element={<AlunosPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};