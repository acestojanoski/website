import { Header, PageGrid, PageHead } from '@/features/common/components'
import { NextPage } from 'next'
import { Main } from '../components'

export const HomePage: NextPage = () => {
	return (
		<PageGrid>
			<PageHead />
			<Header />
			<Main />
		</PageGrid>
	)
}
