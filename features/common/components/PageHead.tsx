import Head from 'next/head'
import { FunctionComponent } from 'react'

type PageHeadProps = {
	title?: string
	exact?: boolean
}

const defaultTitle = 'Aleksandar Stojanoski'

export const PageHead: FunctionComponent<PageHeadProps> = ({
	title,
	exact,
}) => {
	let pageTitle = defaultTitle

	if (exact && !!title) {
		pageTitle = title
	}

	if (!exact && !!title) {
		pageTitle = `${title} - ${defaultTitle}`
	}

	return (
		<Head>
			<title>{pageTitle}</title>
		</Head>
	)
}
