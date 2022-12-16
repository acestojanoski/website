import { GetStaticProps } from 'next'
import * as service from '@acestojanoski/backend/src/repositories/service'
import { PageProps } from './types'

/** Seconds */
export const ISR_REVALIDATE_INTERVAL = 60

export const getStaticProps: GetStaticProps<PageProps> = async () => {
	const repositories = await service.getRepositories()

	return {
		props: {
			firstPage: repositories,
		},
		revalidate: ISR_REVALIDATE_INTERVAL,
	}
}
