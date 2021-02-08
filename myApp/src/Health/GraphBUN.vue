<template>
     <ion-card>
            <canvas id="graphbun"></canvas>
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
        var ctx = document.getElementById('graphbun')
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
                    label: '20.0',
                    fill: 1,
                    hidden: true,
                    backgroundColor: '#A8EE84',
					borderColor: '#59EE0D',
                    data: [20,20,20],
                },{
                    label: '7.0',
                    fill: 1,
                    hidden: true,
                    backgroundColor: '#A8EE84',
					borderColor: '#59EE0D',
                    data: [7,7,7],
                }
                ], 
            },
        }
        )
        console.log(bar)
    },
    data(){
        return{
            TestName: "BUN",
            labels:['21/1/21','22/2/21','23/1/21'],
            LabData:[18,13.4,15.0]
        }
    }
}
</script>