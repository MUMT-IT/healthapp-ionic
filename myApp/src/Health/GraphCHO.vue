<template>
     <ion-card>
            <canvas id="graphCHO"></canvas>
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
        var ctx = document.getElementById('graphCHO')
        var bar = new Chart(ctx,{
            type: 'line',
              data: {
                labels:(this.labels),
                datasets: [{
                    label: this.TestName,
                    fill: false,
					borderColor: '#FF8B00',
                    data:(this.LabData),
                },{
                    label:this.RefMax[0],
                    fill: true,
                    hidden: true,
                    backgroundColor: '#A8EE84',
					borderColor: '#59EE0D',
                    data:(this.RefMax),
                }
                ], 
            },
        }
        )
        console.log(bar)
    },
    data(){
        return{
            TestName: "Cholesterol",
            labels:['21/1/21','22/2/21','23/1/21','24/1/21','25/1/21'],
            LabData:[216,179,177,189,204]
        }
    },
    computed:{
        RefMax(){
           var RefMaxlst = [];
            var i = 0;
            for(i=0; i < this.LabData.length ; i++){
                RefMaxlst.push(200)
            }
            return RefMaxlst
        }
    }
}
</script>