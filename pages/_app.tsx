import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from '@/features/common/contexts/ThemeContext'

function App({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider>
			<Component {...pageProps} />
		</ThemeProvider>
	)
}

export default App
