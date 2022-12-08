import { User } from '@octokit/graphql-schema'

export type PageProps = {
	firstPage?: User['repositories']
}
