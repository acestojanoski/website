import { Header, PageGrid, PageHead } from '@/features/common/components'
import { NextPage } from 'next'
import { Repositories } from '../components'

export const ProjectsPage: NextPage = () => {
	return (
		<PageGrid>
			<PageHead title="Projects" />
			<Header />
			<Repositories />
		</PageGrid>
	)
}
