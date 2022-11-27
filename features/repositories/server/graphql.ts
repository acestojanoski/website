import { gql } from '@/features/common/utils'

export const GET_REPOSITORIES = gql`
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
