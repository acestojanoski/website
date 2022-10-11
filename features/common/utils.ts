export function cn(...args: (string | Record<string, any>)[]) {
	return args
		.flatMap((arg) =>
			typeof arg === 'string'
				? arg
				: Object.keys(arg).filter((key) => !!arg[key])
		)
		.join(' ')
}
