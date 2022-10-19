import { Header, PageGrid, PageHead } from '@/features/common/components'
import { NextPage } from 'next'
import { Repositories } from '../components'

export const ProjectsPage: NextPage = () => {
	return (
		<PageGrid>
			<PageHead
				title="Projects"
				description="Aleksandar Stojanoski - A list of my public GitHub repositories."
			/>
			<Header />
			<Repositories />
		</PageGrid>
	)
}
