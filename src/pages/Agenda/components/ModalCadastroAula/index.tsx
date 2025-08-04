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
  } from "@mui/material";
  import { useState } from "react";
  import CustomButton from "../../../../components/CustomButton";
  import CustomText from "../../../../components/CustomText";
  import SaveIcon from '@mui/icons-material/Save';
  import { enqueueSnackbar } from "notistack";
  
  type ModalCadastroAulaProps = {
    open: boolean;
    onClose: () => void;
    onSubmit: (dados: any) => void;
    initialData?: any;
  };
  
  const tiposAula = ["Cross", "Funcional", "Pilates"];
  const statusAula = ["Aberta", "Concluída"];
  
  const ModalCadastroAula = ({ open, onClose, onSubmit, initialData }: ModalCadastroAulaProps) => {
    const [form, setForm] = useState({
      descricao: initialData?.descricao || "",
      tipo: initialData?.tipo || "",
      dataHora: initialData?.dataHora || "",
      capacidadeMaxima: initialData?.capacidadeMaxima || "",
      status: initialData?.status || "",
      permiteAtraso: initialData?.permiteAtraso || "",
    });
  
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  
    const handleChange = (key: string, value: string) => {
      setForm({ ...form, [key]: value });
    };
  
    const handleSubmit = () => {
      if (!form.descricao || !form.tipo || !form.dataHora || !form.capacidadeMaxima || !form.status || form.permiteAtraso === "") {
        enqueueSnackbar('Preencha todos os campos obrigatórios!', { variant: 'warning' });
        return;
      }
      onSubmit(form);
      enqueueSnackbar('Aula salva com sucesso!', { variant: 'success' });
      onClose();
      setForm({
        descricao: "",
        tipo: "",
        dataHora: "",
        capacidadeMaxima: "",
        status: "",
        permiteAtraso: "",
      });
    };
  
    const labelColor = {
      "& .MuiInputLabel-root": {
        color: "#616161",
      },
    };
  
    return (
      <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
        <DialogTitle>
          <CustomText text={initialData ? "Editar Aula" : "Cadastrar Nova Aula"} size="h6" />
        </DialogTitle>
        <DialogContent>
          <Stack spacing={2} mt={1}>
            <TextField
              required
              label="Descrição"
              fullWidth
              value={form.descricao}
              onChange={(e) => handleChange("descricao", e.target.value)}
              sx={labelColor}
            />
  
            <TextField
              select
              required
              label="Tipo de Aula"
              fullWidth
              value={form.tipo}
              onChange={(e) => handleChange("tipo", e.target.value)}
              sx={labelColor}
            >
              {tiposAula.map((tipo) => (
                <MenuItem key={tipo} value={tipo}>{tipo}</MenuItem>
              ))}
            </TextField>
  
            <TextField
              required
              label="Data e Hora"
              type="datetime-local"
              InputLabelProps={{ shrink: true }}
              fullWidth
              value={form.dataHora}
              onChange={(e) => handleChange("dataHora", e.target.value)}
              sx={labelColor}
            />
  
            <TextField
              required
              label="Capacidade Máxima"
              type="number"
              fullWidth
              value={form.capacidadeMaxima}
              onChange={(e) => handleChange("capacidadeMaxima", e.target.value)}
              sx={labelColor}
            />
  
            <TextField
              select
              required
              label="Status da Aula"
              fullWidth
              value={form.status}
              onChange={(e) => handleChange("status", e.target.value)}
              sx={labelColor}
            >
              {statusAula.map((s) => (
                <MenuItem key={s} value={s}>{s}</MenuItem>
              ))}
            </TextField>
  
            <TextField
              select
              required
              label="Permite agendamento após início?"
              fullWidth
              value={form.permiteAtraso}
              onChange={(e) => handleChange("permiteAtraso", e.target.value)}
              sx={labelColor}
            >
              <MenuItem value="true">Sim</MenuItem>
              <MenuItem value="false">Não</MenuItem>
            </TextField>
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
              <CustomButton startIcon={<SaveIcon />} text="Salvar" onClick={handleSubmit} color="primary"/>
            </Box>
          </Box>
        </DialogActions>
      </Dialog>
    );
  };
  
  export default ModalCadastroAula;
  