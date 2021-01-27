<template>
    <base-layout>
        <health-menu></health-menu>
        <h6>Glucose</h6>
        <h7>ค่าปกติ 70 - 100 mg/dL</h7>
        <graph-result></graph-result>
        <p>
            - Glucose คือ ค่าน้ำตาลในเลือด เป็นแหล่งพลังงานแห่งแรกสำหรับเซลล์ของร่างกาย สำหรับผู้ป่วยโรคเบาหวานจะมีค่า Glucose มากกว่าเท่ากับ 126 และมีอาการผิดปกติเช่น ปัสสาวะบ่อยตอนกลางคืน
        </p>
    </base-layout>
</template>
<script>
import GraphResult from '../Health/GraphGLU.vue'
import HealthMenu from '../Health/HealthMenu.vue'
export default {
  components: { 
      HealthMenu,
      GraphResult,
   },
  
}
</script>