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
				<title>Study Coffee ☕</title>
				<link rel="preconnect" href="https://fonts.googleapis.com"/>
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin = "anonymous"/>
				<link href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@700;800&family=Roboto:wght@400;700&display=swap" rel="stylesheet"/>
			</Head>
			<body>
				<Main />				
				<NextScript />
			</body>
		</Html>
	)
}
