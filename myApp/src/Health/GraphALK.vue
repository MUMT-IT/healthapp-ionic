<template>
    <ion-card>
        <canvas id="graphALK"></canvas>
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
        var ctx = document.getElementById('graphALK')
        var bar = new Chart(ctx,{
            type: 'line',
              data: {
                labels:(this.labels),
                datasets: [{
                    label: this.TestName,
                    fill: false,
					borderColor: '#FF0049',
                    data:(this.LabData),
                },{
                    label:this.RefMax[0],
                    fill: true,
                    hidden: true,
                    backgroundColor: '#A8EE84',
					borderColor: '#59EE0D',
                    data:(this.RefMax),
                },{
                    label:this.RefMin[0],
                    fill: 1,
                    hidden: true,
                    backgroundColor: '#A8EE84',
					borderColor: '#59EE0D',
                    data:(this.RefMin),
                }
                ], 
            },
        }
        )
        console.log(bar)
    },
    data(){
        return{
            TestName: "ALK",
            labels:['21/1/21','22/2/21','23/1/21','24/1/21','25/1/21'],
            LabData:[66,64,53,55,58]
        }
    },
    computed:{
        RefMax(){
           var RefMaxlst = [];
            var i = 0;
            for(i=0; i < this.LabData.length ; i++){
                RefMaxlst.push(110)
            }
            return RefMaxlst
        },
        RefMin(){
            var RefMinlst = [];
            var i = 0;
            for(i=0; i < this.LabData.length ; i++){
                RefMinlst.push(30)
            }
            return RefMinlst
        }
    }
}
</script>