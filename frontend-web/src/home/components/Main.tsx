import { Tag } from '@/common/components'
import { FunctionComponent } from 'react'
import css from 'styled-jsx/css'

const styles = css`
	main {
		grid-column: 1 / -1;
		height: calc(100vh - 5.6rem);
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.8rem;
		flex-direction: column;
	}

	main > * {
		text-align: center;
	}
`

export const Main: FunctionComponent = () => {
	return (
		<main>
			<h1>Aleksandar Stojanoski</h1>
			<Tag>Development</Tag>
			<p>
				Hello! I am Aleksandar Stojanoski, a software engineer from Macedonia.
			</p>
			<style jsx>{styles}</style>
		</main>
	)
}
