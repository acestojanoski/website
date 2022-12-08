import { GetStaticProps } from 'next'
import { getRepositories } from '@acestojanoski/backend/repositories/service'
import { PageProps } from './types'

/** Seconds */
export const ISR_REVALIDATE_INTERVAL = 60

export const getStaticProps: GetStaticProps<PageProps> = async () => {
	const repositories = await getRepositories()

	return {
		props: {
			firstPage: repositories,
		},
		revalidate: ISR_REVALIDATE_INTERVAL,
	}
}
