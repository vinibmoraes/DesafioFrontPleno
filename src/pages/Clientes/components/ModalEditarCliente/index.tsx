import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    MenuItem,
    TextField,
    Stack,
    useMediaQuery,
    useTheme,
    Box,
    Tooltip
  } from "@mui/material";
  import { useEffect, useState } from "react";
  import CustomButton from "../../../../components/CustomButton";
  import CustomText from "../../../../components/CustomText";
  import SaveIcon from '@mui/icons-material/Save';
  import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import { enqueueSnackbar } from "notistack";
  
  type Cliente = {
    id: number;
    nome: string;
    dataNascimento: string;
    cpf: string;
    cidade: string;
    bairro: string;
    endereco: string;
    tipoPlano: string;
  };
  
  type ModalEditarClienteProps = {
    open: boolean;
    onClose: () => void;
    cliente: Cliente | null;
  };
  
  const ModalEditarCliente = ({ open, onClose, cliente }: ModalEditarClienteProps) => {
    const [form, setForm] = useState({
      nome: "",
      nascimento: "",
      cpf: "",
      cidade: "",
      bairro: "",
      endereco: "",
      plano: "",
    });
  
    useEffect(() => {
      if (cliente) {
        setForm({
          nome: cliente.nome || "",
          nascimento: cliente.dataNascimento || "",
          cpf: cliente.cpf || "",
          cidade: cliente.cidade || "",
          bairro: cliente.bairro || "",
          endereco: cliente.endereco || "",
          plano: cliente.tipoPlano || "",
        });
      }
    }, [cliente]);
  
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  
    const handleChange = (key: string, value: string) => {
      setForm({ ...form, [key]: value });
    };
  
    const handleSubmit = () => {
      if (!form.nome || !form.nascimento) {
        enqueueSnackbar('Preencha os campos obrigatórios!', { variant: 'warning' });
        return;
      }
      // Aqui futuramente pode ir uma função de submit/put
      onClose();
    };
  
    const labelColor = {
      "& .MuiInputLabel-root": {
        color: "#616161",
      },
    };
  
    return (
      <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
        <DialogTitle>
          <CustomText text="Editar Cliente" size="h6" />
        </DialogTitle>
        <DialogContent>
          <Stack spacing={2} mt={1}>
            <TextField
              required
              label="Nome"
              fullWidth
              value={form.nome}
              onChange={(e) => handleChange("nome", e.target.value)}
              sx={labelColor}
            />
            <TextField
              required
              label="Data de Nascimento"
              type="date"
              InputLabelProps={{ shrink: true }}
              fullWidth
              value={form.nascimento}
              onChange={(e) => handleChange("nascimento", e.target.value)}
              sx={labelColor}
            />
            <TextField
              label="CPF"
              fullWidth
              value={form.cpf}
              onChange={(e) => handleChange("cpf", e.target.value)}
              sx={labelColor}
            />
            <TextField
              label="Cidade"
              fullWidth
              value={form.cidade}
              onChange={(e) => handleChange("cidade", e.target.value)}
              sx={labelColor}
            />
            <TextField
              label="Bairro"
              fullWidth
              value={form.bairro}
              onChange={(e) => handleChange("bairro", e.target.value)}
              sx={labelColor}
            />
            <TextField
              label="Endereço"
              fullWidth
              value={form.endereco}
              onChange={(e) => handleChange("endereco", e.target.value)}
              sx={labelColor}
            />
  
            <Box display="flex" alignItems="center" gap={1}>
              <TextField
                label="Tipo de Plano"
                select
                fullWidth
                disabled
                value={form.plano}
                sx={labelColor}
              >
                <MenuItem value={form.plano}>{form.plano}</MenuItem>
              </TextField>
              <Tooltip title="Não é possível trocar o contrato">
                <WarningAmberIcon color="warning" />
              </Tooltip>
            </Box>
          </Stack>
        </DialogContent>
  
        <DialogActions sx={{ px: 3, pb: 2 }}>
          <Box
            display="flex"
            flexDirection={{ xs: "column", sm: "column", md: "row" }}
            justifyContent="flex-end"
            alignItems="center"
            gap={2}
            width="100%"
          >
            <Box width={{ xs: "100%", md: "auto" }}>
              <CustomButton text="Cancelar" color="#999" onClick={onClose} />
            </Box>
            <Box width={{ xs: "100%", md: "auto" }}>
              <CustomButton startIcon={<SaveIcon />} text="Salvar" onClick={handleSubmit} />
            </Box>
          </Box>
        </DialogActions>
      </Dialog>
    );
  };
  
  export default ModalEditarCliente;
  