<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Exercise</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-card>
        <ion-card-header>
          <ion-card-title>ออกกำลังกาย</ion-card-title>
        </ion-card-header>
        <img src="https://source.unsplash.com/mQxCgQvwBMY/400x300">
    
        <ion-card-content>
          ควรออกกำลังกายอย่างน้อย 3 ครั้ง/สัปดาห์ นาน 30 นาทีและพักผ่อนให้เพียงพอ
        </ion-card-content>
      </ion-card>
      <ion-button expand="block">เพิ่มกิจกรรม</ion-button>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent,IonCard, IonCardContent, IonCardTitle } from '@ionic/vue';


export default  {
  name: 'Exercise',
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage,IonCard, IonCardContent, IonCardTitle }
}
</script>