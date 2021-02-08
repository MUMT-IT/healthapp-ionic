<template>
    <base-layout>
        <h3>รายการตรวจต่างๆ</h3>
        <ion-grid>
            <ion-row>
                <ion-col size="9">
                    <ion-text color="primary">Glucose</ion-text> ระดับน้ำตาลในเลือด
                </ion-col>
                <ion-col>
                    40
                </ion-col>
                <ion-col>
                    บาท
                </ion-col>
            </ion-row>

            <ion-row>
                <ion-col size="9">
                    <ion-text color="primary">BUN,Creatinine</ion-text> ดูสมรรถภาพไต
                </ion-col>
                <ion-col>
                    100
                </ion-col>
                <ion-col>
                    บาท
                </ion-col>
            </ion-row>

            <ion-row>
                <ion-col size="9">
                   <ion-text color="primary">Cholesterol,Triglyceride</ion-text> ดูไขมันเลือด
                </ion-col>
                <ion-col>
                    120
                </ion-col>
                <ion-col>
                    บาท
                </ion-col>
            </ion-row>

            <ion-row>
                <ion-col size="9">
                    <ion-text color="primary">Uric acid</ion-text> ระดับกรดยูริค/ภาวะเสี่ยงโรคเก๊าต์
                </ion-col>
                <ion-col>
                    60
                </ion-col>
                <ion-col>
                    บาท
                </ion-col>
            </ion-row>

            <ion-row>
                <ion-col size="9">
                   <ion-text color="primary">AST,ALT,ALP</ion-text> ดูสมรรถภาพตับ
                </ion-col>
                <ion-col>
                    150
                </ion-col>
                <ion-col>
                    บาท
                </ion-col>
            </ion-row>

            <ion-row>
                <ion-col size="9">
                    <ion-text color="primary">CBC</ion-text> ดูจำนวนเม็ดเลือดขาว เม็ดเลือดแดงและภาวะซีด
                </ion-col>
                <ion-col>
                    90
                </ion-col>
                <ion-col>
                    บาท
                </ion-col>
            </ion-row>

            <ion-row>
                <ion-col size="9">
                   <ion-text color="primary">Urine</ion-text> ดูระบบทางเดินปัสสาวะ
                </ion-col>
                <ion-col>
                    50
                </ion-col>
                <ion-col>
                    บาท
                </ion-col>
            </ion-row>

            <ion-row>
                <ion-col size="9">
                    <ion-text color="primary">อุจจาระ</ion-text>ดูไข่พยาธิและ Occult Blood
                </ion-col>
                <ion-col>
                    70
                </ion-col>
                <ion-col>
                    บาท
                </ion-col>
            </ion-row>
        </ion-grid>
        <ion-back-button defaultHref="/booking/page" text="Back" :icon="chevronBackOutline"></ion-back-button>
    </base-layout>
</template>
<script>
import { chevronBackOutline } from 'ionicons/icons';
import {IonCol, IonGrid, IonRow,IonText,IonBackButton} from '@ionic/vue'
export default {
    components:{
        IonCol, 
        IonGrid, 
        IonRow,
        IonText,
        IonBackButton
    },
     setup(){
       return{
           chevronBackOutline
       }
   }
}
</script>