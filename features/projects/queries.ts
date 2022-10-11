export const GET_REPOSITORIES = `
    query ($login: String!, $cursor: String) {
        user(login: $login) {
            repositories(
                first: 12,
                isFork: false,
                isLocked: false,
                ownerAffiliations: OWNER,
                privacy: PUBLIC,
                orderBy: {
                    field: CREATED_AT,
                    direction: DESC
                },
                after: $cursor
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
            }
        }
    }
`
