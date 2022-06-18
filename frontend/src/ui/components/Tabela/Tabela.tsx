import {
  Table,
  TableRow,
  TableContainer,
  TableCell,
  TableBody,
  TableHead,
  Paper,
} from "@mui/material";
import Titulo from "../Titulo/Titulo";
import { Adocao } from "../../../data/@types/Adocao";

interface TabelaProps {
  adocoes: Array<Adocao>;
}

export default function Tabela({ adocoes }: TabelaProps) {
  return (
    <>
      <Titulo titulo={"Relatório de Pets"} subtitulo={"um sub"} />
      <TableContainer component={Paper} sx={{ mx: "auto", maxWidth: 800 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align={"left"}>ID</TableCell>
              <TableCell align={"left"}>Email</TableCell>
              <TableCell align={"left"}>Valor da Doação</TableCell>
              <TableCell align={"left"}>Id do Pet</TableCell>
              <TableCell align={"left"}>Nome do Pet</TableCell>
            </TableRow>
          </TableHead>
          {adocoes.map(({ id, pet, email, donation }) => (
            <TableRow key={id}>
              <TableCell>{id}</TableCell>
              <TableCell>{email}</TableCell>
              <TableCell>{donation}</TableCell>
              <TableCell>{pet.id}</TableCell>
              <TableCell>{pet.name}</TableCell>
            </TableRow>
          ))}
        </Table>
      </TableContainer>
    </>
  );
}
