<template>
<span>
    <v-navigation-drawer app v-model="drawer" class="green lighten-2" dark disable-resize-watcher>
        <v-list>
            <template v-for="(item,index) in items">
                <v-list-tile :key="index">
                    <v-list-tile-content>
                       <h6 class="pt-4 pb-4 ml-4"> {{item.title}}</h6>
                    </v-list-tile-content>
                </v-list-tile>
            <v-divider :key="`divider-${index}`"></v-divider>

            </template>
        </v-list>
    </v-navigation-drawer>
<v-toolbar app color="green" dark>
    <v-toolbar-side-icon class="hidden-md-and-up" @click="drawer=!drawer"></v-toolbar-side-icon>
            <v-spacer class="hidden-md-and-up"></v-spacer>
            <router-link to='/'>
            <v-toolbar-title class="app_title">{{appTitle}}</v-toolbar-title>
            </router-link>
            <v-btn to='/menu' class="hidden-sm-and-down" flat>Menu</v-btn>
            <v-spacer class="hidden-sm-and-down"></v-spacer>
            <v-btn to='/signin' class="hidden-sm-and-down" flat>SIGN IN</v-btn>
            <v-btn to='/join' class="hidden-sm-and-down" color="green lighten-2">JOIN</v-btn>

</v-toolbar>
 </span>   
</template>
 <script>
 export default {
     name:'AppNavigation',
     data() {
         return {
            appTitle: 'MealMan',
            drawer:false,
            items: [
                {title: 'Menu'},
                {title: 'Sign In'},
                {title: 'Join'},
            ]
         }
     }

 };
 </script>

 <style scoped>
 a {
     color:white;
     text-decoration:none !important;
 }
 </style>
 