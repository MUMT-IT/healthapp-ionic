<template>
    <base-layout>
        <b>BUN</b><br />
        <b>ค่าปกติ 7.0 - 20.0</b><br />
        <graph-result></graph-result>
        <graph-cre></graph-cre>
        <p>
            สมรรถภาพของไต
            Creatinine เป็นสารที่เกิดขึ้นในร่างกายตลอดเวลา ซึ่งไตจะทำหน้าที่ในการขับถ่ายสารเหล่านี้ออกจากร่างกาย ทำให้มีการสะสมอยู่ในเลือดน้อย เพราะฉะนั้น
            ถ้าตรวจพบระดับของ BUN และ Creatinie สูงขึ้นกว่าระดับปกติ แสดงว่าการทำงานของไตเริ่มมีปัญหา
        </p>
        <b>ข้อควรปฏิบัติเพื่อสุขภาพที่ดี</b><br />
        <p>
        1. ดื่มน้ำให้เพียงพอ<br />
        2. ลดอาหารที่เค็มจัด<br />
        3. งดสูบบุหรี่และงดดื่มสุรา<br />
        4. ระมัดระวังในการใช้ยา<br />
        5. โรคเบาหวานที่ควบคุมไม่ไดีทำให้ไตเสื่อม<br />
        6. ตรวจสุขภาพเป็นประจำ
        </p>
    </base-layout>
</template>
<script>
import GraphResult from '../Health/GraphBUN.vue'
import GraphCre from '../Health/GraphCRE.vue'

export default {
  components: { 
      GraphResult,
      GraphCre,
   },
  
}
</script>