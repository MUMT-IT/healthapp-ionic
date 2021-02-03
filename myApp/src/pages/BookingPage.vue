<template>
    <base-layout>
        <ion-list>
            <ion-list-header><h2>Select Services</h2></ion-list-header>
            <ion-item router-link="/booking/cms">
                <ion-thumbnail slot="start">
                    <img src="">
                </ion-thumbnail>
                <ion-label>ตรวจสุขภาพ</ion-label>
            </ion-item>

            <ion-item>
                <ion-thumbnail slot="start">
                    <img src="">
                </ion-thumbnail>
                <ion-label>Wellness</ion-label>
            </ion-item>

            <ion-item>
                <ion-thumbnail slot="start">
                    <img src="">
                </ion-thumbnail>
                <ion-label>สปสช</ion-label>
            </ion-item>

        </ion-list>
    </base-layout>
</template>
<script>
import {IonList,IonItem,IonListHeader,IonThumbnail,IonLabel} from '@ionic/vue'
export default {
    components:{
        IonList,
        IonItem,
        IonListHeader,
        IonThumbnail,
        IonLabel
    }
}
</script>