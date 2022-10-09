<template>
    <v-content class="mt-5">
        <v-layout>
            <v-flex class="text-xs-center">
                <v-avatar size="200px">
                    <img
                        class="img-circle elevation-7 mb-5"
                        src="photo.jpg"
                        >
                </v-avatar>
                    <div class="headline">Christopher Gauffin</div>
                    <blockquote class="font-italic subheading ma-3">
                        <footer>— {{ page.message }}</footer>
                    </blockquote>
                    <v-btn
                        color="blue-grey"
                        class="white--text"
                        href="tel:+46761747578"
                        >
                        <v-icon left dark>fa-phone</v-icon>
                        +46 76 174 75 78
                    </v-btn>
                    <v-btn
                        color="red"
                        class="white--text caption"
                        style="text-transform:lowercase;"
                        href="mailto:christopher.gauffin@gmail.com"
                        >
                        <v-icon left dark>fa-envelope</v-icon>
                        christopher.gauffin@gmail.com                    
                    </v-btn>
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
        <v-layout class="mt-5">
            <v-flex
                lg2
                offset-lg1
                > 
                <div
                    class="nav"
                    :style="'width: ' + menuwidth"
                    :class="{ 'sticky': sticky && !mobile, 'drawer': mobile }">
                    <v-navigation-drawer
                        :mini-variant.sync="mini"
                        style="transform:none;"
                        v-model="drawer"
                        >
                        <v-list dense>
                            <v-list-tile
                                @click="changePage(item)"
                                v-for="(item, i) in items"
                                :key="i"
                                >
                                <v-list-tile-action>
                                    <v-icon>{{ item.icon }}</v-icon>
                                </v-list-tile-action>

                        <v-list-tile-content>
                            <v-list-tile-title 
                                class="subheading"
                                :class="{ 'grey--text': item != page }">{{ item.title }}</v-list-tile-title>
                        </v-list-tile-content>
                            </v-list-tile>
                        </v-list>
                    </v-navigation-drawer>
                </div>
            </v-flex>
            <v-flex
                lg6
                v-scroll="stickyCheck"
                class="cards pl-2 pr-2">
                <transition name="page-change">
                <component :class="{'desktop': !mobile}" v-if="page" :is="page.component"></component>
                </transition>
            </v-flex>
        </v-layout>
    </v-content>
</template>

<style>
.no_bg {
    background-color: transparent !important;
    padding: 0 !important;
}
.logo {
    background-color: white;
    width: 15%;
    float: right;
    margin: 1.5em;
    padding: 1.5em;
}
.drawer {
    position: fixed;
    top: 0px;
    z-index: 1000;
}
.sticky {
    position: fixed;
    top: 20px;
}
.page-change-enter {
    opacity: 0;
}
.page-change-enter-active {
    transition: all .5s ease;
}

.desktop .v-card {
    padding: 2em;
} 

.v-card {
    margin-bottom: 2em;
}

.cards {
    padding-bottom: 20em;
}

</style>

<script>
import Applications from '@/components/Applications'
import Games from '@/components/Games'
import Experience from '@/components/Experience'
import Skills from '@/components/Skills'

export default {
    created() {
        this.page = this.items[0]
    },
    computed: {
        menuwidth() {
            switch(this.$vuetify.breakpoint.name) {
                case 'xl': return "300px"
                default: return "250px"
            }
        },
        mobile() {
            return this.$vuetify.breakpoint.mdAndDown
        },
    },
    methods: {
        stickyCheck(e, el) {
            if(e.pageY > el.offsetTop + 50) {
                this.sticky = true
            } else {
                this.sticky = false
            }
            if(this.mobile) this.mini = true
            this.topOffset = el.offsetTop
        },
        changePage(page) {
            this.mini = false
            this.page = page
            window.scrollTo(0, 0)
        }
    },
    components: {
        Applications,
        Games,
        Skills,
        Experience
    },
    data: ()=> ({
        mini: false,
        drawer: false,
        topOffset: 0,
        sticky: false,
        tabs: null,
        page: null,
        items: [
            { title: "Experience", message: "Computer science and engineering are my passions and I have had the fortune to study and work within the fields.", icon: "fa-certificate", component: Experience },
            { title: "Applications",  message: "I always have some project going on, constantly eager to expand my knowledge.", icon: "fa-globe", component: Applications },
            { title: "Games", message: "When you are making a game you get to express all of your creativity and ideas.", icon: "fa-gamepad", component: Games },
            { title: "Skills", message: "I have been programming since the age of 15, I am self taught in most things.", icon: "fa-user", component: Skills },
        ],
        socials: [
            {
                icon: 'fa-linkedin',
                color: 'cyan darken-1',
                link: 'https://www.linkedin.com/in/christopher-gauffin-745731b6'
            },
            {
                icon: 'fa-github',
                color: 'grey darken-3',
                link: 'https://github.com/christopher96'
            },
            {
                icon: 'fa-gitlab',
                color: 'orange darken-4',
                link: 'https://gitlab.com/Christopher96'
            }
        ]
    })
}
</script>
