import { Route } from "react-router-dom"
import { Home, Summary, Sleep, Profile } from "./pages/Tabs"

const TabRoutes = () => {
    return (
        <>
            <Route tab="home" component={Home}/>
            <Route tab="summary" component={Summary}/>
            <Route tab="sleep" component={Sleep} />
            <Route tab="profile" component={Profile} />
        </>
    )
}
export default TabRoutes