Este projeto é uma aplicação Single Page Application (SPA) para gerenciamento de uma academia, permitindo a visualização da agenda de aulas e o cadastro/gerenciamento de clientes nestas aulas.

Tecnologias Utilizadas
O projeto foi desenvolvido com uma stack moderna e robusta para aplicações web:

React e TypeScript

Material-UI (MUI): Biblioteca de componentes de interface de usuário (UI).

React Router DOM: Biblioteca para roteamento dinâmico em aplicações React.

Day.js: Biblioteca leve para manipulação de datas.

React Virtuoso: Componente para renderização de listas longas de forma eficiente (virtualização de listas).

Notistack: Biblioteca para exibir notificações (toasts).

Regras de Negócio e Funcionalidades
A aplicação é dividida em duas áreas principais: Agenda de Aulas e Cadastro de Clientes.

Agenda de Aulas
Esta seção permite o gerenciamento e a visualização das aulas disponíveis.

Visualização Semanal: Uma tabela exibe as aulas da semana atual, com a possibilidade de navegar entre semanas anteriores e futuras.

Aulas Mockadas: A lista de aulas é fornecida por um mock localizado em src/mocks/Agenda.ts.

Cadastro de Aula: Um modal permite criar novas aulas.

Edição de Aula: É possível editar os detalhes de uma aula existente.

Detalhes e Gestão de Alunos: Ao clicar em uma aula, um modal de detalhes é exibido, permitindo:

Visualizar as informações completas da aula, incluindo os alunos inscritos.

Adicionar Alunos: É possível adicionar novos alunos à aula, com as seguintes regras de negócio:

Não é possível adicionar alunos se a capacidade máxima da aula for atingida.

Se a aula já começou (dataHora no passado) e a regra permiteAgendamentoAposInicio for false, não é possível adicionar novos alunos.

Remover Alunos: Alunos podem ser removidos da aula individualmente.

Finalizar Aula: O status da aula pode ser alterado para "concluída", impedindo novas inscrições.

Feedback ao Usuário: As bibliotecas Notistack e MUI são usadas para fornecer feedback instantâneo ao usuário (exemplo: "Aluno adicionado com sucesso!", "Capacidade máxima atingida!").

Gerenciamento de Clientes
Esta seção foca na visualização e edição dos clientes da academia.

Listagem de Clientes: Uma tabela lista todos os clientes. Em telas menores (móveis), a visualização se adapta para um formato mais amigável, exibindo os dados em cards.

Clientes Mockados: A lista de clientes é proveniente de um mock em src/mocks/Clientes.ts.

Busca: Há um campo de busca que filtra a lista de clientes por nome em tempo real.

Paginação: A tabela suporta paginação para lidar eficientemente com grandes volumes de dados.

Edição de Cliente: Ao clicar no ícone de edição, um modal é aberto para modificar os dados de um cliente. Uma regra de negócio importante é que o tipoPlano não pode ser alterado, sendo desabilitado no formulário e acompanhado de um ícone de aviso.

Cadastro de Cliente: Um modal de cadastro permite adicionar novos clientes com seus respectivos dados pessoais e tipo de plano.

Organização e Temas (Theming)
O projeto usa a funcionalidade de Theming do Material-UI para gerenciar estilos e cores de forma centralizada.

Temas por Rota: Foi criada uma estrutura inteligente para aplicar temas diferentes em cada página. Cada tema (mainTheme, agendaTheme, clientesTheme) define a cor primária e o estilo da AppBar (barra de navegação) para aquela rota específica.

Arquivo de Temas: O arquivo src/themes/ThemesExport.ts centraliza a exportação dos temas, mapeando cada rota a um tema correspondente.

Componente Layout: O componente Layout utiliza o useLocation para identificar a rota atual e, em seguida, aplica o tema correto usando o <ThemeProvider>. Isso garante que a identidade visual da aplicação se adapte dinamicamente à página que o usuário está visualizando.

Arquitetura e Estratégias
Single Page Application (SPA)
A aplicação é uma SPA, o que significa que todas as páginas (Home, Clientes, Agenda) são carregadas em uma única página HTML, e o conteúdo é atualizado dinamicamente via JavaScript. O React Router DOM gerencia essa transição de rotas sem a necessidade de recarregar a página, proporcionando uma experiência de usuário mais fluida e rápida.

Responsividade
A responsividade é uma preocupação central do projeto já que foi passado que 85% dos acessos serão realizados por dispositivos móveis

Componentes do MUI: A biblioteca MUI já oferece suporte a estilos responsivos de forma nativa, utilizando breakpoints como xs, sm, md, lg e xl.

Hooks do MUI: Os hooks useTheme e useMediaQuery são usados para ajustar a interface em tempo de execução, como no componente CustomButton, que muda o minWidth para ocupar 100% da largura em telas pequenas.

Componentes Adapatados: A listagem de clientes usa a lógica de media query para exibir uma tabela completa em telas maiores e uma lista de cards em telas menores, garantindo a usabilidade em qualquer dispositivo.

Hook de Layout (useLayout): O hook customizado useLayout (src/routes/Layout/useLayout.ts) é uma solução elegante para gerenciar o layout principal da aplicação.

Gerenciamento do Menu: Ele centraliza a lógica de estado (menuOpen) e a função toggleMenu para abrir e fechar a barra lateral.

Layout Dinâmico: Um problema comum em aplicações com barra de navegação fixa é o conteúdo ficar "escondido" atrás do cabeçalho. Este hook resolve isso usando a ResizeObserver API para monitorar a altura do cabeçalho (headerRef) e, em seguida, ajustar a margem superior (mt) do conteúdo principal (<Box component="main">) dinamicamente. Isso garante que o conteúdo da página sempre comece abaixo do cabeçalho, independentemente do seu tamanho.

Strings Constantes: O arquivo src/stringsConstantes/NavigationStrings.ts serve para armazenar as rotas da aplicação (ROUTES). 

Otimização e Manutenção: Ao usar constantes, você evita "magic strings". Se uma rota precisar ser alterada, você só precisa modificá-la em um único lugar, o que reduz a chance de erros e facilita a manutenção do projeto.

Clareza e Legibilidade: O código se torna mais legível e auto-explicativo, pois ROUTES.AGENDA é mais claro que o string literal "/agenda".

Notificações (Snackbar): A aplicação utiliza o SnackbarProvider do Notistack no arquivo App.tsx para gerenciar notificações globais de forma centralizada.

Globalidade: O SnackbarProvider envolve toda a aplicação, permitindo que qualquer componente, em qualquer lugar, exiba uma notificação usando o hook enqueueSnackbar.

Configuração Centralizada: Configurações como número máximo de notificações visíveis (maxSnack), posição (anchorOrigin) e duração (autoHideDuration) são definidas uma única vez, garantindo uma experiência de usuário consistente.

Componentes Reutilizáveis: Os componentes globais foram criados para seguir o princípio DRY (Don't Repeat Yourself - Não se repita).

CustomButton e CustomText: Estes componentes encapsulam o estilo e a lógica de botões e textos, respectivamente. Eles recebem propriedades (props) para customização (cores, tamanhos, etc.), o que promove a consistência visual e facilita a reutilização em toda a aplicação.

Modais de Cadastro/Edição: Os modais (ModalCadastroAula, ModalEditarAula, ModalCadastroCliente, ModalEditarCliente) seguem um padrão de design similar, sendo modais controlados por estado (open e onClose) e recebendo dados para exibição ou envio.