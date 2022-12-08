import { gql } from '../common/utils'
import { graphql } from '@octokit/graphql'
import { User } from '@octokit/graphql-schema'

export const GET_REPOSITORIES_QUERY = gql`
	query ($login: String!, $afterCursor: String) {
		user(login: $login) {
			repositories(
				first: 9
				isFork: false
				isLocked: false
				ownerAffiliations: OWNER
				privacy: PUBLIC
				orderBy: { field: CREATED_AT, direction: DESC }
				after: $afterCursor
			) {
				edges {
					cursor
					node {
						name
						description
						url
						primaryLanguage {
							name
						}
					}
				}
				pageInfo {
					hasNextPage
					startCursor
					endCursor
				}
				totalCount
			}
		}
	}
`

export async function getRepositories(afterCursor?: string) {
	const result = await graphql<{ user: User }>(GET_REPOSITORIES_QUERY, {
		headers: {
			authorization: `bearer ${process.env.GITHUB_TOKEN}`,
		},
		login: process.env.GITHUB_LOGIN,
		afterCursor,
	})

	return result.user.repositories
}
