import { FunctionComponent } from 'react'

export const MoonIcon: FunctionComponent = () => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			width="16"
			height="16"
			stroke="white"
			strokeWidth="1.5"
			strokeLinecap="round"
			strokeLinejoin="round"
			fill="none"
			shapeRendering="geometricPrecision"
			style={{
				color: 'var(--foreground)',
			}}
		>
			<path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
		</svg>
	)
}
