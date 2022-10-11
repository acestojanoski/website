import { WithChildren } from '@/features/common/types'
import { FunctionComponent } from 'react'
import css from 'styled-jsx/css'

const Title: FunctionComponent<WithChildren> = ({ children }) => {
	return (
		<h3>
			{children}
			<style jsx>{`
				h3 {
					margin: 0;
				}
			`}</style>
		</h3>
	)
}

const Description: FunctionComponent<WithChildren> = ({ children }) => {
	return (
		<p>
			{children}
			<style jsx>{`
				p {
					text-align: center;
				}
			`}</style>
		</p>
	)
}

const styles = css`
	article {
		padding: 1.5rem;
		border: 0.1rem solid var(--foreground);
		cursor: pointer;
		transition-duration: 0.2s;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
		gap: 2rem;
		box-shadow: 0 1.2rem 1.5rem -1.7rem var(--foreground);
		height: 100%;
	}

	article:hover {
		transform: scale(1.02);
	}
`

export const RepositoryCard: FunctionComponent<WithChildren> & {
	Title: typeof Title
	Description: typeof Description
} = ({ children }) => {
	return (
		<article>
			{children}
			<style jsx>{styles}</style>
		</article>
	)
}

RepositoryCard.Title = Title
RepositoryCard.Description = Description
