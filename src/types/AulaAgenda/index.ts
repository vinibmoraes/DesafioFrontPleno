export type Aluno = {
    id: number;
    nome: string;
  };
  
  export type Aula = {
    id: number;
    descricao: string;
    tipoAula: string;
    dataHora: string;
    capacidadeMaxima: number;
    status: "aberta" | "concluída";
    permiteAgendamentoAposInicio: boolean;
    local: string;
    alunos?: Aluno[];
  };
  
  