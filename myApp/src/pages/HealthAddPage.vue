<template>
    <base-layout>
    <health-menu></health-menu>
        <form @submit.prevent="submitForm">
            <ion-list>
                <ion-item>
                    <ion-label>Date</ion-label>
                    <ion-datetime value="1990-02-19" placeholder="Select Date" picker-format="DD/MM/YYYY" slot="end" v-model="dateresult"></ion-datetime>
                </ion-item>

                <ion-item>
                    <ion-label>Weight</ion-label>
                    <ion-input slot="end"  type="text" v-model="weight"></ion-input>
                </ion-item>

                <ion-item>
                    <ion-label>Height</ion-label>
                    <ion-input slot="end" type="text" v-model="height"></ion-input>
                </ion-item>

                <ion-item>
                    <ion-label>Heartrate</ion-label>
                    <ion-input slot="end" type="text" v-model="heartrate"></ion-input>
                </ion-item>

                <ion-item>
                    <ion-label>Systolic</ion-label>
                    <ion-input slot="end" type="number" v-model="systolic1"></ion-input>
                    <ion-label slot="end">/</ion-label>
                    <ion-input slot="end" type="number" v-model="systolic2"></ion-input>
                </ion-item>
            </ion-list>
            <ion-button type="submit" expand="block">Save</ion-button>
        </form>
        <p></p>
        <h2>Result</h2>
        <ion-list>
            <ion-item>
                <ion-select interface="popover" v-model="Test">
                    <ion-select-option value="GLU">Glucorse</ion-select-option>
                    <ion-select-option value="CHO">Chol</ion-select-option>
                    <ion-select-option value="TG">TG</ion-select-option>
                    <ion-select-option value="HDL">HDL</ion-select-option>
                    <ion-select-option value="LDL">LDL</ion-select-option>
                </ion-select>
                <ion-input type="number" text-right v-model="Result"></ion-input>
                <ion-buttons slot="end">
                    <ion-button v-on:click="AddTest"><ion-icon :icon="saveOutline" /></ion-button>
                </ion-buttons>
            </ion-item>
        </ion-list>

        <ion-list>
            <ion-item v-for="(Titem) in TestData" :key="Titem.id">
                <label slot="start">{{ Titem.Test }}</label>
                <label>{{ Titem.Result }}</label>
                <ion-buttons slot="end">
                    <ion-button v-on:click="deleEvent(Titem.id)"><ion-icon :icon="trashOutline"/></ion-button>
                </ion-buttons>
            </ion-item>
        </ion-list>
    </base-layout>
</template>
<script>
import { saveOutline,trashOutline } from 'ionicons/icons';
import HealthMenu from '../Health/HealthMenu.vue';
import {IonList,IonItem,IonDatetime,IonInput,IonButton,IonSelect,IonSelectOption,IonLabel,IonButtons} from '@ionic/vue';
export default {
  components: { 
      HealthMenu,
      IonList,
      IonItem,
      IonDatetime,
      IonInput,
      IonButton,
      IonSelect,
      IonSelectOption,
      IonLabel,
      IonButtons,
   },
   data(){
       return{
           count: 0,
           Test: "",
           Result: "",
           weight: "",
           height: "",
           heartrate: "",
           systolic: "",
           systolic1: "",
           systolic2: "",
           TestData:[]
       }
   },
    methods:{
        submitForm(){
            this.systolic = this.systolic1 + "/" + this.systolic2;
            console.log(this.systolic);
        },
        AddTest(){
             const newTestData = {
                 id: this.count += 1,
                 Test: this.Test,
                 Result: this.Result,
                 DateReult: this.dateresult
             };
             this.TestData.unshift(newTestData);
             this.Test = "",
             this.Result = ""
        },
        deleEvent(id){
        this.TestData = this.TestData.filter((e)=>e.id !== id )
        }
    },
    setup(){
        return{
            saveOutline,
            trashOutline
        }
    },
    
}
</script>