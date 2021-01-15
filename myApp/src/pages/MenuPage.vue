<template>
    <ion-page>
      <ion-menu contentId="main-content" side="start">
        <ion-header>
          <ion-toolbar color="primary">
            <ion-title>Social Health</ion-title>
          </ion-toolbar>
        </ion-header>
        <ion-content>
          <ion-list>
            <ion-menu-toggle auto-hide="true">
            <ion-item href="/home">Home</ion-item>
            <ion-item href="/profile/edit">Your Profile</ion-item>
            <ion-item  href="/health/physical">Health</ion-item>
            <ion-item href="/exercise">Exercise</ion-item>
            <ion-item>Food</ion-item>
            <ion-item>Mind</ion-item>
            <ion-item>Services</ion-item>
            </ion-menu-toggle>
          </ion-list>
        </ion-content>
      </ion-menu>
      <ion-router-outlet id="main-content"></ion-router-outlet>

          <ion-header>
            <ion-toolbar>
              <ion-buttons slot="start">
                <ion-menu-button auto-hide="false"></ion-menu-button>
              </ion-buttons>
              <ion-title> Social Health </ion-title>
            </ion-toolbar>
          </ion-header>
       
    </ion-page>
</template>
<script>

import { IonPage,IonHeader,IonTitle,IonToolbar,IonList,IonItem,IonButtons,IonMenuButton,IonMenu,IonRouterOutlet,IonMenuToggle } from '@ionic/vue';

export default {
    props:['pageTitle'],
    components:{
        IonPage,
        IonHeader,
        IonTitle,
        IonToolbar,
        IonList,
        IonItem,
        IonButtons,
        IonMenuButton,
        IonMenu,
        IonRouterOutlet,
        IonMenuToggle,
    },
}
</script>