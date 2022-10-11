import { FunctionComponent } from 'react'
import css from 'styled-jsx/css'
import { cn } from '../utils'

const styles = css`
	div {
		width: 2.5rem;
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	span {
		width: 100%;
		height: 0.1rem;
		background: var(--foreground);
		transition-duration: 0.3s;
	}

	div.active span:first-child {
		transform: translateY(0.5rem) rotate(45deg);
	}

	div.active span:last-child {
		transform: translateY(-0.6rem) rotate(-45deg);
	}
`

type MenuIconProps = {
	active?: boolean
	toggle?: () => void
}

export const MenuIcon: FunctionComponent<MenuIconProps> = ({
	active,
	toggle,
}) => {
	const handleClick = () => {
		toggle?.()
	}

	return (
		<div role="button" className={cn({ active })} onClick={handleClick}>
			<span />
			<span />
			<style jsx>{styles}</style>
		</div>
	)
}
