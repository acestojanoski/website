import { Header, PageGrid, PageHead } from '@/features/common/components'
import { User } from '@octokit/graphql-schema'
import { GetServerSideProps, NextPage } from 'next'
import { Repositories } from '../components'
import { getRepositories } from '../server/service'

type ProjectsPageProps = {
	firstPage?: User['repositories']
}

export const getServerSideProps: GetServerSideProps<
	ProjectsPageProps
> = async () => {
	const repositories = await getRepositories()

	return {
		props: {
			firstPage: repositories,
		},
	}
}

export const ProjectsPage: NextPage<ProjectsPageProps> = ({ firstPage }) => {
	return (
		<PageGrid>
			<PageHead
				title="Projects"
				description="Aleksandar Stojanoski - A list of my public GitHub repositories."
			/>
			<Header />
			<Repositories firstPage={firstPage} />
		</PageGrid>
	)
}
