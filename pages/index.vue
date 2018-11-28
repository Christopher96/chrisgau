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
            <v-layout class="mt-5">
                <v-flex md2> 
                    <v-card
                        color="transparent"
                        class="nav"
                        :class="{ 'sticky': sticky }">
                          <v-navigation-drawer>
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
                    </v-card>
                </v-flex>
                <v-flex
                    md8
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
    width: 250px;
    margin-left: 40px;
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
import Sites from '@/components/Sites'
import Skills from '@/components/Skills'

export default {
    mounted() {
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
            window.scrollTo(0, this.topOffset)
        }
    },
    components: {
        Sites,
        Skills
    },
    data: ()=> ({
        topOffset: 0,
        sticky: false,
        tabs: null,
        page: null,
        items: [
            { title: "Sites", icon: "fa-globe", component: Sites },
            { title: "Skills", icon: "fa-user", component: Skills },
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
