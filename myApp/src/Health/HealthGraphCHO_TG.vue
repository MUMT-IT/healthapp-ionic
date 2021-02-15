<template>
    <base-layout>
        <b>Cholesterol</b><br />
        <b>ค่าปกติ น้อยกว่า 200 mg/dL</b><br />
        <graph-cho></graph-cho>
        <p class="ion-padding">
           Cholesterol สารต้นตอในการสร้างฮอร์โมนบางชนิด สร้างน้ำดี แต่ถ้ามีค่ามากเกินไปจะก่อให้เกิดความเสี่ยงต่อโรคหลอดเลือดหัวใจ 
           การสะสมในผนังหลอดเลือดด้านในทำให้เกิดภาวะอุดตันในเส้นเลือด ลดระดับ Cholesterol โดยการหลีกเลี่ยงอาหาร เนื้อสัตว์ติดมัน อาหารทอด
        </p>

         <b>Triglyceride</b><br />
        <b>ค่าปกติ น้อยกว่า 150 mg/dL</b><br />
        <graph-tg></graph-tg>
        <p class="ion-padding">
            Triglyceride ถ้ามีมากเกินไปจะเก็บสะสมอยู่ตามบริเวณส่วนต่างๆของร่างกาย
        </p>

        <b>HDL-C</b><br />
        <b>ค่าปกติ มากกว่า 40 mg/dL</b><br />
        <graph-hdl></graph-hdl>
        <p class="ion-padding">
            HDL-C ไขมันส่วนที่ดี ทำหน้าที่ดึง Cholesterol จากผนังหลอดเลือดกลับไปใช้ หรือทำลายที่ตับ HDL-C 
            สูงจะทำให้มีส่วนช่วยป้องกันภาวะเสี่ยงจากโรคหลอดเลือดหัวใจตีบตัน หรือโรคหัวใจขาดเลือดได้ การออกกำลังจะช่วยให้ระดับ HDL-C สูงขึ้น
        </p>

        <b>LDL-C</b><br />
        <b>ค่าปกติ น้อยกว่า 130 mg/dL</b><br />
        <graph-ldl></graph-ldl>
        <p class="ion-padding">
            LDL-C ทำหน้าที่ในการนำ Cholesterol ไปยังส่วนต่างๆของร่างกาย ถ้ามีมากเกินไปก็จะเก็บไว้ในผนังหลอดเลือด โดยเฉพาะถ้าอยู่ที่หลอดเลือดหัวใจก็จะทำให้เกิด
            เป็นโรคหลอดเลือดหัวใจตีบตันได้
        </p>

        <p class="ion-padding">
        <b>ข้อควรปฏิบัติเพื่อสุขภาพที่ดี</b><br />
        1. หลีกเลี่ยงอาหารที่มี Cholesterol สูงเช่น เนื้อสัตว์ติดมัน อาหารทอด และควรรับประทานผลไม้ที่ไม่หวานมาก<br />
        2. งดสูบบุหรี่<br />
        3. ควบคุมความดันโลหิต ลดความเครียดหรืออารมณ์รุนแรง<br />
        4. ลดอาหารที่มีน้ำตาลสูง<br />
        5. ลดน้ำหนัก<br />
        6. ออกกำลังกายสม่ำเสมอ<br />
        </p>
        <ion-back-button defaultHref="/health/graph" text="Back" :icon="chevronBackOutline"></ion-back-button>
    </base-layout>
</template>
<script>
import GraphCho from '../Health/GraphCHO.vue'
import GraphTg from '../Health/GraphTG.vue'
import GraphHdl from '../Health/GraphHDL.vue'
import GraphLdl from '../Health/GraphLDL.vue'
import { chevronBackOutline } from 'ionicons/icons';
import {IonBackButton} from '@ionic/vue'
export default {
  components: { 
      GraphCho,
      GraphTg,
      GraphHdl,
      GraphLdl,
      IonBackButton,
   },
    setup(){
       return{
           chevronBackOutline
       }
   }
  
}
</script>