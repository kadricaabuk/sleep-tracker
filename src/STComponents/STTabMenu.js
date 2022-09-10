import TabRoutes from "../TabRoutes"
import { IonTabs, IonTabBar, IonRouterOutlet } from "@ionic/react"
import { Tabs } from "../pages/Tabs"

const STTabMenu = () => {
    return (
        <IonTabs>
            <IonRouterOutlet>
                <TabRoutes />
            </IonRouterOutlet>
            <IonTabBar slot="bottom" style={{bacgroundColor: "#000", color: "#fff"}}>
                <Tabs />
            </IonTabBar>
        </IonTabs>
    )
}
export default STTabMenu