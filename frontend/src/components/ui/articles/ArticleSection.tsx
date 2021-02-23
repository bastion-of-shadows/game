import * as React from "react"
import ArticleHeader from "@/components/ui/articles/ArticleHeader"

type ArticleSectionProps = {
	preamble?: boolean,
	headerText?: string,
	children?: React.ReactNode
}

const ArticleSection: React.FunctionComponent<ArticleSectionProps> = ({
	preamble = false,
	headerText,
	children
}: ArticleSectionProps): JSX.Element => {

	const sectionClasses = `article__section ${preamble ? "article__section--preamble" : ""}`

	return (
		<section className={sectionClasses}>
			{headerText && (
				<ArticleHeader level={2}>
					{ headerText }
				</ArticleHeader>
			)}

			{ children }
		</section>
	)
}

export default ArticleSection