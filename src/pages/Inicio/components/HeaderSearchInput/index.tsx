import { InputBase, Paper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchInput = () => {
  return (
    <Paper
      component="form"
      sx={{
        display: "flex",
        alignItems: "center",
        width: { xs: 150, sm: 250, md: 300 },
        padding: "0 8px",
      }}
    >
      <SearchIcon />
      <InputBase
        placeholder="Pesquisar clientes..."
        inputProps={{ "aria-label": "search clients" }}
        sx={{ ml: 1, flex: 1 }}
      />
    </Paper>
  );
};

export default SearchInput;
