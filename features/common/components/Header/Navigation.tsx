import Link from 'next/link'
import { FunctionComponent } from 'react'
import css from 'styled-jsx/css'
import menu from './menu.json'

const styles = css`
	nav {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 2rem;
	}

	@media only and screen (min-width: 768px) {
		nav {
			flex-direction: row;
		}
	}
`

export const Navigation: FunctionComponent = () => {
	return (
		<nav>
			{menu.map((item) => {
				return (
					<Link key={item.href} href={item.href}>
						{item.label}
					</Link>
				)
			})}
			<style jsx>{styles}</style>
		</nav>
	)
}
