import Link from 'next/link'
import { FunctionComponent, useState } from 'react'
import css from 'styled-jsx/css'
import { Drawer } from '../Drawer'
import { MenuIcon } from '../MenuIcon'
import { Navigation } from './Navigation'

const styles = css`
	header {
		grid-column: -1 / 1;
		padding: 1.5rem 0;
		box-shadow: 0 1rem 1rem -1.5rem var(--foreground);
		display: flex;
		align-items: center;
		z-index: 999;
	}

	.desktop-menu {
		display: none;
	}

	@media only screen and (min-width: 768px) {
		.mobile-menu {
			display: none;
		}

		.desktop-menu {
			display: block;
		}
	}
`

export const Header: FunctionComponent = () => {
	const [active, setActive] = useState(false)

	const toggle = () => {
		setActive((value) => !value)
	}

	return (
		<header>
			<Link href="/">Aleksandar Stojanoski</Link>
			<div className="spacer" />
			<div className="desktop-menu">
				<Navigation />
			</div>
			<nav className="mobile-menu">
				<MenuIcon active={active} toggle={toggle} />
				<Drawer active={active}>
					<Navigation />
				</Drawer>
			</nav>
			<style jsx>{styles}</style>
		</header>
	)
}
