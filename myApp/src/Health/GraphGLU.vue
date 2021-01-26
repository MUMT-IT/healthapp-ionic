<template>
     <ion-card>
            <canvas id="graph"></canvas>
        </ion-card>
</template>
<script>
import { IonCard } from '@ionic/vue'
import Chart from 'chart.js'
export default {
  components: { 
      IonCard,
   },
    mounted()
    {
        var ctx = document.getElementById('graph')
        var bar = new Chart(ctx,{
            type: 'line',
            data: {
                labels:(this.labels),
                datasets: [{
                    label: this.TestName,
                    data:(this.LabData),
                    borderColor: '#6E7EF5',
                    fill: false
                }]
            }
        }
        )
        console.log(bar)
    },
    data(){
        return{
            TestName: "Glucose",
            labels:['21/1/2021','22/2/2021','23/1/2012'],
            LabData:[100,130,132]
        }
    }
}
</script>