<template>
    <base-layout>
        <health-menu></health-menu>
        <h5>BMI</h5>
        <b>ค่าปกติ 18.5 - 22.9</b><br />
        <graph-result></graph-result>
        <p class="ion-padding">
            - BMI หรือ ค่าดัชนีมวลกาย ใช้ความสัมพันธ์ของน้ำหนักและส่วนสูงมาเป็นตัวชี้วัดรูปร่าง ในผู้ป่วยเบาหวานหาก BMI สูงมากเกินจะทำให้การควบคุมน้ำตาลไม่ได้ผล
        </p>
        <ion-back-button defaultHref="/health/graph" text="Back" :icon="chevronBackOutline"></ion-back-button>
    </base-layout>
</template>
<style>
    div {text-align: center;}
</style>
<script>
import GraphResult from '../Health/GraphBMI.vue'
import { chevronBackOutline } from 'ionicons/icons';
import {IonBackButton} from '@ionic/vue'
export default {
  components: { 
      IonBackButton,
      GraphResult,
   },
   setup(){
       return{
           chevronBackOutline
       }
   }
  
}
</script>