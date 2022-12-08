import { PropsWithChildren } from 'react'
import css from 'styled-jsx/css'

const styles = css`
	span {
		border: 0.1rem solid var(--foreground);
		padding: 0.52rem 0.8rem;
		font-size: 1.28rem;
		text-transform: uppercase;
		letter-spacing: 0.1rem;
		border-radius: 0.8rem;
	}
`

type TagProps = {
	bgColor?: string
	color?: string
}

export function Tag({ children, bgColor, color }: PropsWithChildren<TagProps>) {
	return (
		<span style={{ background: bgColor, color }}>
			{children}
			<style jsx>{styles}</style>
		</span>
	)
}
