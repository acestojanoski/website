import { WithChildren } from '@/features/common/types'
import { FunctionComponent } from 'react'
import css from 'styled-jsx/css'

const styles = css`
	section {
		display: grid;
		gap: 3rem;
		grid-template-columns: repeat(1, 1fr);
	}

	@media only and screen (min-width: 768px) {
		section {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	@media only and screen (min-width: 1090px) {
		section {
			grid-template-columns: repeat(3, 1fr);
		}
	}
`

export const RepositoryCardGrid: FunctionComponent<WithChildren> = ({
	children,
}) => {
	return (
		<section>
			{children}
			<style jsx>{styles}</style>
		</section>
	)
}
