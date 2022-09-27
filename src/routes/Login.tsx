import {
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonIcon,
  useIonLoading,
  useIonAlert
} from "@ionic/react";
import { logIn } from "ionicons/icons";

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";



const Login = () => {
  const [present, dismiss] = useIonLoading();
  const navigate = useNavigate();
  const [alert] = useIonAlert()

  const onSubmit = async (e: any) => {
    e.preventDefault();
    await present({message: 'Loading..'})

    setTimeout(() => {
      dismiss()
      alert({
        header: 'invalid credentials',
        message: 'There is no user with that name and password',
        buttons: [{text: 'Ok'}]
      })
      // navigate("/app/dashboard");
    }, 1500);
  };

  return (
    <>
      <IonCard>
        <form onSubmit={onSubmit}>
          <IonCardContent>
            <IonItem>
              <IonLabel position="floating">Email:</IonLabel>
              <IonInput type="email"></IonInput>
            </IonItem>
            <IonItem>
              <IonLabel position="floating">Password:</IonLabel>
              <IonInput type="password"></IonInput>
            </IonItem>

            <div className="ion-margin-top">
              <IonButton expand="full" type="submit" color="secondary">
                <IonIcon icon={logIn} slot="start" />
                LogIn
              </IonButton>
            </div>
          </IonCardContent>
        </form>
      </IonCard>
    </>
  );
};

export default Login;
