<template>
    <base-layout>
        <h4>Booking ตรวจสุขภาพ</h4>
        <ion-list>
            <ion-item>
                <ion-label>เลือกสถานที่</ion-label>
                <ion-select interface="popover" v-model="Location">
                    <ion-select-option value="Siriraj">ศิริราช</ion-select-option>
                </ion-select>
            </ion-item>

            <ion-item><ion-label>เลือกวันจอง</ion-label></ion-item>
            <ion-item>
                <ion-label>ปี</ion-label>
                <ion-select  v-model="cmsYear">
                    <ion-select-option value="2021">2021</ion-select-option>
                    <ion-select-option value="2022">2022</ion-select-option>
                </ion-select>
            </ion-item>

            <ion-item>
                <ion-label>เดือน</ion-label>
                <ion-select  v-model="cmsMonth">
                    <ion-select-option value="1">มกราคม</ion-select-option>
                    <ion-select-option value="2">กุมภาพันธ์</ion-select-option>
                    <ion-select-option value="3">มีนาคม</ion-select-option>
                    <ion-select-option value="4">เมษายน</ion-select-option>
                    <ion-select-option value="5">พฤษภาคม</ion-select-option>
                    <ion-select-option value="6">มิถุนายน</ion-select-option>
                    <ion-select-option value="7">กรกฎาคม</ion-select-option>
                    <ion-select-option value="8">สิงหาคม</ion-select-option>
                    <ion-select-option value="9">กันยายน</ion-select-option>
                    <ion-select-option value="10">ตุลาคม</ion-select-option>
                    <ion-select-option value="11">พฤศจิกายน</ion-select-option>
                    <ion-select-option value="12">ธันวาคม</ion-select-option>
                </ion-select>
            </ion-item>

            <ion-item>
                <ion-label>วันที่จอง</ion-label>
                 <ion-select  v-model="cmsDay" :ionChange="showStatus(cmsDay)">
                    <ion-select-option value="5">5</ion-select-option>
                    <ion-select-option value="12">12</ion-select-option>
                    <ion-select-option value="25">25</ion-select-option>
                </ion-select>
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
                <ion-label slot="end" color="success">{{ sStatus }}</ion-label>
            </ion-item>

            <ion-item>
                <ion-label>ให้บริการ</ion-label>
                <ion-label slot="end">{{ sBookTime }}</ion-label>
            </ion-item>

            <ion-item>
                <ion-label>สถานที่</ion-label>
                <ion-label slot="end">Google map</ion-label>
            </ion-item>

            <ion-item>
                <ion-label position="stacked">ชื่อ-นามสกุล</ion-label>
                <ion-input placeholder="placeholder"></ion-input>
            </ion-item>
            <ion-item>
                <ion-label position="stacked">เบอร์มือถือ</ion-label>
                <ion-input placeholder="placeholder"></ion-input>
            </ion-item>
            <ion-item>
                <ion-label position="stacked">E-mail</ion-label>
                <ion-input placeholder="placeholder"></ion-input>
            </ion-item>
        </ion-list>
        <ion-button expand="block" href="booking/booklist">Confirm booking</ion-button>
    </base-layout>
</template>
<script>
import {IonList,IonItem,IonThumbnail,IonSelect} from '@ionic/vue'
export default {
    components:{
        IonList,
        IonItem,
        IonThumbnail,
        IonSelect
    },
    data(){
        return{
            cmsYear: '2021',
            cmsMonth: '',
            cmsDay: '',
            sStatus: '',
            sBookTime: '',
        }
    },
    methods:{
        showStatus(a){
            if(a !== ''){
                this.sStatus = 'Open';
                this.sBookTime = '6.00-12.00 น.'
            }
        }
    }
}
</script>