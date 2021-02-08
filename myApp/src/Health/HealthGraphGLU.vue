<template>
    <base-layout>
        <b>Glucose</b><br />
        <b>ค่าปกติ 70 - 100 mg/dL</b><br />
        <graph-result></graph-result>
        <p>
            - Glucose คือ ค่าน้ำตาลในเลือด เป็นแหล่งพลังงานแห่งแรกสำหรับเซลล์ของร่างกาย สำหรับผู้ป่วยโรคเบาหวานจะมีค่า Glucose มากกว่าเท่ากับ 126 และมีอาการผิดปกติเช่น ปัสสาวะบ่อยตอนกลางคืน
        </p>
        <ion-back-button defaultHref="/health/graph" text="Back" :icon="chevronBackOutline"></ion-back-button>
    </base-layout>
</template>
<script>
import { chevronBackOutline } from 'ionicons/icons';
import {IonBackButton} from '@ionic/vue'
import GraphResult from '../Health/GraphGLU.vue'

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