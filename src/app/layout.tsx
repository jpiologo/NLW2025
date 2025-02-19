import './globals.css'

import type { Metadata } from 'next'
import { Montserrat, Oxanium } from 'next/font/google'

export const metadata: Metadata = {
	title: 'devStage',
	description: 'NLW Connect 2025',
}

const oxanium = Oxanium({
	weight: ['500', '600'],
	subsets: ['latin'],
	variable: '--font-oxanium',
})

const montserrat = Montserrat({
	weight: ['400', '600'],
	subsets: ['latin'],
	variable: '--font-montserrat',
})

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en" className={`${oxanium.variable} ${montserrat.variable}`}>
			<body className="bg-gray-900 text-gray-100 antialiased bg-[url('/background.png')] bg-no-repeat bg-top md:bg-right-top">
				{children}
			</body>
		</html>
	)
}

//link do NLW 2025: https://app.rocketseat.com.br/events/nlw-connect/react/aula-01-configuracao-do-projeto-e-componentes

//Parei em 42:00
