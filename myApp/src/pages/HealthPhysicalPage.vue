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
                    <ion-icon slot="start" :icon="speedometerOutline" />
                    <label>Weight</label>
                    <label slot="end">{{ LoadData.weight }}</label>  
                </ion-item>

                <ion-item>
                    <ion-icon slot="start" :icon="manOutline" />
                    <label>Height</label>
                    <label slot="end">{{LoadData.height}}</label>  
                </ion-item>

                <ion-item>
                    <ion-icon slot="start" :icon="pulseOutline" />
                    <label>HeartRate</label>
                    <label slot="end">{{ LoadData.heartrate}}</label>  
                </ion-item>

                <ion-item>
                    <ion-icon slot="start" :icon="waterOutline" />
                    <label>Systolic</label>
                    <label slot="end">{{ LoadData.systolic }}</label>
                      
                </ion-item>
            </ion-list>
            
            <ion-item>
                <ion-buttons slot="start">
                    <ion-button v-on:click="counter -= 1">
                        <ion-icon size="large" :icon="caretBackOutline" />
                    </ion-button>
                </ion-buttons>
                <ion-buttons slot="end">
                    <ion-button v-on:click="counter += 1">
                        <ion-icon size="large" :icon="caretForwardOutline" />
                    </ion-button>
                </ion-buttons>    
            </ion-item>
        </div>
    </base-layout>
</template>
<script>
import { caretForwardOutline ,caretBackOutline,speedometerOutline,manOutline,pulseOutline,waterOutline } from 'ionicons/icons';
import {IonList,IonItem,IonButton,IonIcon,IonButtons} from '@ionic/vue'
import HealthMenu from '../Health/HealthMenu.vue'
export default {
  components: {
    IonList,
    IonItem,
    IonButton,
    IonIcon,
    IonButtons,
    HealthMenu
  },
  data(){
      return{
          counter: 1,
          bodylst:[
              {
                  id: "1",
                  weight: "80",
                  height: "160",
                  heartrate: "70",
                  systolic: "100/60"
              },
              {
                  id:"2",
                  weight:"81",
                  height:"161",
                  heartrate:"76",
                  systolic: "102/70"
              },
              {
                  id:"3",
                  weight:"82",
                  height:"162",
                  heartrate:"80",
                  systolic: "130/80"
              }
          ]
      }
  },
      setup(){
      return{
        caretForwardOutline,
        caretBackOutline,
        speedometerOutline,
        manOutline,
        pulseOutline,
        waterOutline
      }
    },
  computed:{
      LoadData(){
          return this.bodylst.find(bodylst => bodylst.id === this.counter.toString());
      }
  }
}
</script>