import { TituloStyled, SubtituloStyled } from "./Titulo.style";

interface TituloProps {
  titulo: string;
  subtitulo?: string | JSX.Element;
}

export default function Titulo({ titulo, subtitulo }: TituloProps) {
  return (
    <>
      <TituloStyled>{titulo}</TituloStyled>
      <SubtituloStyled>{subtitulo}</SubtituloStyled>
    </>
  );
}
