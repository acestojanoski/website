import { FunctionComponent, PropsWithChildren } from 'react'
import css from 'styled-jsx/css'

function Title({ children }: PropsWithChildren) {
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

function Description({ children }: PropsWithChildren) {
	return <p>{children}</p>
}

const styles = css`
	article {
		padding: 1.5rem;
		cursor: pointer;
		transition-duration: 0.2s;
		box-shadow: 0 1.2rem 1.5rem -1.7rem var(--foreground);
		min-height: 16rem;
		height: 100%;
		border-radius: 0.8rem;
		position: relative;
	}

	article:hover {
		transform: scale(1.02);
	}

	article::before {
		content: '';
		background: linear-gradient(
			71.18deg,
			rgb(0, 34, 255) -27.32%,
			rgb(0, 34, 255) -16.39%,
			rgb(81, 121, 254) -7.38%,
			rgb(165, 237, 182) 30.59%,
			rgb(250, 232, 90) 46.06%,
			rgb(253, 172, 62) 62.61%,
			rgb(255, 92, 0) 75.82%
		);
		width: 100%;
		height: 100%;
		position: absolute;
		left: 0;
		top: 0;
		z-index: -1;
		display: block;
		border-radius: 0.8rem;
	}

	article .inner {
		display: flex;
		flex-direction: column;
		align-items: start;
		justify-content: space-between;
		gap: 1rem;
		height: 100%;
	}

	article .inner::before {
		content: '';
		width: calc(100% - 0.4rem);
		height: calc(100% - 0.4rem);
		background-color: rgb(13, 17, 23);
		position: absolute;
		top: 0.2rem;
		left: 0.2rem;
		z-index: -1;
		border-radius: 0.8rem;
		background: var(--background);
	}
`

export const RepositoryCard: FunctionComponent<PropsWithChildren> & {
	Title: typeof Title
	Description: typeof Description
} = ({ children }) => {
	return (
		<article>
			<div className="inner">{children}</div>
			<style jsx>{styles}</style>
		</article>
	)
}

RepositoryCard.Title = Title
RepositoryCard.Description = Description
