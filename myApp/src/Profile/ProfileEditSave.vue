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
                <ion-label>
                    Weight:
                </ion-label>
                  <ion-input placeholder="Enter Input" slot="end"></ion-input>
            </ion-item>
             <ion-item>
                <ion-label>
                    Height:
                </ion-label>
                  <ion-input placeholder="Enter Input" slot="end"></ion-input>
            </ion-item>

            <ion-item>
                <ion-label>Exercise</ion-label>
                    <ion-select :interface-options="customPopoverOptions" interface="popover" placeholder="Select One">
                        <ion-select-option value="brown">No</ion-select-option>
                        <ion-select-option value="blonde">1 day/week</ion-select-option>
                        <ion-select-option value="blonde">2-3 day/week</ion-select-option>
                        <ion-select-option value="blonde">4-7 day/week</ion-select-option>
                </ion-select>
            </ion-item>

            <ion-item>
                <ion-label>Congenital disease</ion-label>
                <ion-list>
                    <ion-item>
                        <ion-label>diabetes</ion-label>
                        <ion-checkbox color="primary"></ion-checkbox>
                    </ion-item>
                    <ion-item>
                        <ion-label>Obesity</ion-label>
                        <ion-checkbox color="primary"></ion-checkbox>
                    </ion-item>
                    <ion-item>
                        <ion-label>Hypertension</ion-label>
                        <ion-checkbox color="primary"></ion-checkbox>
                    </ion-item>
                </ion-list>
                
            </ion-item>
        </ion-list>
     
        <ion-button type="submit" expand="block">Save</ion-button>
    </form>
</template>
<script>

import {IonList,IonItem,IonLabel,IonInput,IonButton,IonDatetime,IonSelect,IonSelectOption,IonCheckbox} from '@ionic/vue';
export default {
     components:{
        IonList,
        IonItem,
        IonLabel,
        IonInput,
        IonDatetime,
        IonSelect,
        IonSelectOption,
        IonButton,
        IonCheckbox
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