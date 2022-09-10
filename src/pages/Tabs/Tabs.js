import { IonLabel, IonTabButton } from '@ionic/react';
import React from 'react';

const TabMenu = () => {
    return (
        <>
            <IonTabButton tab="home">
                <IonLabel>1</IonLabel>
            </IonTabButton>
            <IonTabButton tab="summary">
                <IonLabel>2</IonLabel>
            </IonTabButton>
            <IonTabButton tab="sleep">
                <IonLabel>3</IonLabel>
            </IonTabButton>   
            <IonTabButton tab="profile">
                <IonLabel>4</IonLabel>
            </IonTabButton>   
        </>
    );
}

export default TabMenu;
