import { IonRouterOutlet } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Redirect, Route, Switch } from "react-router-dom";
import {Home, NotFound} from './pages'

const GuardedRoute = ({ path, render, ...props }) => {
//   const {token, pin} = useSelector((state) => state.userSlice);

  return <Route {...props} path={path} render={ render
    //() => { return !token || (token && pin) ? <Redirect to="/register-setup"/> : render()}
}/>;
};
const Routes = () => {
  return (
    <IonReactRouter>
      <IonRouterOutlet>
        <Switch>
          <GuardedRoute exact path="/" render={() => <Home />}/>
          <Route path={"*"} render={() => <NotFound />} />
        </Switch>
      </IonRouterOutlet>
    </IonReactRouter>
  );
};

export default Routes;
