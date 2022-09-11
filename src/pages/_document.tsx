import { Html, Head, Main, NextScript } from 'next/document'

/*
	- O component Main serve pra dizer onde o app será mostrado
	- O component NextScript Serve para chamar todos os scripts
	- Caso coloque uma fonte utilizando a tag <link>
	  - Fechar a tag
		- Onde tem crossorigin substituir por crossOrigin = "anonymous"
	
	Obs.: O arquivo _document.tsx deve se manter o mais simples possível, 
	pois tudo que você coloca aqui vai ser carregado em todas as páginas, 
	portando aqui só carregar o necessário
*/

export default function Document() {
	return (
		<Html>
			<Head>

			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}
