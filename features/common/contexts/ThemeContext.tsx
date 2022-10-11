import {
	createContext,
	FunctionComponent,
	useCallback,
	useContext,
	useEffect,
	useMemo,
	useState,
} from 'react'
import { THEME_LOCAL_STORAGE } from '../constants'
import { Theme, WithChildren } from '../types'
import { noop } from '../utils'

type ThemeContextValue = {
	theme: Theme
	toggle: () => void
}

export const ThemeContext = createContext<ThemeContextValue>({
	theme: 'light',
	toggle: noop,
})

const colorSchemeQuery = '(prefers-color-scheme: dark)'

const getPreferredTheme = (): Theme => {
	if (typeof window === 'undefined') {
		return 'light'
	}

	return window.matchMedia?.(colorSchemeQuery).matches ? 'dark' : 'light'
}

const getCurrentTheme = (): Theme => {
	if (typeof window === 'undefined') {
		return 'light'
	}

	return (
		(localStorage.getItem(THEME_LOCAL_STORAGE) as Theme) || getPreferredTheme()
	)
}

export const ThemeProvider: FunctionComponent<WithChildren> = ({
	children,
}) => {
	const [theme, setTheme] = useState(() => getCurrentTheme())

	const set = useCallback((theme: Theme) => {
		document.documentElement.dataset.theme = theme
		localStorage.setItem(THEME_LOCAL_STORAGE, theme)
		setTheme(theme)
	}, [])

	// Initialize the theme
	useEffect(() => {
		document.documentElement.dataset.theme = getCurrentTheme()
	}, [])

	// Watch for preferred theme changes
	useEffect(() => {
		const preferredChangeHandler = (event: MediaQueryListEvent) => {
			set(event.matches ? 'dark' : 'light')
		}

		window
			.matchMedia(colorSchemeQuery)
			.addEventListener('change', preferredChangeHandler)

		return () =>
			window
				.matchMedia(colorSchemeQuery)
				.removeEventListener('change', preferredChangeHandler)
	}, [set])

	// Watch for storage theme changes
	useEffect(() => {
		const storageChangeHandler = (event: StorageEvent) => {
			if (event.key === THEME_LOCAL_STORAGE) {
				set(getCurrentTheme())
			}
		}

		window.addEventListener('storage', storageChangeHandler)

		return () => window.removeEventListener('storage', storageChangeHandler)
	}, [set])

	const toggle = useCallback(() => {
		set(getCurrentTheme() === 'dark' ? 'light' : 'dark')
	}, [set])

	const value = useMemo<ThemeContextValue>(
		() => ({
			theme,
			toggle,
		}),
		[theme, toggle]
	)

	return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export const useTheme = () => useContext(ThemeContext)
