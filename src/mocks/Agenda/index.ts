const Agenda = [
  {
    id: 1,
    descricao: "Funcional intensivo",
    tipoAula: "Funcional",
    dataHora: "2025-08-03T08:00:00",
    capacidadeMaxima: 20,
    status: "aberta",
    permiteAgendamentoAposInicio: false,
    local: "Quadra A",
    alunos: [
      { id: 4, nome: "Ana Costa" },
      { id: 16, nome: "Tatiane Ribeiro" }
    ]
  },
  {
    id: 2,
    descricao: "Pilates funcional",
    tipoAula: "Pilates",
    dataHora: "2025-08-04T09:30:00",
    capacidadeMaxima: 12,
    status: "aberta",
    permiteAgendamentoAposInicio: true,
    local: "Sala 2",
    alunos: [
      { id: 10, nome: "Juliana Almeida" },
      { id: 20, nome: "Vanessa Santos" }
    ]
  },
  {
    id: 3,
    descricao: "Treino de resistência",
    tipoAula: "Funcional",
    dataHora: "2025-08-05T17:00:00",
    capacidadeMaxima: 18,
    status: "aberta",
    permiteAgendamentoAposInicio: false,
    local: "Área externa",
    alunos: [
      { id: 8, nome: "Fernanda Castro" },
      { id: 27, nome: "Rodrigo Oliveira" }
    ]
  },
  {
    id: 4,
    descricao: "Cross intermediário",
    tipoAula: "Cross",
    dataHora: "2025-08-06T19:00:00",
    capacidadeMaxima: 15,
    status: "aberta",
    permiteAgendamentoAposInicio: false,
    local: "Sala 1",
    alunos: [
      { id: 6, nome: "Luísa Fernandes" },
      { id: 24, nome: "Isabela Rocha" }
    ]
  },
  {
    id: 5,
    descricao: "Pilates avançado",
    tipoAula: "Pilates",
    dataHora: "2025-08-10T16:00:00",
    capacidadeMaxima: 10,
    status: "aberta",
    permiteAgendamentoAposInicio: true,
    local: "Sala 3",
    alunos: [
      { id: 7, nome: "Rafael Lima" },
      { id: 23, nome: "Roberto Alves" }
    ]
  },
  {
    id: 6,
    descricao: "Treino funcional leve",
    tipoAula: "Funcional",
    dataHora: "2025-08-12T07:00:00",
    capacidadeMaxima: 20,
    status: "concluída",
    permiteAgendamentoAposInicio: false,

    local: "Área externa",
    alunos: [
      { id: 1, nome: "João Silva" },
      { id: 11, nome: "Gustavo Nunes" }
    ]
  },
  {
    id: 7,
    descricao: "Aula de Cross iniciantes",
    tipoAula: "Cross",
    dataHora: "2025-08-14T18:30:00",
    capacidadeMaxima: 15,
    status: "aberta",
    permiteAgendamentoAposInicio: true,

    local: "Sala 1",
    alunos: [
      { id: 13, nome: "Ricardo Martins" },
      { id: 29, nome: "Alexandre Ferreira" }
    ]
  },
  {
    id: 8,
    descricao: "Funcional para idosos",
    tipoAula: "Funcional",
    dataHora: "2025-08-17T08:00:00",
    capacidadeMaxima: 10,
    status: "aberta",
    permiteAgendamentoAposInicio: false,

    local: "Sala Funcional",
    alunos: [
      { id: 14, nome: "Amanda Correia" },
      { id: 30, nome: "Beatriz Nascimento" }
    ]
  },
  {
    id: 9,
    descricao: "Pilates relaxante",
    tipoAula: "Pilates",
    dataHora: "2025-08-19T10:00:00",
    capacidadeMaxima: 8,
    status: "aberta",
    permiteAgendamentoAposInicio: true,

    local: "Sala 3",
    alunos: [
      { id: 2, nome: "Maria Oliveira" },
      { id: 28, nome: "Mariana Costa" }
    ]
  },
  {
    id: 10,
    descricao: "Cross avançado",
    tipoAula: "Cross",
    dataHora: "2025-08-22T18:00:00",
    capacidadeMaxima: 12,
    status: "aberta",
    permiteAgendamentoAposInicio: false,
    local: "Sala 1",
    alunos: [
      { id: 3, nome: "Carlos Souza" },
      { id: 18, nome: "Camila Gonçalves" }
    ]
  }
];

export default Agenda;
