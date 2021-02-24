<template>
    <base-layout>
        <h3>แก้ไข-ยกเลิกงานบริการ</h3>
        <ion-list>
            <ion-item>
                <ion-label>บริการ</ion-label>
                <ion-label>ตรวจสุขภาพ</ion-label>
            </ion-item>
            <ion-item>
                <ion-label>
                <ion-thumbnail slot="start">
                    <img src="../images/siriraj.jpg">
                </ion-thumbnail>
                </ion-label>
                <ion-label>ศิริราช</ion-label>
            </ion-item>
            <ion-item>
                <ion-label>เวลา</ion-label>
                <ion-label>6.00-12.00 น.</ion-label>
            </ion-item>
            <ion-item>
                <ion-label>สถานะ</ion-label>
                <ion-label><ion-text color="warning">รอยืนยัน</ion-text></ion-label>
            </ion-item>
        </ion-list>
        <ion-grid>
            <ion-row>
                <ion-col>
                    <ion-button expand="block">บันทึก</ion-button>
                </ion-col>
                <ion-col>
                     <ion-button color="danger" expand="block" @click="presentAlert">ยกเลิกการจอง</ion-button>
                </ion-col>
            </ion-row>
        </ion-grid>
    </base-layout>
</template>
<script>
import {IonList,IonItem,IonLabel,IonButton,IonGrid,IonRow,IonCol,alertController,IonText} from '@ionic/vue'
export default {
    components:{
        IonList,
        IonItem,
        IonLabel,
        IonButton,
        IonGrid,
        IonRow,
        IonCol,
        IonText

    },
    data(){
        return{
            Fullname: 'xxxxxxx',
            Tel: '999999999',
            Email: 'changesak@gmail.com'
        }
    },
    methods:{
        presentAlert() {
      return alertController
        .create({
          header: 'ยกเลิกการจอง',
          subHeader: 'ต้องการยกเลิกการจอง',
          buttons: ['Ok','Cancel'],
        }).then(a => a.present())
    },
    }
}
</script>