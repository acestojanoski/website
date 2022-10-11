import { Header, PageGrid, PageHead } from '@/features/common/components'
import { GetServerSideProps, NextPage } from 'next'
import { graphql } from '@octokit/graphql'
import { User } from '@octokit/graphql-schema'
import { GET_REPOSITORIES } from '../queries'
import { Repositories } from '../components'

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
	const after = Array.isArray(query.after) ? query.after[0] : query.after

	const result = await graphql<{ user: User }>(GET_REPOSITORIES, {
		headers: {
			authorization: `bearer ${process.env.GITHUB_TOKEN}`,
		},
		login: process.env.GITHUB_LOGIN,
		cursor: after,
	})

	return {
		props: {
			repositories: result.user.repositories,
		},
	}
}

type ProjectsPageProps = {
	repositories: User['repositories']
}

export const ProjectsPage: NextPage<ProjectsPageProps> = ({ repositories }) => {
	return (
		<PageGrid>
			<PageHead title="Projects" />
			<Header />
			<Repositories repositories={repositories} />
		</PageGrid>
	)
}
