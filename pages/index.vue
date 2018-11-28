<template>
    <v-content class="mt-5">
        <v-container @scroll="sticky">
            <v-layout>
                <v-flex class="text-xs-center">
                    <v-avatar size="200px">
                        <img
                            class="img-circle elevation-7 mb-5"
                            src="photo.jpg"
                            >
                    </v-avatar>
                        <div class="headline">Christopher Gauffin</div>
                        <div class="subheading text-xs-center grey--text pt-1 pb-3">Here are some links to my social media and projects</div>
                        <v-layout justify-center>
                            <v-btn
                                v-for="(social, i) in socials"
                                :key="i"
                                target="_blank"
                                :href="social.link"
                                :color="social.color"
                                class="white--text"
                                icon
                                >
                                <v-icon>{{ social.icon }}</v-icon>
                            </v-btn>
                        </v-layout>
                </v-flex>
            </v-layout>
            <v-layout>
                <v-flex 
                  class="mt-5"
                >
                    <v-tabs 
                        color="transparent"
                        fixed-tabs
                        v-model="tabs"
                    >
                        <v-tab 
                            v-for="(item, i) in items"
                            :key="i"
                            :value="item.title"
                            >
                            {{item.title}}
                        </v-tab>
                        <v-tabs-slider color="white"></v-tabs-slider>
                    </v-tabs>
                </v-flex>

            </v-layout>
            <v-layout justify-center>
                <!-- <v-flex md2>  -->
                <!--     <v-card -->
                <!--         class="nav"> -->
                <!--           <v-navigation-drawer -->
                <!--             floating -->
                <!--             permanent -->
                <!--             stateless -->
                <!--             value="true" -->
                <!--           > -->
                <!--             <v-list dense> -->
                <!--               <v-list-tile -->
                <!--                 v-for="item in menu" -->
                <!--                 :key="item.title" -->
                <!--               > -->
                <!--                 <v-list-tile-action> -->
                <!--                   <v-icon></v-icon> -->
                <!--                 </v-list-tile-action> -->
                <!--  -->
                <!--                 <v-list-tile-content> -->
                <!--                   <v-list-tile-title>{{ item.title }}</v-list-tile-title> -->
                <!--                 </v-list-tile-content> -->
                <!--               </v-list-tile> -->
                <!--             </v-list> -->
                <!--           </v-navigation-drawer> -->
                <!--     </v-card> -->
                <!-- </v-flex> -->
                <v-flex
                    md10>
                    <v-tabs-items 
                        v-model="tabs"
                        >
                        <v-tab-item
                            v-for="(item, i) in items"
                            :key="i"
                            >
                            <component :is="item.component"></component>
                        </v-tab-item>
                    </v-tabs-items>
                </v-flex>
            </v-layout>
        </v-container>
    </v-content>
</template>

<style>
.nav {
    position: fixed;
}
</style>

<script>
import Sites from '@/components/Sites'
import Skills from '@/components/Skills'

export default {
    methods: {
        sticky(e) {
            console.log(e)
        }
    },
    components: {
        Sites,
        Skills
    },
    data: ()=> ({
        tabs: null,
        menu: [
          { title: 'Home', icon: 'dashboard' },
          { title: 'About', icon: 'question_answer' }
        ],
        items: [
            { title: "Sites", icon: "fa-globe", component: Sites },
            { title: "Skills", icon: "fa-globe", component: Skills },
        ],
        socials: [
            {
                icon: 'fa-facebook',
                color: 'indigo',
                link: 'https://www.facebook.com/syphez'
            },
            {
                icon: 'fa-linkedin',
                color: 'cyan darken-1',
                link: 'https://www.linkedin.com/in/christopher-gauffin-745731b6'
            },
            {
                icon: 'fa-github',
                color: 'grey darken-3',
                link: 'https://github.com/christopher96'
            }
        ]
    })
}
</script>
