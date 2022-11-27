import { graphql } from '@octokit/graphql'
import { User } from '@octokit/graphql-schema'
import { GET_REPOSITORIES } from './graphql'

export async function getRepositories(afterCursor?: string) {
	const result = await graphql<{ user: User }>(GET_REPOSITORIES, {
		headers: {
			authorization: `bearer ${process.env.GITHUB_TOKEN}`,
		},
		login: process.env.GITHUB_LOGIN,
		afterCursor,
	})

	return result.user.repositories
}
