import ROUTES from "../../stringsConstantes/NavigationStrings";
import mainTheme from "../PageMainTheme";
import agendaTheme from "../AgendaTheme";
import clientesTheme from "../ClientesTheme";

const themes = {
  [ROUTES.HOME]: mainTheme,
  [ROUTES.AGENDA]: agendaTheme,
  [ROUTES.CLIENTES]: clientesTheme,
};

export default themes;
