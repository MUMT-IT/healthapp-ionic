<template>
    <base-layout>
        <health-menu></health-menu>
        <div class="ion-padding">
            <ion-list>
                <ion-item>
                    <label slot="start">Date</label>
                    <label slot="end">13/1/2021</label>  
                </ion-item>

                <ion-item>
                    <label slot="start">Weight</label>
                    <label slot="end">80</label>  
                </ion-item>

                <ion-item>
                    <label slot="start">Height</label>
                    <label slot="end">160</label>  
                </ion-item>

                <ion-item>
                    <label slot="start">BMI</label>
                    <label slot="end">60</label>  
                </ion-item>

                <ion-item>
                    <label slot="start">HeartRate</label>
                    <label slot="end">80</label>  
                </ion-item>

                <ion-item>
                    <label slot="start">Systolic</label>
                    <label slot="end">100/60</label>  
                </ion-item>
            </ion-list>
        </div>
    </base-layout>
</template>
<script>
import {IonList,IonItem} from '@ionic/vue'
import HealthMenu from '../Health/HealthMenu.vue'
export default {
  components: {
    IonList,
    IonItem,
    HealthMenu
  },
}
</script>