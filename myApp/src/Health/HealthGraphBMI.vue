<template>
    <base-layout>
        <health-menu></health-menu>
        <h6>BMI</h6>
        <h7>ค่าปกติ 18.5 - 22.9</h7>
        <graph-result></graph-result>
        <p>
            - BMI หรือ ค่าดัชนีมวลกาย ใช้ความสัมพันธ์ของน้ำหนักและส่วนสูงมาเป็นตัวชี้วัดรูปร่าง ในผู้ป่วยเบาหวานหาก BMI สูงมากเกินจะทำให้การควบคุมน้ำตาลไม่ได้ผล
        </p>
    </base-layout>
</template>
<script>
import GraphResult from '../Health/GraphBMI.vue'
import HealthMenu from '../Health/HealthMenu.vue'
export default {
  components: { 
      HealthMenu,
      GraphResult,
   },
  
}
</script>