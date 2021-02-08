<template>
    <base-layout>
        <b>Uric acid</b><br />
        <b>ค่าปกติ 2.4 - 7.0 mg/dL</b><br />
        <graph-result></graph-result>
        <p>
            Uric acid ถ้ามีค่าสูง จะเกิดผลิกไปสะสมในข้ออาจให้เกิดความเสี่ยงเป็นโรคข้ออักเสบ(เก๊าท์)
        </p>
        <p>
        <b>ข้อควรปฏิบัติเพื่อสุขภาพที่ดี</b><br />
        1. ควรควบคุมการรับประทานอาหารจำพวก เนื้อสัตว์,เครื่องใน,ไก่,ชะอม,หน่อไม้,และถั่วต่างๆไม่ให้มากเกินไป<br />
        2. หลีกเลี่ยงการดื่มเบียร์และเหล้า<br />
        3. ควบคุมน้่ำหนักให้อยู่ในเกณฑ์ปกติ<br />
        4. ดื่มน้ำมากๆเพื่อช่วยในการขับถ่ายกรดยูริก<br />
        5. ตรวจสุขภาพประจำอย่างน้อยปีละครั้ง<br />
        </p>
        <ion-back-button defaultHref="/health/graph" text="Back" :icon="chevronBackOutline"></ion-back-button>
    </base-layout>
</template>
<script>
import {IonBackButton} from '@ionic/vue'
import GraphResult from '../Health/GraphUA.vue'
import { chevronBackOutline } from 'ionicons/icons';
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