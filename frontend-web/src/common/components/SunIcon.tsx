import { FunctionComponent } from 'react'

export const SunIcon: FunctionComponent = () => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			width="16"
			height="16"
			stroke="black"
			strokeWidth="1.5"
			strokeLinecap="round"
			strokeLinejoin="round"
			fill="none"
			shapeRendering="geometricPrecision"
			style={{
				color: 'var(--foreground)',
			}}
		>
			<circle cx="12" cy="12" r="5" />
			<path d="M12 1v2" />
			<path d="M12 21v2" />
			<path d="M4.22 4.22l1.42 1.42" />
			<path d="M18.36 18.36l1.42 1.42" />
			<path d="M1 12h2" />
			<path d="M21 12h2" />
			<path d="M4.22 19.78l1.42-1.42" />
			<path d="M18.36 5.64l1.42-1.42" />
		</svg>
	)
}