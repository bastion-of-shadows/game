import * as React from "react"
import { Switch, Route, useRouteMatch } from "react-router-dom"
import { NavDestination } from "@/tools/definitions/general"
import AdminMenu from "@/components/nav/AdminMenu"
import Add from "@/site/admin/species/Add"
import AddSuccessful from "@/site/admin/species/AddSuccessful"

const links: NavDestination[] = [
	{
		href: "add",
		name: "Add new species"
	}
]

const Species: React.FunctionComponent = (): JSX.Element => {

	const { path } = useRouteMatch()

	return (
		<section className="admin">
			<AdminMenu
				links={links}
				backLink={{ href: "/admin" }}
			/>

			<section className="admin__content">
				<Switch>
					<Route
						exact
						path={`${path}/add`}
					>
						<Add />
					</Route>
					<Route
						exact
						path={`${path}/add/successful`}
					>
						<AddSuccessful />
					</Route>
				</Switch>
			</section>
		</section>
	)
}

export default Species