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
                    backgroundColor: '#ff1a1a',
					borderColor: '#E4EE0D',
                    data:(this.LabData),
                },{
                    label: '22.9',
                    fill: 1,
                    hidden: true,
                    backgroundColor: '#A8EE84',
					borderColor: '#59EE0D',
                    data: [22.9,22.9,22.9],
                },{
                    label: '18.5',
                    fill: 1,
                    hidden: true,
                    backgroundColor: '#A8EE84',
					borderColor: '#59EE0D',
                    data: [18.5,18.5,18.5],
                }
                ], 
            },
        }
        )
        console.log(bar)
    },
    data(){
        return{
            TestName: "BMI",
            labels:['21/1/2021','22/2/2021','23/1/2012'],
            LabData:[21.9,23.4,21.5]
        }
    }
}
</script>