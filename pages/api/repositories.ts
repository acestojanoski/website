import { getRepositories } from '@/features/projects/server/service'
import microHandlers from 'micro-handlers'
import { NextApiRequest, NextApiResponse } from 'next'

async function handler(req: NextApiRequest, res: NextApiResponse) {
	const { after } = req.query
	const afterCursor = Array.isArray(after) ? after[0] : after

	try {
		const repositories = await getRepositories(afterCursor)
		res.json(repositories)
	} catch (error) {
		console.error('error', error)

		res.status(500).json({
			message: 'Internal server error',
		})
	}
}

export default microHandlers({
	GET: handler,
})
