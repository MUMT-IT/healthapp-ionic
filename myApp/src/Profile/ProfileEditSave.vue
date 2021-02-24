<template>
    <form class="ion-padding" @submit.prevent="submitForm">
         <ion-list>
            <ion-item>
                <ion-label>
                    Name:
                </ion-label>
                  <ion-input  type="text" required v-model="fullname"></ion-input>
            </ion-item>

            <ion-item>
                <ion-label>Gender</ion-label>
                 <ion-select :interface-options="customPopoverOptions" interface="popover" placeholder="Select One">
                    <ion-select-option value="brown">Male</ion-select-option>
                    <ion-select-option value="blonde">Female</ion-select-option>
                </ion-select>
            </ion-item>
        
            <ion-item>
                <ion-label>Birthdate</ion-label>
                <ion-datetime value="1990-02-19" placeholder="Select Date" picker-format="DD/MM/YYYY" slot="end"></ion-datetime>
            </ion-item>

            <ion-item>
                <ion-label>ชื่อ</ion-label>
                <ion-input v-model="Fullname"></ion-input>
            </ion-item>

            <ion-item>
                <ion-label>นามสกุล</ion-label>
                <ion-input v-model="Fullname"></ion-input>
            </ion-item>

            <ion-item>
                <ion-label>เบอร์มือถือ</ion-label>
                <ion-input v-model="Tel"></ion-input>
            </ion-item>

            <ion-item>
                <ion-label>E-mail</ion-label>
                <ion-input type="email" v-model="Email"></ion-input>
            </ion-item>

        </ion-list>
     
        <ion-button type="submit" expand="block">Save</ion-button>
    </form>
</template>
<script>

import {IonList,IonItem,IonLabel,IonInput,IonButton,IonDatetime} from '@ionic/vue';
export default {
     components:{
        IonList,
        IonItem,
        IonLabel,
        IonInput,
        IonDatetime,
        IonButton
    },
    data(){
        return{
            fullname:'',
        };
    },
       methods:{
        submitForm(){
            this.$router.push({path:'/profile', query: { fullname: this.fullname,dis: 1224 }})
        }
    }
}
</script>