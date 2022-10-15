import { PropsWithChildren } from 'react'
import css from 'styled-jsx/css'

const styles = css`
	div {
		max-width: 144rem;
		display: grid;
		grid-template-columns: repeat(12, 1fr);
		margin: 0 auto;
		padding: 0 1.5rem;
	}
`

export function PageGrid({ children }: PropsWithChildren) {
	return (
		<div>
			{children}
			<style jsx>{styles}</style>
		</div>
	)
}
