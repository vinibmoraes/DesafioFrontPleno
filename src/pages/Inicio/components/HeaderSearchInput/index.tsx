import { InputBase, Paper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchInput = () => {
  return (
    <Paper
      component="form"
      sx={{
        display: "flex",
        alignItems: "center",
        width: { xs: 150, sm: 250, md: 400 },
        padding: 0.5,
        boxShadow: "none",
      }}
    >
      <SearchIcon />
      <InputBase
        placeholder="Pesquisar clientes"
        inputProps={{ "aria-label": "search clients" }}
        sx={{
          ml: 1,
          flex: 1,
          fontSize: {
            xs: "0.75rem", 
            sm: "0.85rem", 
            md: "1rem",   
          },
          '::placeholder': {
            color: "#999",
            opacity: 1,
            fontSize: {
              xs: "0.75rem",
              sm: "0.85rem",
              md: "1rem",
            },
          },
        }}
      />
    </Paper>
  );
};

export default SearchInput;
