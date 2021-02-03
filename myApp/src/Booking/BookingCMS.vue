<template>
    <base-layout>
        <h2>Booking</h2>
        <ion-list>
            <ion-item>
                <ion-label>Select Location</ion-label>
                <ion-select interface="popover" v-model="Location">
                    <ion-select-option value="Siriraj">Siriraj</ion-select-option>
                    <ion-select-option value="Salaya">Salaya</ion-select-option>
                </ion-select>
            </ion-item>

            <ion-item>
                <ion-label>Booking Date</ion-label>
                <ion-datetime value="1990-02-19" placeholder="Select Date"  v-model="dateresult"></ion-datetime>
            </ion-item>
        </ion-list>
        
        <ion-list>
            <ion-item>
                <ion-thumbnail slot="start">
                    <img src="../images/siriraj.jpg">
                </ion-thumbnail>
                
            </ion-item>

            <ion-item>
                <ion-label>Status</ion-label>
                <ion-label slot="end" color="success">Open</ion-label>
            </ion-item>

            <ion-item>
                <ion-label>Service Time</ion-label>
                <ion-label slot="end">6.00 am -12.00 am</ion-label>
            </ion-item>

            <ion-item>
                <ion-label>Location</ion-label>
                <ion-label slot="end">Google map</ion-label>
            </ion-item>

        </ion-list>
        <ion-button expand="block">Confirm booking</ion-button>
    </base-layout>
</template>
<script>
import {IonDatetime,IonList,IonItem,IonThumbnail} from '@ionic/vue'
export default {
    components:{
        IonDatetime,
        IonList,
        IonItem,
        IonThumbnail
    }
}
</script>