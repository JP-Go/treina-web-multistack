import {Link,Box} from '@mui/material'
import NextLink from "next/link"
import { Logo, LinksContainer, CabecalhoContainer } from "./CabecalhoAdmin.style"

export default function CabecalhoAdmin() {
	return (<CabecalhoContainer>
		<div>
			<Logo src={"/images/logo.svg"} alt="Adote um pet"></Logo>
			<LinksContainer>
				<Link component={NextLink} href={'/pets/cadastro'}>
					<a>Cadastrar Pet</a>
				</Link>
				<Link component={NextLink} href={'/pets/relatorio'}>
					<a>Relatório{' '}
					<Box component={'span'} sx={{display:{sm:'initial',xs:'none'}}}>de Adoções</Box></a>
				</Link>
			</LinksContainer>
		</div>
	</CabecalhoContainer>)
}
