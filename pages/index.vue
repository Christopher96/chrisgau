<template>
    <v-content class="mt-5">
        <v-container>
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
                <v-flex> 
                    <div
                        class="nav"
                        color="transparent"
                        :class="{ 'sticky': sticky }">
                        <v-navigation-drawer
                            floating
                            stateless>
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
                    md12
                    v-scroll="stickyCheck"
                    class="pl-5 pr-5">
                    <transition name="page-change">
                    <component v-if="page" :is="page.component"></component>
                    </transition>
                </v-flex>
            </v-layout>
        </v-container>
    </v-content>
</template>

<style>
.nav {
    position: absolute;
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
    methods: {
        stickyCheck(e, el) {
            if(e.pageY > el.offsetTop + 50) {
                this.sticky = true
            } else {
                this.sticky = false
            }
            this.topOffset = el.offsetTop
        },
        changePage(page) {
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
        topOffset: 0,
        sticky: false,
        tabs: null,
        page: null,
        items: [
            { title: "Applications",  message: "I always have some project going on, constantly eager to learn new things.", icon: "fa-globe", component: Applications },
            { title: "Games", message: "When you are making a game you get to express all of your creativity and ideas.", icon: "fa-gamepad", component: Games },
            { title: "Experience", message: "IT is my passion and I have been fortunate to have the chance to study and work with it.", icon: "fa-user", component: Experience },
            { title: "Skills", message: "I have been programming since the age of 15, I am self thaught in most things.", icon: "fa-user", component: Skills },
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
