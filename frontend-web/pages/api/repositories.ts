import * as handlers from '@acestojanoski/backend/src/repositories/handlers'
import microHandlers from 'micro-handlers'

export default microHandlers({
	GET: handlers.getRepositories,
})
