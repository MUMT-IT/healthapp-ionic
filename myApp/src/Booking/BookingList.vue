<template>
    <base-layout>
        <booking-menu></booking-menu>
        <h4>รายการที่จอง</h4>
        <ion-list>
            <ion-item router-link="/booking/edit">
                <ion-thumbnail slot="start">
                        <img src="../images/cms.png">
                </ion-thumbnail>
                <ion-label>
                    <b>ตรวจสุขภาพ</b>
                    <p>สถานที่ศิริราช เวลา 6.00 - 12.00 น.</p>
                    <p>วันที่ 12/1/2021 <ion-text color="warning">รอยืนยัน</ion-text></p>
                </ion-label>
            </ion-item>

            <ion-item>
                <ion-thumbnail slot="start">
                        <img src="../images/wellness.png">
                </ion-thumbnail>
                <ion-label>
                    <b>wellness</b>
                    <p>สถานที่ศิริราช เวลา 6.00 - 14.00 น.</p>
                    <p>วันที่ 12/1/2021 <ion-text color="success">ยืนยันแล้ว</ion-text></p>
                </ion-label>
            </ion-item>
        </ion-list>
    </base-layout>
</template>
<script>
import BookingMenu from '../Booking/ฺฺBookingMenu.vue'
import {IonList,IonItem,IonThumbnail,IonLabel,IonText} from '@ionic/vue'
export default {
    components:{
        IonList,
        IonItem,
        IonThumbnail,
        IonLabel,
        BookingMenu,
        IonText
    }
}
</script>