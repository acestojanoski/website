import { FunctionComponent } from 'react'
import css from 'styled-jsx/css'
import { WithChildren } from '../types'

const styles = css`
	span {
		border: 0.1rem solid var(--foreground);
		padding: 0.32rem 0.48rem;
		font-size: 1.28rem;
		text-transform: uppercase;
		letter-spacing: 0.1rem;
	}
`

type TagProps = {
	bgColor?: string
	color?: string
}

export const Tag: FunctionComponent<WithChildren<TagProps>> = ({
	children,
	bgColor,
	color,
}) => {
	return (
		<span style={{ background: bgColor, color }}>
			{children}
			<style jsx>{styles}</style>
		</span>
	)
}
