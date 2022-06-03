import {styled} from '@mui/material'

export const TituloStyled = styled('h1')`
	font-size: 1.25em;
	text-align:center;
	margin-top: ${({theme}) =>theme.spacing(5)};
`;

export const SubtituloStyled = styled('h2')`
	font-size: 1.125em;
	text-align:center;
	font-weight: normal;
	margin-bottom: ${({theme}) =>theme.spacing(5)};
	color: ${({theme}) => theme.palette.text.secondary};
`;
