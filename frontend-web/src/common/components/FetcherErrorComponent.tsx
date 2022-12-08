import css from 'styled-jsx/css'
import { FetcherError } from '../utils'

const styles = css`
	div {
		grid-column: 1 / -1;
		display: flex;
		justify-content: center;
		padding: 5rem;
		gap: 1rem;
		flex-wrap: wrap;
	}

	p {
		text-align: center;
		font-size: 2.5rem;
	}
`

export function FetcherErrorComponent({ error }: { error: FetcherError }) {
	return (
		<div>
			<p>{error.message}</p>
			<style jsx>{styles}</style>
		</div>
	)
}
