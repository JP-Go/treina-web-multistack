import { styled } from "@mui/material";

const ListaStyled = styled("ul")`
  width: 100%;
  max-width: 800px;
  margin: auto auto;
  padding: ${({ theme }) => theme.spacing(2)};
  list-style: none;
`;

const ItemLista = styled("li")`
  display: grid;
	margin-top: 1em;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: ${({ theme }) => theme.spacing(5)};
  ${({ theme }) => theme.breakpoints.down("md")} {
    grid-template-columns: 1fr;
    grid-gap: ${({ theme }) => theme.spacing(2)};
  }
`;

const Foto = styled("img")`
  width: 100%;
	height: 100%;
	max-height: 200px;
`;

const Informacoes = styled("div")`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)};
`;

const Nome = styled("h2")`
  margin: 0;
`;

const Descricao = styled("p")`
	margin: 0;
	word-break: break-words;
`;

export { ListaStyled, ItemLista, Foto, Informacoes, Nome, Descricao };
