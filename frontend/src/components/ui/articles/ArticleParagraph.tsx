import * as React from "react"
import { PropsWithChildren } from "react"

const ArticleParagraph: React.FunctionComponent = ({ children }: PropsWithChildren<unknown>): JSX.Element => {
	return (
		<p className="article__paragraph">
			{ children }
		</p>
	)
}

export default ArticleParagraph