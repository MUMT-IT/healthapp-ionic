<template>
    <base-layout>
        <health-menu></health-menu>
        <ion-list>
            <ion-item router-link="/health/graph/bmi">
                BMI
            </ion-item>
            <ion-item router-link="/health/graph/glu">
                ระดับน้ำตาลในเลือด
            </ion-item>
            <ion-item>
                การทำงานของไต
            </ion-item>
            <ion-item>
                กรดยูริกในเลือด
            </ion-item>
            <ion-item>
                ระดับไขมัน
            </ion-item>
            <ion-item>
                การทำงานของตับ
            </ion-item>
            
        </ion-list>
    </base-layout>
</template>
<script>
import {IonList,IonItem} from '@ionic/vue'
import HealthMenu from '../Health/HealthMenu.vue'
export default {
  components: { 
      HealthMenu,
      IonList,
      IonItem,
   },
  
}
</script>