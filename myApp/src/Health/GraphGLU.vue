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
                    fill: false,
                    backgroundColor: '#E4EE0D',
					borderColor: '#E4EE0D',
                    data:(this.LabData),
                },{
                    label: '100',
                    fill: 1,
                    hidden: true,
                    backgroundColor: '#A8EE84',
					borderColor: '#59EE0D',
                    data: [100,100,100,100,100],
                },{
                    label: '70',
                    fill: 1,
                    hidden: true,
                    backgroundColor: '#A8EE84',
					borderColor: '#59EE0D',
                    data: [70,70,70,70,70],
                }
                ], 
            },
        }
        )
        console.log(bar)
    },
    data(){
        return{
            TestName: "Glucose",
            labels:['21/1/21','22/2/21','23/1/21','24/1/21','25/1/21'],
            LabData:[89,90,92,110,120]
        }
    }
}
</script>