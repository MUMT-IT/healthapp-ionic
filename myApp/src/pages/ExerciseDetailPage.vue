<template>
    <base-layout page-title='Exercise Detail'>
        <ion-list>
            <ion-item>
                <ion-label>Activity</ion-label>
                <ion-label>{{ Act }}</ion-label>
            </ion-item>
             <ion-item>
                <ion-label>Intensity</ion-label>
                <ion-label>{{ Exlv }}</ion-label>
            </ion-item>
             <ion-item>
                <ion-label>Hour</ion-label>
                <ion-label>{{ ExHr }}</ion-label>
            </ion-item>
            <ion-item>
                <ion-label>Minute</ion-label>
                <ion-label>{{ ExMin }}</ion-label>
            </ion-item>
            <ion-item>
                <ion-label>Total Minute</ion-label>
                <ion-label>{{ testSum }}</ion-label>
            </ion-item>
        </ion-list>
    </base-layout>
</template>
<script>
import {IonLabel,IonList,IonItem} from '@ionic/vue'
export default {
  components: { 
      IonLabel,
      IonList,
      IonItem
    },
    data(){
        return{
            Act: this.$route.query.Activity,
            Exlv: this.$route.query.Exlv,
            ExHr: this.$route.query.ExHr,
            ExMin: this.$route.query.ExMin,
        }
    },
    computed:{
        testSum(){
            let sum = 0;
            let ExHr = this.$route.query.ExHr;
            let ExMin = this.$route.query.ExMin;
            sum = (parseFloat(ExHr)*60) + parseFloat(ExMin);
            return sum
        }
    },
};
</script>