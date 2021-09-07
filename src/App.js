import Layout from "components/layout/Layout";
import { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";

const SomePage = lazy(() => import("./pages/SomePage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

const App = () => {
	return (
		<Layout>
			<Suspense fallback={<p>Loading...</p>}>
				<Switch>
					<Route path="/" exact>
						<p>Homepage!</p>
					</Route>
					<Route path="/somethings">
						<SomePage />
					</Route>
					<Route path="*">
						<NotFoundPage />
					</Route>
				</Switch>
			</Suspense>
		</Layout>
	);
};

export default App;
