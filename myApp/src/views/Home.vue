<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Tab 1</ion-title>
      </ion-toolbar>
    </ion-header>
      
      <ion-item>
        <ion-avatar slot="start">
          <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y">
        </ion-avatar>
      <ion-label>User Name</ion-label>
      </ion-item>
    
    <ion-content :fullscreen="true">
      <ion-card>
        <ion-card-header>
          <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
          <ion-card-title>Card Title</ion-card-title>
        </ion-card-header>
        <img src="https://source.unsplash.com/XCkc8-_s7FA/400x300">
    
        <ion-card-content>
          Keep close to Nature's heart... and break clear away, once in awhile,
          and climb a mountain or spend a week in the woods. Wash your spirit clean.
        </ion-card-content>
      </ion-card>
    </ion-content>

  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent,IonCard, IonCardContent, IonCardSubtitle, IonCardTitle } from '@ionic/vue';


export default  {
  name: 'Home',
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage,IonCard, IonCardContent, IonCardSubtitle, IonCardTitle }
}
</script>