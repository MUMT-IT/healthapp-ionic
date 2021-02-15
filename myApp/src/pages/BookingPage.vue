<template>
    <base-layout>
    <booking-menu></booking-menu>
        <ion-list>
            <ion-list-header><h3>บริการต่างๆ</h3></ion-list-header>
            <ion-item>
                <ion-thumbnail slot="start">
                    <img src="../images/cms.png">
                </ion-thumbnail>
                <ion-grid>
                    <ion-row>
                        <ion-col>
                             <ion-label>ตรวจสุขภาพ</ion-label>
                        </ion-col>
                    </ion-row>
                    <ion-row>
                        <ion-col>
                            <ion-button color="secondary" href="booking/cmsdetail">รายละเอียด</ion-button>
                            <ion-button color="tertiary" href="/booking/cms">จองวันบริการ</ion-button>
                        </ion-col>
                    </ion-row>
                </ion-grid>
            </ion-item>

            <ion-item>
                <ion-thumbnail slot="start">
                    <img src="../images/wellness.png">
                </ion-thumbnail>
                <ion-grid>
                    <ion-row>
                        <ion-col>
                            <ion-label>Wellness</ion-label>  
                        </ion-col>
                    </ion-row>
                    <ion-row>
                        <ion-col>
                            <ion-button color="secondary" href="/home">รายละเอียด</ion-button>
                            <ion-button color="tertiary" href="/booking/cms">จองวันบริการ</ion-button>
                        </ion-col>
                    </ion-row>
                </ion-grid>
            </ion-item>
        </ion-list>
        
    </base-layout>
</template>
<script>
import BookingMenu from '../Booking/ฺฺBookingMenu.vue'
import {IonList,IonItem,IonListHeader,IonThumbnail,IonLabel,IonButton,IonGrid,IonRow,IonCol} from '@ionic/vue'
export default {
    components:{
        IonList,
        IonItem,
        IonListHeader,
        IonThumbnail,
        IonLabel,
        BookingMenu,
        IonButton,
        IonGrid,
        IonRow,
        IonCol
    }
}
</script>