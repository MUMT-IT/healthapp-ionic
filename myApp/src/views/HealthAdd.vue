<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Food</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">

    <ion-item>
        <ion-label>ผลวันที่</ion-label>
        <ion-datetime display-format="DD MM YYYY" placeholder="Select Date"></ion-datetime>
    </ion-item>
    <ion-list>
        <ion-list-header>
            <ion-label>
                บันทึกผลสุขภาพ
            </ion-label>
        </ion-list-header>
        <ion-item>
            <ion-label>เลือก</ion-label>
            <ion-select placeholder="Select One">
                <ion-select-option value="weight">น้ำหนัก</ion-select-option>
                <ion-select-option value="้height">ส่วนสูง</ion-select-option>
                <ion-select-option value="้heartrate">ชีพจร</ion-select-option>
                <ion-select-option value="้systolic">ความดัน</ion-select-option>
                <ion-select-option value="้GLU">ระดับน้ำตาลในเลือด</ion-select-option>
                <ion-select-option value="้CHO">Cholesterol</ion-select-option>
                <ion-select-option value="้TG">Triglyceride</ion-select-option>
                <ion-select-option value="้HDL">HDL-C</ion-select-option>
                <ion-select-option value="้LDL">LDL</ion-select-option>
            </ion-select>
        </ion-item>
         <ion-item>
             <ion-label>กรอกผล</ion-label>
             <ion-input></ion-input>
         </ion-item>
    </ion-list>
    <ion-button expand="block">Save</ion-button>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent,IonDatetime, IonItem,IonLabel  } from '@ionic/vue';


export default  {
  name: 'HealthAdd',
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage,IonDatetime, IonItem,IonLabel }
}
</script>