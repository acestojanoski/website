import { Tag } from '@/features/common/components'
import { User } from '@octokit/graphql-schema'
import Link from 'next/link'
import { FunctionComponent } from 'react'
import css from 'styled-jsx/css'
import { RepositoryCard } from './RepositoryCard'
import { RepositoryCardGrid } from './RepositoryCardGrid'

const styles = css`
	main {
		grid-column: 1 / -1;
		margin: 5rem 0;
	}
`

type RepositoriesProps = {
	repositories: User['repositories']
}

export const Repositories: FunctionComponent<RepositoriesProps> = ({
	repositories,
}) => {
	return (
		<main>
			<RepositoryCardGrid>
				{repositories.edges?.map((item) => (
					<Link key={item?.cursor} href={item?.node?.url} passHref>
						<a>
							<RepositoryCard>
								<RepositoryCard.Title>{item?.node?.name}</RepositoryCard.Title>
								{!!item?.node?.description && (
									<RepositoryCard.Description>
										{item.node.description}
									</RepositoryCard.Description>
								)}
								{!!item?.node?.primaryLanguage?.name && (
									<Tag>{item.node.primaryLanguage.name}</Tag>
								)}
							</RepositoryCard>
						</a>
					</Link>
				))}
			</RepositoryCardGrid>
			<style jsx>{styles}</style>
		</main>
	)
}
