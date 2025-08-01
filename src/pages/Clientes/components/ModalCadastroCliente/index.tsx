import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    MenuItem,
    TextField,
    Stack,
  } from "@mui/material";
  import { useState } from "react";
  import CustomButton from "../../../../components/CustomButton";
  import CustomText from "../../../../components/CustomText";
  
  type ModalCadastroClienteProps = {
    open: boolean;
    onClose: () => void;
    onSubmit: (dados: any) => void;
  };
  
  const planos = ["Mensal", "Trimestral", "Anual"];
  
  const ModalCadastroCliente = ({ open, onClose, onSubmit }: ModalCadastroClienteProps) => {
    const [form, setForm] = useState({
      nome: "",
      nascimento: "",
      cpf: "",
      cidade: "",
      bairro: "",
      endereco: "",
      plano: "",
    });
  
    const handleChange = (key: string, value: string) => {
      setForm({ ...form, [key]: value });
    };
  
    const handleSubmit = () => {
      if (!form.nome || !form.nascimento || !form.plano) {
        alert("Preencha os campos obrigatórios!");
        return;
      }
      onSubmit(form);
      onClose();
      setForm({
        nome: "",
        nascimento: "",
        cpf: "",
        cidade: "",
        bairro: "",
        endereco: "",
        plano: "",
      });
    };
  
    return (
      <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
        <DialogTitle>
          <CustomText text="Cadastro de Novo Cliente" size="h6" />
        </DialogTitle>
        <DialogContent>
          <Stack spacing={2} mt={1}>
            <TextField
              required
              label="Nome"
              fullWidth
              value={form.nome}
              onChange={(e) => handleChange("nome", e.target.value)}
              sx={{
                "& .MuiInputLabel-root": {
                  color: "#616161",
                },
              }}
            />
            <TextField
              required
              label="Data de Nascimento"
              type="date"
              InputLabelProps={{ shrink: true }}
              fullWidth
              value={form.nascimento}
              onChange={(e) => handleChange("nascimento", e.target.value)}
              sx={{
                "& .MuiInputLabel-root": {
                  color: "#616161",
                },
              }}
            />
            <TextField
              label="CPF"
              fullWidth
              value={form.cpf}
              onChange={(e) => handleChange("cpf", e.target.value)}
              sx={{
                "& .MuiInputLabel-root": {
                  color: "#616161",
                },
              }}
            />
            <TextField
              label="Cidade"
              fullWidth
              value={form.cidade}
              onChange={(e) => handleChange("cidade", e.target.value)}
              sx={{
                "& .MuiInputLabel-root": {
                  color: "#616161",
                },
              }}
            />
            <TextField
              label="Bairro"
              fullWidth
              value={form.bairro}
              onChange={(e) => handleChange("bairro", e.target.value)}
              sx={{
                "& .MuiInputLabel-root": {
                  color: "#616161",
                },
              }}
            />
            <TextField
              label="Endereço"
              fullWidth
              value={form.endereco}
              onChange={(e) => handleChange("endereco", e.target.value)}
              sx={{
                "& .MuiInputLabel-root": {
                  color: "#616161",
                },
              }}
            />
            <TextField
              select
              required
              label="Tipo de Plano"
              fullWidth
              value={form.plano}
              onChange={(e) => handleChange("plano", e.target.value)}
              sx={{
                "& .MuiInputLabel-root": {
                  color: "#616161",
                },
              }}
            >
              {planos.map((p) => (
                <MenuItem key={p} value={p}>
                  {p}
                </MenuItem>
              ))}
            </TextField>
          </Stack>
        </DialogContent>
        <DialogActions sx={{ px: 3, pb: 2 }}>
          <CustomButton text="Cancelar" color="#999" onClick={onClose} />
          <CustomButton text="Cadastrar" onClick={handleSubmit} />
        </DialogActions>
      </Dialog>
    );
  };
  
  export default ModalCadastroCliente;
  