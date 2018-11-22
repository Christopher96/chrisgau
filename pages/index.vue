<template>
     <v-content class="mt-5">
        <v-container>
            <v-layout justify-center>
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
                                fab
                                icon
                                small
                                >
                                <v-icon>{{ social.icon }}</v-icon>
                            </v-btn>
                        </v-layout>
                </v-flex>
            </v-layout>
            <v-layout>
                <v-toolbar>
                    <v-tabs 
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
                    </v-tabs>
                </v-toolbar>
            </v-layout>
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
        </v-container>
    </v-content>
</template>

<script>
import Sites from '@/components/Sites'
import Skills from '@/components/Skills'

export default {
    components: {
        Sites,
        Skills
    },
    data: ()=> ({
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
