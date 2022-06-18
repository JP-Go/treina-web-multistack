import { NextPage } from "next";
import { useRelatorio } from "../../data/hooks/pages/useRelatorio";
import Tabela from "../../ui/components/Tabela/Tabela";


const Relatorio: NextPage = () => {

	const {adocoes} = useRelatorio()
  return <Tabela adocoes={adocoes} />;
};

export default Relatorio;
