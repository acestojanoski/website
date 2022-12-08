import { ButtonHTMLAttributes, FunctionComponent } from 'react'
import css from 'styled-jsx/css'

const styles = css`
	button {
		outline: none;
		border: 0.1rem solid var(--foreground);
		background: var(--background);
		color: var(--foreground);
		font-size: 1.6rem;
		cursor: pointer;
		padding: 1rem;
		height: 4rem;
		max-height: 4rem;
		border-radius: 0.8rem;
	}

	button:hover {
		filter: contrast(80%) brightness(150%);
	}

	button:disabled {
		filter: contrast(40%) brightness(140%);
		cursor: not-allowed;
	}
`

export const Button: FunctionComponent<
	ButtonHTMLAttributes<HTMLButtonElement>
> = ({ children, ...rest }) => {
	return (
		<button {...rest}>
			{children}
			<style jsx>{styles}</style>
		</button>
	)
}
