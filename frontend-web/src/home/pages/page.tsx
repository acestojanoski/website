import { Header, PageGrid, PageHead } from '@/common/components'
import { NextPage } from 'next'
import { Main } from '../components'

export const HomePage: NextPage = () => {
	return (
		<PageGrid>
			<PageHead description="Hello! I am Aleksandar Stojanoski, a software engineer from Macedonia." />
			<Header />
			<Main />
		</PageGrid>
	)
}
