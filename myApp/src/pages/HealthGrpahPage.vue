<template>
    <base-layout>
        <health-menu></health-menu>
        <ion-list>
            <ion-item router-link="/health/graph/bmi">
                <ion-icon slot="start" :icon="analytics" />
                <ion-label>BMI</ion-label>
            </ion-item>
            <ion-item router-link="/health/graph/glu">
                <ion-icon slot="start" :icon="analytics" />
                <ion-label>ระดับน้ำตาลในเลือด</ion-label>
            </ion-item>
            <ion-item router-link="/health/graph/buncre">
                <ion-icon slot="start" :icon="analytics" />
                <ion-label>การทำงานของไต</ion-label>
            </ion-item>
            <ion-item router-link="/health/graph/ua">
                <ion-icon slot="start" :icon="analytics" />
                <ion-label>กรดยูริกในเลือด</ion-label>
            </ion-item>
            <ion-item router-link="/health/graph/chotg">
                <ion-icon slot="start" :icon="analytics" />
                <ion-label>ระดับไขมัน</ion-label>
            </ion-item>
            <ion-item router-link="/health/graph/astaltalk">
                <ion-icon slot="start" :icon="analytics" />
                <ion-label>การทำงานของตับ</ion-label>
            </ion-item>
            
        </ion-list>
        
    </base-layout>
</template>
<script>
import { analytics } from 'ionicons/icons'; 
import {IonList,IonItem,IonIcon,IonLabel} from '@ionic/vue'
import HealthMenu from '../Health/HealthMenu.vue'
export default {
  components: { 
      HealthMenu,
      IonList,
      IonItem,
      IonIcon,
      IonLabel
   },
   setup(){
       return{
           analytics
       }
   }
  
}
</script>