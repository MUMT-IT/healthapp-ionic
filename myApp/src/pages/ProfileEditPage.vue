<template>
    <base-layout page-title="ProfileEdit">
       <profile-edit-save></profile-edit-save>
    </base-layout>
</template>
<script>
import ProfileEditSave from '../Profile/ProfileEditSave.vue';
export default {
    components:{
        ProfileEditSave
    },
};
</script>