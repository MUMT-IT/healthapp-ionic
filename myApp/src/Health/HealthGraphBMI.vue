<template>
    <base-layout>
        <health-menu></health-menu>
        <b>BMI</b><br />
        <b>ค่าปกติ 18.5 - 22.9</b><br />
        <graph-result></graph-result>
        <p>
            - BMI หรือ ค่าดัชนีมวลกาย ใช้ความสัมพันธ์ของน้ำหนักและส่วนสูงมาเป็นตัวชี้วัดรูปร่าง ในผู้ป่วยเบาหวานหาก BMI สูงมากเกินจะทำให้การควบคุมน้ำตาลไม่ได้ผล
        </p>
    </base-layout>
</template>
<style>
    div {text-align: center;}
</style>
<script>
import GraphResult from '../Health/GraphBMI.vue'

export default {
  components: { 

      GraphResult,
   },
  
}
</script>