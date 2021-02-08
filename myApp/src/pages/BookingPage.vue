<template>
    <base-layout>
    <booking-menu></booking-menu>
        <ion-list>
            <ion-list-header><h2>Select Services</h2></ion-list-header>
            <ion-item>
                <ion-thumbnail slot="start">
                    <img src="../images/cms.png">
                </ion-thumbnail>
                <ion-label>ตรวจสุขภาพ</ion-label>
                <ion-button color="secondary" href="booking/cmsdetail">รายละเอียด</ion-button>
                <ion-button color="tertiary" href="/booking/cms">จองวันบริการ</ion-button>
            </ion-item>

            <ion-item>
                <ion-thumbnail slot="start">
                    <img src="../images/wellness.png">
                </ion-thumbnail>
                <ion-label>Wellness</ion-label>
                <ion-button color="secondary" href="/home">รายละเอียด</ion-button>
                <ion-button color="tertiary" href="/booking/cms">จองวันบริการ</ion-button>
            </ion-item>

        </ion-list>
        
    </base-layout>
</template>
<script>
import BookingMenu from '../Booking/ฺฺBookingMenu.vue'
import {IonList,IonItem,IonListHeader,IonThumbnail,IonLabel,IonButton} from '@ionic/vue'
export default {
    components:{
        IonList,
        IonItem,
        IonListHeader,
        IonThumbnail,
        IonLabel,
        BookingMenu,
        IonButton
    }
}
</script>