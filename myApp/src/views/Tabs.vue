<template>
  <ion-page>
    <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button auto-hide="false"></ion-menu-button>
        </ion-buttons>
        <ion-buttons slot="primary">
          <ion-button>
            <ion-icon slot="icon-only" ios="ellipsis-horizontal" md="ellipsis-vertical"></ion-icon>
          </ion-button>
        </ion-buttons>
        <ion-title>Social Health</ion-title>
    </ion-toolbar>
    <ion-menu side="start" menu-id="custom"  content-id="main">
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title>Start Menu</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-list>
        <ion-item>
            <ion-icon name="mail" slot="start"></ion-icon>
            <ion-label>Inbox</ion-label>
          </ion-item>
          <ion-item>
            <ion-icon name="paper-plane" slot="start"></ion-icon>
            <ion-label>Outbox</ion-label>
          </ion-item>
          <ion-item>
            <ion-icon name="heart" slot="start"></ion-icon>
            <ion-label>Favorites</ion-label>
          </ion-item>
          <ion-item>
            <ion-icon name="archive" slot="start"></ion-icon>
            <ion-label>Archived</ion-label>
          </ion-item>
          <ion-item>
            <ion-icon name="trash" slot="start"></ion-icon>
            <ion-label>Trash</ion-label>
          </ion-item>
          <ion-item>
            <ion-icon name="warning" slot="start"></ion-icon>
            <ion-label>Spam</ion-label>
          </ion-item>
      </ion-list>
    </ion-content>
  </ion-menu>

    <ion-tabs>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="Home" href="/tabs/Home">
          <ion-icon :icon="home" />
          <ion-label>Home</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="health" href="/tabs/Health">
          <ion-icon :icon="man" />
          <ion-label>สุขภาพ</ion-label>
        </ion-tab-button>
          
        <ion-tab-button tab="exercise" href="/tabs/exercise">
          <ion-icon :icon="barbell" />
          <ion-label>ออกกำลังกาย</ion-label>
        </ion-tab-button>
     
        <ion-tab-button tab="Food" href="/tabs/Food">
          <ion-icon :icon="fish" />
          <ion-label>อาหาร</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script lang="ts">
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage,IonHeader, IonToolbar, IonTitle,IonMenu,IonContent,IonList,IonItem,menuController } from '@ionic/vue';
import { barbell, fish, man,home } from 'ionicons/icons';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Tabs',
  components: { IonLabel, IonTabs, IonTabBar, IonTabButton, IonIcon, IonPage,IonHeader, IonToolbar, IonTitle,IonMenu,IonContent,IonList,IonItem },
  methods:{
      openFirst() {
       menuController.open('custom');
      }
  },
  setup() {
    return {
      barbell, 
      fish, 
      man,
      home
    }
  }
});
</script>