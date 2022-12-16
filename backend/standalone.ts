import dotenv from 'dotenv'
import { IncomingMessage, ServerResponse } from 'http'
import { RequestHandler, send } from 'micro'
import microHandlers from 'micro-handlers'
import { url } from './src/common/utils'
import { getRepositories } from './src/repositories/handlers'

dotenv.config()

const handlers: Record<string, RequestHandler | undefined> = {
	'/api/repositories': microHandlers({ GET: getRepositories }),
}

module.exports = (req: IncomingMessage, res: ServerResponse) => {
	const { pathname } = url(req.url!)

	const handler = handlers[pathname]

	if (!handler) {
		return send(res, 404, `Not found ${req.method} ${pathname}`)
	}

	return handler(req, res)
}
