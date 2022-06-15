import { NextPage } from "next";
import { useCadastro } from "../../data/hooks/pages/useCadastro";
import Titulo from "../../ui/components/Titulo/Titulo";
import { Paper, Grid, TextField, Snackbar, Button } from "@mui/material";

const Cadastro: NextPage = () => {
  const {
    name,
    setName,
    history,
    setHistory,
    photoUrl,
    setPhotoUrl,
    message,
    setMessage,
    registerPet,
  } = useCadastro();

  return (
    <>
      <Titulo
        titulo={"Cadastro de Pets"}
        subtitulo={"Preencha os dados do Pet"}
      />
      <Paper sx={{ maxWidth: 960, mx: "auto", p: 5 }}>
        <Grid container spacing={2} mb={4}>
          <Grid item xs={12}>
            <TextField
              type="text"
              label={"Nome"}
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              type={"text"}
              label={"Url da foto"}
              value={photoUrl}
              onChange={(e) => {
                setPhotoUrl(e.target.value);
              }}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label={"História"}
              multiline
              minRows={3}
              value={history}
              onChange={(e) => {
                setHistory(e.target.value);
              }}
              style={{ minWidth: "100%" }}
            />
          </Grid>
        </Grid>
        <Button
          type={"button"}
          onClick={() => {
            registerPet();
          }}
          variant={"contained"}
        >
          {"Fazer Cadastro"}
        </Button>
      </Paper>
      <Snackbar
        open={message.length > 0}
        message={message}
        autoHideDuration={2500}
        onClose={() => {
          setMessage("");
        }}
      />
    </>
  );
};

export default Cadastro;
