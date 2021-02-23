import * as React from "react"

import "./Footer.scss"

const Footer: React.FunctionComponent = (): JSX.Element => {
	return (
		<footer className="app__footer footer">
			<p className="footer__paragraph">
				&copy; {new Date().getFullYear()} Bastion of Shadows. All rights reserved.
			</p>
			<p className="footer__paragraph">
				See our statement on Fair Use of copyrighted material.
			</p>
		</footer>
	)
}

export default Footer