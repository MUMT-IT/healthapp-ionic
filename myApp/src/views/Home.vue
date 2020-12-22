<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Tab 1</ion-title>
      </ion-toolbar>
    </ion-header>
      
      <ion-item>
        <ion-avatar slot="start">
          <img :src="profile.pictureURL">
        </ion-avatar>
        <ion-label>{{ profile.displayName }}</ion-label>
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
import { LineLogin } from "@ionic-native/line-login";


export default  {
  name: 'Home',
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage,IonCard, IonCardContent, IonCardSubtitle, IonCardTitle },
  data() {
    return {
      profile: {}
    }
  },
  mounted() {
    const line = LineLogin;
    // eslint-disable-next-line @typescript-eslint/camelcase
    line.initialize({channel_id: "1655422192"}).then((res)=>{
      console.log(res)
    })
    line.login().then((result)=>{
      console.log(result)
      this.profile = result;
    })
  }
}
</script>