import Agenda from "../../mocks/Agenda";

export const getAulas = async () => {
  // Simulando chamada assíncrona
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(Agenda);
    }, 300);
  });
};
