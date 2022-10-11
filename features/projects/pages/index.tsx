import { Header, PageGrid, PageHead } from '@/features/common/components'
import { GetStaticProps, NextPage } from 'next'

export const ProjectsPage: NextPage = () => {
	return (
		<PageGrid>
			<PageHead title="Projects" />
			<Header />
		</PageGrid>
	)
}

export const getStaticProps: GetStaticProps = async () => {
	return {
		props: {},
		revalidate: 24 * 60 * 60, // 25h * 60min * 60s
	}
}
