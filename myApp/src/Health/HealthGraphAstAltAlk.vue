<template>
    <base-layout>
        <health-menu></health-menu>
        <b>AST</b><br />
        <b>ค่าปกติ น้อยกว่า 40</b><br />
        <graph-ast></graph-ast>
        <p class="ion-padding">AST มีค่าสูงขึ้นเมื่อเซลล์ตับถูกทำลาย</p>

        <b>ALT</b><br />
        <b>ค่าปกติ น้อยกว่า 40</b><br />
        <graph-alt></graph-alt>
        <p class="ion-padding">ALT มีค่าสูงขึ้นเมื่อเซลล์ตับถูกทำลายหรือมีอาการอักเสบ</p>

        <b>ALK</b><br />
        <b>ค่าปกติ 30 - 100</b><br />
        <graph-alk></graph-alk>
        <p class="ion-padding">ALK มีค่าสูงขึ้นในโรคที่ส่งผลต่อตับ</p>

        
        <p class="ion-padding">
            <b>ข้อควรปฏิบัติเพื่อสุขภาพที่ดี</b><br />
            1. งดสูบบุหรี่และงดดื่มสุรา<br />
            2. สร้างนิสัยการนอนหลับที่ดี<br />
            3. รับประทานอาหารครบ 5 หมู่<br />
            4. ยาบางตัวมีผลกระทบต่อตับ<br />
            5. ออกกำลังกายสม่ำเสมอ<br />
            6. อารมณ์ดีอยู่เสมอ<br />
        </p>
        <ion-back-button defaultHref="/health/graph" text="Back" :icon="chevronBackOutline"></ion-back-button>
    </base-layout>
</template>
<script>
import { chevronBackOutline } from 'ionicons/icons';
import GraphAst from '../Health/GraphAST.vue'
import GraphAlt from '../Health/GraphALT.vue'
import GraphAlk from '../Health/GraphALK.vue'
import {IonBackButton} from '@ionic/vue'
export default {
  components: { 
      GraphAst,
      GraphAlt,
      GraphAlk,
      IonBackButton
   },
   setup(){
       return{
           chevronBackOutline
       }
   }
  
}
</script>