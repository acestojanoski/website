import Head from 'next/head'
import { useRouter } from 'next/router'
import { FunctionComponent } from 'react'

type PageHeadProps = {
	title?: string
	exact?: boolean
	description?: string
}

const defaultTitle = 'Aleksandar Stojanoski'

export const PageHead: FunctionComponent<PageHeadProps> = ({
	title,
	exact,
	description,
}) => {
	const { asPath } = useRouter()
	let pageTitle = defaultTitle

	if (exact && !!title) {
		pageTitle = title
	}

	if (!exact && !!title) {
		pageTitle = `${title} - ${defaultTitle}`
	}

	return (
		<Head>
			{/* Title */}
			<title>{pageTitle}</title>
			<meta name="og:title" content={title} />

			{/* Description */}
			{description && (
				<>
					<meta name="description" content={description} />
					<meta property="og:description" content={description} />
				</>
			)}

			{/* URL */}
			<meta
				property="og:url"
				content={`https://acestojanoski.vercel.app${asPath}`}
			/>

			{/* General */}
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<meta property="og:type" content="website" />
		</Head>
	)
}
