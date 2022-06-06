import { Button } from "@mui/material";
import { TextServices } from "../../../data/services/TextServices";
import {
  ListaStyled,
  ItemLista,
  Informacoes,
  Foto,
  Nome,
  Descricao,
} from "./Lista.style";

import { Pet } from "../../../data/@types/Pet";

interface ListaProps {
  pets: Array<Pet>;
  onSelect: (pet: Pet) => void;
}

export default function Lista(props: ListaProps) {
  const maxTextSize = 240;
  return (
    <ListaStyled>
      {props.pets.map((pet) => (
        <ItemLista key={pet.id}>
          <Foto src={pet.photoUrl} alt={pet.name} />
          <Informacoes>
            <Nome> {pet.name} </Nome>
            <Descricao>
              {TextServices.limitarTexto(pet.history, maxTextSize)}
            </Descricao>
            <Button
              variant={"contained"}
              fullWidth
              onClick={() => props.onSelect(pet)}
            >
              {" "}
              {`Adote ${pet.name}`}{" "}
            </Button>
          </Informacoes>
        </ItemLista>
      ))}
    </ListaStyled>
  );
}
