import {
  Dialog,
  TextField,
  Grid,
  DialogActions,
  Button,
  Snackbar,
} from "@mui/material";
import type { NextPage } from "next";
import Lista from "../ui/components/Lista/Lista";
import Titulo from "../ui/components/Titulo/Titulo";
import { useIndex } from "../data/hooks/pages/useIndex";
const Home: NextPage = () => {
  const {
    pets,
    selectedPet,
    setSelectedPet,
    email,
    setEmail,
    donation,
    setDonation,
    message,
    setMessage,
    adopt,
  } = useIndex();

  return (
    <div>
      <Titulo
        titulo=""
        subtitulo={
          <span>
            Com um pequeno valor mensal, você <br /> pode
            <strong>adotar um pet virtualmente</strong>
          </span>
        }
      />
      <Lista
        pets={pets}
        onSelect={(pet) => {
          setSelectedPet(pet);
        }}
      />
      <Dialog
        open={selectedPet !== null}
        fullWidth
        PaperProps={{ sx: { p: 4 } }}
        onClose={() => setSelectedPet(null)}
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              type={"email"}
              label={"E-mail"}
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            ></TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              type={"number"}
              label={"Quantia por mes"}
              value={donation}
              onChange={(e) => {
                setDonation(e.target.value);
              }}
            ></TextField>
          </Grid>
        </Grid>
        <DialogActions sx={{ mt: 5 }}>
          <Button color={"secondary"} onClick={() => setSelectedPet(null)}>
            Cancelar
          </Button>
          <Button variant={"contained"} onClick={() => adopt()}>
            Confirmar Adoção
          </Button>
        </DialogActions>
      </Dialog>
      <Snackbar
        open={message.length > 0}
        message={message}
        autoHideDuration={2500}
        onClose={() => setMessage("")}
      />
    </div>
  );
};

export default Home;
