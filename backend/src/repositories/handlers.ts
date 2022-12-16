import { RequestHandler, send, serve } from 'micro'
import { url } from '../common/utils'
import * as service from './service'

export const getRepositories: RequestHandler = serve(async (req, res) => {
	const { searchParams } = url(req.url!)
	const after = searchParams.get('after') || undefined

	try {
		const repositories = await service.getRepositories(after)
		send(res, 200, repositories)
	} catch (error) {
		console.error('error', error)

		send(res, 500, {
			message: 'Internal server error',
		})
	}
})
