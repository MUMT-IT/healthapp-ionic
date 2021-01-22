<template>
    <base-layout>
    <health-menu></health-menu>
        <ion-list>
            <ion-item>
                <ion-button v-on:click="PreReult"><ion-icon :icon="caretBackOutline" /></ion-button>
                <ion-button slot="end" v-on:click="NextResult('002')"><ion-icon :icon="caretForwardOutline" /></ion-button>
            </ion-item>
            <ion-item>
                <label>{{ Lab[0].ServiceDate }}</label>
            </ion-item>
            <ion-item v-for="LabItem in Lablst" :key="LabItem.id">
                <ion-label slot="start">{{ LabItem.TestName }}</ion-label>
                <ion-label>{{ LabItem.TestResult }}</ion-label>
                <ion-label slot="end">{{ LabItem.Unite }}</ion-label>
            </ion-item>
        </ion-list>
    </base-layout>
</template>
<script>
import { caretForwardOutline ,caretBackOutline } from 'ionicons/icons';
import {IonList,IonItem,IonLabel,IonButton} from '@ionic/vue'
import HealthMenu from '../Health/HealthMenu.vue';
export default {
    components:{
        IonList,
        IonItem,
        IonLabel,
        IonButton,
        HealthMenu
    },
    data(){
        return{
            LabD: [],
            Lab:[
                {
                    id: "1",
                    LabNo: "001",
                    Tcode: "GLU",
                    TestName: "Glucose",
                    TestResult: "100",
                    Unite: "mg/dL",
                    ServiceDate: "2020-21-01"
                },
                {
                    id: "2",
                    LabNo: "001",
                    Tcode: "BUN",
                    TestName: "BUN",
                    TestResult: "10",
                    Unite: "mg/dL",
                    ServiceDate: "2020-21-01"
                },
                {
                    id: "3",
                    LabNo: "001",
                    Tcode: "Cre",
                    TestName: "Creatinine",
                    TestResult: "10",
                    Unite: "mg/dL",
                    ServiceDate: "2020-21-01"
                },
                {
                    id: "4",
                    LabNo: "001",
                    Tcode: "CHO",
                    TestName: "Cholesterol",
                    TestResult: "210",
                    Unite: "mg/dL",
                    ServiceDate: "2020-21-01"
                },
                {
                    id: "5",
                    LabNo: "001",
                    Tcode: "TG",
                    TestName: "Triglyceride",
                    TestResult: "130",
                    Unite: "mg/dL",
                    ServiceDate: "2020-21-01"
                },
                {
                    id: "6",
                    LabNo: "001",
                    Tcode: "HDL",
                    TestName: "HDL-C",
                    TestResult: "50",
                    Unite: "mg/dL",
                    ServiceDate: "2020-21-01"
                },
                {
                    id: "7",
                    LabNo: "001",
                    Tcode: "LDL",
                    TestName: "LDL",
                    TestResult: "150",
                    Unite: "mg/dL",
                    ServiceDate: "2020-21-01"
                },
                                {
                    id: "1",
                    LabNo: "002",
                    Tcode: "HDL",
                    TestName: "HDL-C",
                    TestResult: "50",
                    Unite: "mg/dL",
                    ServiceDate: "2020-22-01"
                },
                {
                    id: "2",
                    LabNo: "002",
                    Tcode: "LDL",
                    TestName: "LDL",
                    TestResult: "150",
                    Unite: "mg/dL",
                    ServiceDate: "2020-22-01"
                }
            ]
        };
    },
    methods:{
        NextResult(LabNo){
            this.LabD = this.Lab.filter((e)=>e.LabNo == LabNo )
        },
        PreReult(){
            this.LabD = this.Lab.filter((e)=>e.LabNo == '001' )
        }
    },
    computed:{
        Lablst(){
            if( this.LabD.length === 0){
                let LabA = this.Lab
                return  LabA.filter((e)=>e.LabNo == '001' )
            }else{
                return this.LabD
            }
        },
        
    },
    setup(){
        return{
            caretForwardOutline,
            caretBackOutline,
        }
    }
};
</script>