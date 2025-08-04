import { Box, Paper, Typography, IconButton, Chip, Stack, Button } from "@mui/material";
import { useState, useEffect } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import EditIcon from "@mui/icons-material/Edit"; // Importe o ícone de edição
import dayjs from "dayjs";
import Agenda from "../../../../mocks/Agenda";
import { type Aula } from "../../../../types/AulaAgenda";
import CustomText from "../../../../components/CustomText";

type CalendarioAulasProps = {
  onEditarAula?: (aula: Aula) => void;
};



const diasDaSemana = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];

const CalendarioAulas = ({ onEditarAula }: CalendarioAulasProps) => {
  const [aulas, setAulas] = useState<Aula[]>([]);
  const [inicioSemana, setInicioSemana] = useState(dayjs().startOf("week"));

  useEffect(() => {
    const aulasConvertidas: Aula[] = Agenda.map((aula) => ({
      ...aula,
      status: aula.status === "concluída" ? "concluída" : "aberta",
      alunos: "alunos" in aula ? aula.alunos : [],
    }));
    setAulas(aulasConvertidas);
  }, []);

  const mudarSemana = (dias: number) => {
    setInicioSemana((prev) => prev.add(dias, "day"));
  };

  const dias = [...Array(7)].map((_, i) => inicioSemana.add(i, "day"));

  return (
    <Box>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
        <IconButton onClick={() => mudarSemana(-7)}>
          <ArrowBackIosIcon />
        </IconButton>
        <CustomText
          text={`Semana de ${inicioSemana.format("DD/MM")} até ${inicioSemana.add(6, "day").format("DD/MM")}`}
          variant="h6"
        />
        <IconButton onClick={() => mudarSemana(7)}>
          <ArrowForwardIosIcon />
        </IconButton>
      </Box>

      <Box
        display="grid"
        gridTemplateColumns={{
          xs: "1fr", sm: "repeat(2, 1fr)", md: "repeat(3, 1fr)", lg: "repeat(4, 1fr)",
        }}
        gap={2}
      >
        {dias.map((dia, i) => {
          const aulasDoDia = aulas.filter((a) =>
            dayjs(a.dataHora).isSame(dia, "day")
          );

          return (
            <Paper key={i} sx={{ p: 2 }}>
              <Typography fontWeight="bold" mb={1}>
                {diasDaSemana[dia.day()]} - {dia.format("DD/MM")}
              </Typography>

              {aulasDoDia.length > 0 ? (
                aulasDoDia.map((aula) => (
                  <Paper
                    key={aula.id}
                    variant="outlined"
                    sx={{
                      p: 2,
                      mb: 1,
                    }}
                  >
                    <CustomText text={`${dayjs(aula.dataHora).format("HH:mm")} - ${aula.descricao}`} />
                    <CustomText text={`Capacidade: ${aula.capacidadeMaxima}`} variant="body2" />
                    <CustomText text={`Status: ${aula.status}`} variant="body2" />
                    <Box mt={1}>
                      <Typography variant="body2" fontWeight="bold">Alunos:</Typography>
                      {aula.alunos && aula.alunos.length > 0 ? (
                        <Stack direction="row" flexWrap="wrap" gap={1} mt={0.5}>
                          {aula.alunos.map((aluno) => (
                            <Chip key={aluno.id} label={aluno.nome} size="small" />
                          ))}
                        </Stack>
                      ) : (
                        <Typography variant="body2" fontStyle="italic">Nenhum aluno</Typography>
                      )}
                    </Box>
                    <Box mt={2} display="flex" justifyContent="flex-end">
                      <Button
                        variant="outlined"
                        size="small"
                        startIcon={<EditIcon />}
                        onClick={() => onEditarAula?.(aula)}
                      >
                        Editar
                      </Button>
                    </Box>
                  </Paper>
                ))
              ) : (
                <Typography fontStyle="italic">Sem aulas</Typography>
              )}
            </Paper>
          );
        })}
      </Box>
    </Box>
  );
};

export default CalendarioAulas;