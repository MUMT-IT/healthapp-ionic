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
                    label:this.RefMax[0],
                    fill: 1,
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
            TestName: "Uric acid",
            labels:['21/1/2021','22/2/2021','23/1/2012','24/1/2012','25/1/2012'],
            LabData:[5.93,5.33,5.03,5.10,5.02]
        }
    },
    computed:{
        RefMin(){
            var RefMinlst = [];
            var i = 0;
            for(i=0; i < this.LabData.length ; i++){
                RefMinlst.push(2.4)
            }
            return RefMinlst
        },
        RefMax(){
           var RefMaxlst = [];
            var i = 0;
            for(i=0; i < this.LabData.length ; i++){
                RefMaxlst.push(7.0)
            }
            return RefMaxlst
        }
    }
}
</script>