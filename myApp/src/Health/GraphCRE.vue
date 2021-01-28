<template>
        <ion-card>
            <canvas id="graphcre"></canvas>
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
        var ctx = document.getElementById('graphcre')
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
                    label: this.RefMax[0],
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
            TestName: "CRE",
            labels:['21/1/2021','22/2/2021','23/1/2012'],
            LabData:[0.97,0.99,0.88],
            gender:'male',
        }
    },
    computed:{
        RefMin(){
            var RefMinlst = [];
            var i = 0;
            if(this.gender == 'male'){
                for(i=0; i < this.LabData.length ; i++){
                    RefMinlst.push(0.67)
                }
            }else if(this.gender == 'female'){
                for(i=0; i < this.LabData.length ; i++){
                    RefMinlst.push(0.51)
                }
            }
            return RefMinlst
        },
        RefMax(){
            var RefMaxlst = [];
            var i = 0;
            if(this.gender == 'male'){
                for(i=0; i < this.LabData.length ; i++){
                    RefMaxlst.push(1.17)
                }
            }else if(this.gender == 'female'){
                for(i=0; i < this.LabData.length ; i++){
                    RefMaxlst.push(0.95)
                }
            }
            return RefMaxlst
        }
    }
}
</script>