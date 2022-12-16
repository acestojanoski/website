import * as repository from './repository'

export async function getRepositories(afterCursor?: string) {
	return repository.getRepositories(afterCursor)
}
