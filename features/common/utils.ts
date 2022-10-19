// eslint-disable-next-line @typescript-eslint/no-empty-function
export function noop() {}

export function cn(...args: (string | Record<string, any>)[]) {
	return args
		.flatMap((arg) =>
			typeof arg === 'string'
				? arg
				: Object.keys(arg).filter((key) => !!arg[key])
		)
		.join(' ')
}

export const gql = String.raw

type FetcherFn<Data = undefined> = (
	key: string, // eslint-disable-line no-unused-vars
	data?: Data // eslint-disable-line no-unused-vars
) => Promise<Response>

type FetcherErrorOptions = {
	details?: any
	status?: number
	message?: string
}

const defaultErrorMessage = 'An error has occured.'

export class FetcherError extends Error {
	details?: FetcherErrorOptions['details']
	status: FetcherErrorOptions['status']

	constructor({ status, details, message }: FetcherErrorOptions) {
		super(message || defaultErrorMessage)
		this.status = status || 500
		this.details = details
	}
}

export function createFetcher<ExpectedResult = unknown, Data = undefined>(
	fetchFn: FetcherFn<Data>,
	data?: Data
) {
	const fetcher = async (key: string) => {
		try {
			const response = await fetchFn(key, data)
			const responseBody = await response.json()

			if (response.ok) {
				return responseBody as ExpectedResult
			}

			throw new FetcherError({
				status: response.status,
				message: responseBody.message,
				details: responseBody,
			})
		} catch (error: any) {
			if (error instanceof FetcherError) {
				throw error
			}

			throw new FetcherError({
				status: error.status,
				message: error.message,
				details: error,
			})
		}
	}

	return fetcher
}
