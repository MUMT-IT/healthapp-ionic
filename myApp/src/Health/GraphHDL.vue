<template>
     <ion-card>
            <canvas id="graphHDL"></canvas>
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
        var ctx = document.getElementById('graphHDL')
        var bar = new Chart(ctx,{
            type: 'line',
              data: {
                labels:(this.labels),
                datasets: [{
                    label: this.TestName,
                    fill: false,
					borderColor: '#7100FF',
                    data:(this.LabData),
                },{
                    label:this.RefMax[0],
                    fill: 'end',
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
            TestName: "HDL-C",
            labels:['21/1/2021','22/2/2021','23/1/2012','24/1/2012','25/1/2012'],
            LabData:[66.5,64.4,59.2,60.3,61.8]
        }
    },
    computed:{
        RefMax(){
           var RefMaxlst = [];
            var i = 0;
            for(i=0; i < this.LabData.length ; i++){
                RefMaxlst.push(40)
            }
            return RefMaxlst
        }
    }
}
</script>