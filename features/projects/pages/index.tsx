import { Header, PageGrid, PageHead } from '@/features/common/components'
import { User } from '@octokit/graphql-schema'
import { GetStaticProps, NextPage } from 'next'
import { Repositories } from '../components'
import { getRepositories } from '../server/service'

type ProjectsPageProps = {
	firstPage?: User['repositories']
}

/** Seconds */
export const ISR_REVALIDATE_INTERVAL = 60

export const getStaticProps: GetStaticProps<ProjectsPageProps> = async () => {
	const repositories = await getRepositories()

	return {
		props: {
			firstPage: repositories,
		},
		revalidate: ISR_REVALIDATE_INTERVAL,
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
