import { FunctionComponent } from 'react'
import css from 'styled-jsx/css'
import { WithChildren } from '../types'
import { cn } from '../utils'

const styles = css`
	.drawer {
		position: fixed;
		width: 100vw;
		height: calc(100vh - 5.6rem);
		top: 100vh;
		left: 0;
		transition: all 0.3s ease;
		display: block;
		padding: 1.5rem;
		z-index: 999;
		background: var(--background);
	}

	.drawer.active {
		top: 5.6rem;
	}
`

type DrawerProps = {
	active?: boolean
}

export const Drawer: FunctionComponent<WithChildren<DrawerProps>> = ({
	children,
	active,
}) => {
	return (
		<div className={cn('drawer', { active })}>
			{children}
			<style jsx>{styles}</style>
		</div>
	)
}
