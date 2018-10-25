<template>
    <v-content class="mt-5">
        <v-container>
            <v-layout justify-center>
                <v-flex md3 class="text-xs-center">
                    <v-avatar size="200px">
                        <img
                            class="img-circle elevation-7 mb-5"
                            src="photo.jpg"
                            >
                    </v-avatar>
                        <div class="headline">Christopher Gauffin</div>
                        <div class="subheading text-xs-center grey--text pt-1 pb-3">Here are some links to my social and projects</div>
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
            <v-layout justify-center row>
                <v-flex md6>
                    <v-card 
                        v-for="(site, i) in sites"
                        :key="i"
                        class="mt-5">
                        <v-card-title primary-title>
                            <div>
                                <div class="headline">{{ site.title }}</div>
                                <span class="subheading grey--text">{{ site.description }}</span>
                                <p v-if="site.user" class="mt-4">
                                    <u>Credentials</u><br/>
                                    Username: <span class="subheading"><i>{{ site.user.username }}</i></span><br/>
                                    Password: <span class="subheading"><i>{{ site.user.password }}</i></span>
                                </p>
                            </div>
                        </v-card-title>
                        <v-card-actions>
                            <v-btn 
                                      flat 
                                      target="_blank"
                                      color="purple"
                                      :href="site.link"
                                      >Check it out</v-btn>
                            <v-spacer></v-spacer>
                        </v-card-actions>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </v-content>
</template>

<script>

export default {
    data: ()=> ({
        sites: [
            {
                title: 'Addswift',
                description: 'This is a prototype of an application for gathering social media in one place. The most interesting parts mostly lie in the backend where express (nodejs) is used as a RESTful API together with MongoDB for data storage. Frontend is build on Vue.js with the beautiful framework Vuetify. Users can log in with facebook or register manually. The authentication of social media is done through Oauth 2.0 and the application uses JWT (JSON Web Tokens) to sign in users.',
                link: 'https://addswift.herokuapp.com/login',
                user: {
                    username: "admin",
                    password: "admin"
                }
            },
            {
                title: 'Cryptohunter',
                description: 'This is an application built upon the Angular framework. It is a fictional cryptocurrency trading site where you can play around with real currencies updated in real time',
                link: 'http://cryptohunter.herokuapp.com/',
                user: {
                    username: "test",
                    password: "test"
                }
            },
            {
                title: 'Hotel Admin',
                description: 'This is both a responsive mobile and desktop application with the purpose of helping employees at hotels to clean the rooms as well as administrators to create new rooms and employee accounts. The backend is build upon PHP and MySQL for data storage.',
                link: 'http://pearl-rock.000webhostapp.com/dt148g/?signin',
                user: {
                    username: "admintest",
                    password: "test123"
                }
            },
            {
                title: 'MM - Marina Mäkelä',
                description: 'This site is designed with the help of Bootstrap and uses Wordpress PHP in the background. It is is a personal website for contact and where you can upload posts and images, it is also supports 3 languages, slideshows and is fully responsive',
                link: 'http://syphez.esy.es/mm/sv/hem/',
            },
            {
                title: 'Bitfire',
                description: 'Bitfire is a fictional LAN event, this is a simple yet functional and pretty site built on HTML5',
                link: 'http://studenter.miun.se/~chga1600/dt057g/moment_5/'
            },
            {
                title: 'Sizmek links',
                description: 'I made this page to make my life a lot easier working at Sizmek, here clients have all the links they need. Under "Tools" I have also developed some useful tools to help clients build and test ads.',
                link: 'http://origin.demo.mediamind.com/cg/links/'
            },
            {
                title: 'DH Chat',
                description: 'This is a simple chat client which was a fun project I made at Dreamhack, by serving this site at the event everyone with a computer connected to the LAN was able to connect, change their name, color and chat with their fellow gamers.',
                link: 'http://studenter.miun.se/~chga1600/dt093g/moment_5/'
            },
            {
                title: 'CSS3 site',
                description: 'A neat template created with the help of CSS3',
                link: 'http://studenter.miun.se/~chga1600/gd008g/moment_4/index.html'
            },
        ],
        socials: [
            {
                icon: 'fab fa-facebook',
                color: 'indigo',
                link: 'https://www.facebook.com/syphez'
            },
            {
                icon: 'fab fa-linkedin',
                color: 'cyan darken-1',
                link: 'https://www.linkedin.com/in/christopher-gauffin-745731b6'
            },
            {
                icon: 'fab fa-github',
                color: 'grey darken-3',
                link: 'https://github.com/christopher96'
            }
        ]
    })
}
</script>
