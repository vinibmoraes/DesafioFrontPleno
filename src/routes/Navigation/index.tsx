import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "../../pages/Inicio/Main";
import AgendaPage from "../../pages/Agenda/Main";
import ClientesPage from "../../pages/Clientes/Main";
import { Layout } from "../Layout";
import ROUTES from "../../stringsConstantes/NavigationStrings";

export const Navigation = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path={ROUTES.HOME} element={<MainPage />} />
          <Route path={ROUTES.AGENDA} element={<AgendaPage />} />
          <Route path={ROUTES.CLIENTES} element={<ClientesPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Navigation;
