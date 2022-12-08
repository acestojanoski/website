import { Header, PageGrid, PageHead } from '@/common/components'
import { NextPage } from 'next'
import { Repositories } from '../components'
import { PageProps } from './types'

export const ProjectsPage: NextPage<PageProps> = ({ firstPage }) => {
	return (
		<PageGrid>
			<PageHead
				title="Code Repositories"
				description="Aleksandar Stojanoski - A list of my public GitHub repositories."
			/>
			<Header />
			<Repositories firstPage={firstPage} />
		</PageGrid>
	)
}
