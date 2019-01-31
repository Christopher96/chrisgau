<template>
    <v-layout justify-center row>
        <v-flex>
            <v-card 
                v-for="(site, i) in sites"
                :key="i"
                class="pa-4 mb-5">
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
                    <v-btn 
                        flat 
                        target="_blank"
                        color="purple"
                        :href="site.repo"
                        >Repository</v-btn>
                    <v-spacer></v-spacer>
                </v-card-actions>
            </v-card>
        </v-flex>
    </v-layout>
</template>

<script>

export default {
    data: ()=> ({
        sites: [
            {
                id: 'addswift',
                title: 'Addswift',
                description: 'This is a prototype of an application for gathering social media in one place. The most interesting parts mostly lie in the backend where express (nodejs) is used as a RESTful API together with MongoDB for data storage. Frontend is build on Vue.js with the beautiful framework Vuetify. Users can log in with facebook or register manually. The authentication of social media is done through Oauth 2.0 and the application uses JWT (JSON Web Tokens) to sign in users.',
                link: 'https://addswift.herokuapp.com/login',
                repo: 'https://github.com/Christopher96/addswift',
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
                link: 'http://studenter.miun.se/~chga1600/dt068g/',
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
        ]
    })
}
</script>
