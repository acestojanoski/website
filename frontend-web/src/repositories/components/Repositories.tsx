import { Button, FetcherErrorComponent, Tag } from '@/common/components'
import { User } from '@octokit/graphql-schema'
import useSWRInfinite from 'swr/infinite'
import Link from 'next/link'
import css from 'styled-jsx/css'
import { RepositoryCard } from './RepositoryCard'
import { RepositoryCardGrid } from './RepositoryCardGrid'
import { cn, createFetcher, FetcherError } from '@/common/utils'

const styles = css`
	main {
		grid-column: 1 / -1;
		margin: 5rem 0;
	}

	.load-more {
		display: none;
		margin-top: 3rem;
		justify-content: center;
	}

	.load-more.enabled {
		display: flex;
	}

	h1 {
		margin-bottom: 4rem;
	}
`

function getKey(pageIndex: number, previousPageData: User['repositories']) {
	// Reached the end
	if (previousPageData && !previousPageData.pageInfo.hasNextPage) {
		return null
	}

	// First page
	if (pageIndex === 0) {
		return '/api/repositories'
	}

	return `/api/repositories?after=${previousPageData.pageInfo.endCursor}`
}

type RepositoriesProps = {
	firstPage?: User['repositories']
}

export function Repositories({ firstPage }: RepositoriesProps) {
	const { data, error, size, setSize } = useSWRInfinite<
		User['repositories'],
		FetcherError
	>(getKey, createFetcher(fetch), {
		revalidateFirstPage: false,
		fallbackData: firstPage ? [firstPage] : undefined,
	})

	if (error) {
		return <FetcherErrorComponent error={error} />
	}

	const currentPageIndex = size > 0 ? size - 1 : 0

	const itReachedTheEnd =
		data &&
		data[currentPageIndex] &&
		!data[currentPageIndex].pageInfo.hasNextPage

	const handleLoadMore = () => {
		if (itReachedTheEnd) {
			return
		}

		setSize(size + 1)
	}

	const isLoadingInitialData = !data && !error

	const isLoadingMore =
		isLoadingInitialData ||
		(size > 0 && data && typeof data[currentPageIndex] === 'undefined')

	return (
		<main>
			<h1>Code Repositories</h1>
			<RepositoryCardGrid>
				{data
					?.flatMap((page) => page.edges)
					.map((edge) => {
						if (!edge || !edge.node) {
							return
						}

						return (
							<Link key={edge.cursor} href={edge.node.url}>
								<RepositoryCard>
									<div>
										<RepositoryCard.Title>
											{edge.node.name}
										</RepositoryCard.Title>
										{!!edge.node.description && (
											<RepositoryCard.Description>
												{edge.node.description}
											</RepositoryCard.Description>
										)}
									</div>
									{!!edge.node.primaryLanguage?.name && (
										<Tag>{edge.node.primaryLanguage.name}</Tag>
									)}
								</RepositoryCard>
							</Link>
						)
					})}
			</RepositoryCardGrid>
			<div className={cn('load-more', { enabled: !itReachedTheEnd })}>
				<Button disabled={isLoadingMore} onClick={handleLoadMore}>
					{isLoadingMore ? 'Loading...' : 'Load More'}
				</Button>
			</div>
			<style jsx>{styles}</style>
		</main>
	)
}
