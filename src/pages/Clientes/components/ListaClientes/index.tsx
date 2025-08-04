import * as React from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  useMediaQuery,
  useTheme,
  InputBase,
  Box,
  Button,
  Stack,
} from "@mui/material";
import { TableVirtuoso, type TableComponents } from "react-virtuoso";
import Cliente from "../../../../mocks/Cliente";
import CustomText from "../../../../components/CustomText";
import SearchIcon from "@mui/icons-material/Search";
import EditIcon from '@mui/icons-material/Edit';
import ModalEditarCliente from "../ModalEditarCliente";
import { useState } from "react";


const ListaClientes = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [searchTerm, setSearchTerm] = React.useState("");
  const [currentPage, setCurrentPage] = React.useState(0);
  const rowsPerPage = 10;

  const filteredClientes = React.useMemo(() => {
    const sorted = [...Cliente]
      .sort((a, b) => a.nome.localeCompare(b.nome))
      .filter((c) =>
        c.nome.toLowerCase().includes(searchTerm.toLowerCase())
      );
    return sorted;
  }, [searchTerm]);

  const paginatedClientes = React.useMemo(() => {
    const start = currentPage * rowsPerPage;
    return filteredClientes.slice(start, start + rowsPerPage);
  }, [filteredClientes, currentPage]);

  const totalPages = Math.ceil(filteredClientes.length / rowsPerPage);

  const handlePrevious = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1));
  };

  //useStates
const [clienteSelecionado, setClienteSelecionado] = useState<any | null>(null);
const [openModalEditar, setOpenModalEditar] = useState(false);


const handleAbrirModalEditar = (cliente: any) => {
  setClienteSelecionado(cliente);
  setOpenModalEditar(true);
};

const handleFecharModalEditar = () => {
  setClienteSelecionado(null);
  setOpenModalEditar(false);
};

type ClienteData = typeof Cliente[number];

const columns = [
  { label: "Nome", dataKey: "nome" },
  { label: "CPF", dataKey: "cpf" },
  { label: "Idade", dataKey: "dataNascimento" },
  { label: "Tipo do Plano", dataKey: "tipoPlano" },
];

const VirtuosoTableComponents: TableComponents<ClienteData> = {
  Scroller: React.forwardRef<HTMLDivElement>((props, ref) => (
    <TableContainer
      {...props}
      ref={ref}
      sx={{ backgroundColor: "#f9f9f9" }}
    />
  )),
  Table: (props) => (
    <Table
      {...props}
      sx={{
        borderCollapse: "separate",
        tableLayout: "fixed",
        minWidth: 400,
      }}
    />
  ),
  TableHead: React.forwardRef<HTMLTableSectionElement>((props, ref) => (
    <TableHead {...props} ref={ref} />
  )),
  TableRow,
  TableBody: React.forwardRef<HTMLTableSectionElement>((props, ref) => (
    <TableBody {...props} ref={ref} />
  )),
};

function getAgeFromDate(dateStr: string): number {
  const birthDate = new Date(dateStr);
  const diffMs = Date.now() - birthDate.getTime();
  const ageDate = new Date(diffMs);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}

const fixedHeaderContent = () => (
  <TableRow>
    {columns.map((column) => (
      <TableCell
        key={column.dataKey}
        sx={{ backgroundColor: "background.paper", fontWeight: "bold" }}
      >
        <CustomText text={column.label} variant="subtitle2" />
      </TableCell>
    ))}
    <TableCell sx={{ backgroundColor: "background.paper", pr: 2, width: 48 }} />
  </TableRow>
);


const rowContent = (_index: number, row: ClienteData) => (
  <>
    <TableCell>
      <CustomText text={row.nome} />
    </TableCell>
    <TableCell>
      <CustomText text={row.cpf} />
    </TableCell>
    <TableCell>
      <CustomText text={`${getAgeFromDate(row.dataNascimento)} anos`} />
    </TableCell>
    <TableCell>
      <CustomText text={row.tipoPlano} />
    </TableCell>
    <TableCell sx={{ pr: 2, width: 48 }}>
      <EditIcon
        sx={{ cursor: "pointer", color: "primary.main" }}
        onClick={() => handleAbrirModalEditar (row)}
      />
    </TableCell>

  </>
);

  return (
    <>
      <CustomText text="Lista de Clientes" variant="h6" sx={{ mb: 2 }} />

      <Paper
        component="form"
        sx={{
          display: "flex",
          alignItems: "center",
          width: "100%",
          maxWidth: 400,
          mb: 3,
          px: 2,
          py: 0.5,
          border: "1px solid #ccc",
          borderRadius: 2,
        }}
        onSubmit={(e) => e.preventDefault()}
      >
        <SearchIcon sx={{ color: "#888" }} />
        <InputBase
          placeholder="Buscar por nome"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setCurrentPage(0);
          }}
          sx={{ ml: 1, flex: 1 }}
          inputProps={{ "aria-label": "buscar cliente" }}
        />
      </Paper>

      {isMobile ? (
        paginatedClientes.map((cliente) => (
          <Paper key={cliente.id} sx={{ p: 2, mb: 2, position: 'relative' }}>
            <Box display="flex" justifyContent="space-between" alignItems="center">
              <CustomText text={cliente.nome} variant="subtitle1" />
              <EditIcon
                sx={{ cursor: "pointer", color: "primary.main" }}
                onClick={() => handleAbrirModalEditar(cliente)}
              />
            </Box>
            <CustomText text={`CPF: ${cliente.cpf}`} />
            <CustomText text={`Idade: ${getAgeFromDate(cliente.dataNascimento)} anos`} />
            <CustomText text={`Plano: ${cliente.tipoPlano}`} />
          </Paper>
        ))
      ) : (
        <TableVirtuoso
          data={paginatedClientes}
          components={VirtuosoTableComponents}
          fixedHeaderContent={fixedHeaderContent}
          itemContent={rowContent}
          style={{ height: 400 }}
        />
      )}

      {/* Paginação */}
      {filteredClientes.length > rowsPerPage && (
        <Stack direction="row" spacing={2} justifyContent="flex-end" mt={3}>
          <Button
            variant="outlined"
            onClick={handlePrevious}
            disabled={currentPage === 0}
          >
            Anterior
          </Button>
          <CustomText
            text={`Página ${currentPage + 1} de ${totalPages}`}
            variant="body2"
          />
          <Button
            variant="outlined"
            onClick={handleNext}
            disabled={currentPage + 1 === totalPages}
          >
            Próxima
          </Button>
        </Stack>
      )}
      <ModalEditarCliente
      open={openModalEditar}
      onClose={handleFecharModalEditar}
      cliente={clienteSelecionado}
    />
    </>
    
  );
};

export default ListaClientes;
