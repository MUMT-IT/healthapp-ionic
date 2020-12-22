<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Exercise</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-list>
        <ion-item>
          <ion-label>เลือกกิจกรรม</ion-label>
          <ion-select ok-text="Ok" cancel-text="cancel">
            <ion-select-option value="walk">เดิน</ion-select-option>
            <ion-select-option value="run">วิ่ง</ion-select-option>
            <ion-select-option value="swim">ว่ายน้ำ</ion-select-option>
            <ion-select-option value="bike">ปั่นจักรยาน</ion-select-option>
            <ion-select-option value="dance">เต้น</ion-select-option>
            <ion-select-option value="yoga">โยคะ</ion-select-option>
            <ion-select-option value="Weight">Weight Training</ion-select-option>
            <ion-select-option value="BodyWeight">Body Weight</ion-select-option>
          </ion-select>
        </ion-item>
        
        <ion-item>
          <img src="https://source.unsplash.com/ZmZEkO-pb7M/400x300">
        </ion-item>

        <ion-radio-group value="biff">
          <ion-list-header>
            <ion-label>ระดับความเหนื่อย</ion-label>
          </ion-list-header>

          <ion-item>
            <ion-label>ไม่เหนื่อยมาก</ion-label>
            <ion-radio slot="start" value="1"></ion-radio>
          </ion-item>

          <ion-item>
            <ion-label>เหนื่อยปานกลาง</ion-label>
            <ion-radio slot="start" value="2"></ion-radio>
          </ion-item>

          <ion-item>
            <ion-label>เหนื่อยมาก</ion-label>
            <ion-radio slot="start" value="3"></ion-radio>
          </ion-item>
        </ion-radio-group>
      </ion-list>
      <ion-button expand="block">เพิ่มกิจกรรม</ion-button>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';


export default  {
  name: 'ExerciseLst',
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage }
}
</script>