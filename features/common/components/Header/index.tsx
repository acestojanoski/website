import dynamic from 'next/dynamic'
import Link from 'next/link'
import { FunctionComponent, PropsWithChildren, useState } from 'react'
import css from 'styled-jsx/css'
import { useTheme } from '../../contexts/ThemeContext'
import { Drawer } from '../Drawer'
import { MenuIcon } from '../MenuIcon'
import { Navigation } from './Navigation'

const MoonIcon = dynamic<PropsWithChildren>(
	() => import('../MoonIcon').then((mod) => mod.MoonIcon),
	{ ssr: false }
)

const SunIcon = dynamic<PropsWithChildren>(
	() => import('../SunIcon').then((mod) => mod.SunIcon),
	{ ssr: false }
)

const styles = css`
	header {
		grid-column: -1 / 1;
		padding: 1.5rem 0;
		box-shadow: 0 1rem 1rem -1.5rem var(--foreground);
		display: flex;
		align-items: center;
		z-index: 999;
	}

	.menu {
		display: flex;
		align-items: center;
		gap: 2rem;
	}

	.desktop-menu {
		display: none;
	}

	@media only screen and (min-width: 768px) {
		.mobile-menu {
			display: none;
		}

		.desktop-menu {
			display: flex;
		}
	}
`

export const ThemeToggleButton = () => {
	const { theme, toggle } = useTheme()

	return (
		<a role="button" onClick={toggle}>
			{theme === 'dark' ? <MoonIcon /> : <SunIcon />}
			<style jsx>{`
				a {
					cursor: pointer;
					line-height: 0;
				}
			`}</style>
		</a>
	)
}

export const Header: FunctionComponent = () => {
	const [active, setActive] = useState(false)

	const toggle = () => {
		setActive((value) => !value)
	}

	const themeToggleElement = <ThemeToggleButton />

	return (
		<header>
			<Link href="/">Aleksandar Stojanoski</Link>
			<div className="spacer" />
			<div className="menu desktop-menu">
				<Navigation />
				{themeToggleElement}
			</div>
			<nav className="menu mobile-menu">
				{themeToggleElement}
				<MenuIcon active={active} toggle={toggle} />
				<Drawer active={active}>
					<Navigation />
				</Drawer>
			</nav>
			<style jsx>{styles}</style>
		</header>
	)
}
