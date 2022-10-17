<template>
    <v-layout justify-center row>
        <v-flex>
            <v-card 
                v-for="(app, i) in apps"
                :key="i">
                <div v-if="app.logo" class="logo" :class="{ no_padding: app.no_padding }">
                  <v-card-media 
                   :src="'apps/'+app.logo"
                   max-height="100"
                   contain></v-card-media>
                </div>
                <div>
                    <v-card-title>
                        <span class="headline">{{app.title}}</span><br/>
                    </v-card-title>
                    <v-card-text class="grey--text text--lighten-2">
                        <span>{{app.description}}</span>
                        <p v-if="app.user" class="mt-4">
                            <u>Credentials</u><br/>
                            Username: <span class="subheading"><i>{{ app.user.username }}</i></span><br/>
                            Password: <span class="subheading"><i>{{ app.user.password }}</i></span>
                        </p>
                    </v-card-text>
                </div>
                <v-card-actions
                    class="pa-3"
                    >
                    <v-btn 
                        outlined
                        v-if="app.link"
                        target="_blank"
                        :href="app.link"
                        >Check it out</v-btn>
                    <v-btn 
                        outlined
                        v-if="app.repo"
                        target="_blank"
                        :href="app.repo"
                        >Repository</v-btn>
                    <v-btn 
                        outlined
                        v-for="(repo, i) in app.custom"
                        target="_blank"
                        :key="i"
                        :href="repo.link"
                        >{{repo.name}}</v-btn>
                    <v-spacer></v-spacer>
                </v-card-actions>
            </v-card>
        </v-flex>
    </v-layout>
</template>

<script>

export default {
    data: ()=> ({
        apps: [
            {
                id: 'lumi',
                title: 'Lumi',
                description: 'Lumi is an application that gives developers the possibility to develop and share code in real-time. The application can be run through a terminal or graphical interface which communicates with a socket and express API on the backend. Electron made it possible to make the React application native, supplying the frontend with a lot of exciting operating system features. Given my senior knowledge of web development I was in the lead of this agile scrum project. Teaching and mentoring the other students as well as contributing to the project my self. I got to familiarize with Jira and working with scrum in symbosis with version control on Github with other collaborators.',
                link: 'https://lumi-project.github.io/',
                custom: [
                    { name: "Native App", link: 'https://github.com/Christopher96/lumi-react'},
                    { name: "Client", link: 'https://github.com/Christopher96/lumi-client'},
                    { name: "Server", link: 'https://github.com/Christopher96/lumi-server'}
                ],
                logo: 'lumi_outline.png',
                no_padding: true
            },
            {
                id: "bachelor",
                title: "A cost comparison between Amazon Web Services EC2 instances",
                description: "This paper involved a study of comparing the cost-effectiveness of different EC2 instances that AWS provides and evaluate which is best fit for training a deep convolutional neural network used an image recognition application. The thesis project was made inhouse at a company called Elvenite while supervised and examined at KTH.",
                logo: 'aws.png',
                custom: [
                    { name: "paper", link: 'http://www.diva-portal.org/smash/get/diva2:1602614/FULLTEXT01.pdf'},
                ],
            },

            {
                id: "simonsays",
                title: "Simon Says Chipkit",
                description: "This project is a interactive game inspired by the classical \"Simon Says\". Simon says a color and the player has to repeat the pattern that is given to them by pressing the buttons on the breadboard. If the player fail to do so it's game over. The game program is built upon different components which are using different kinds of protocols and configurations of the available ports on the board.",
                repo: "https://github.com/Christopher96/simon-says-chipkit",
                logo: 'chipkit.png'
            },
            {
                id: "arduinochat",
                title: "Arduino Chat",
                description: "A message station that can receive and transfer text to a smartphone via bluetooth. The user of the message station can write a message with a joystick and receive messages on a display. The user of the smartphone can see what the other user has written and respond with their own messages.",
                repo: "https://github.com/Christopher96/arduino-chat",
                logo: "arduino.png"
            },
            {
                id: 'addswift',
                title: 'Addswift',
                description: 'This is an application for gathering social media in one place. The most interesting parts mostly lie in the backend where express (nodejs) is used as a RESTful API together with MongoDB for data storage. Frontend is build on Vue.js with the beautiful framework Vuetify. Users can log in with facebook or register manually. The authentication of social media is done through Oauth 2.0 and the application uses JWT (JSON Web Tokens) to sign in users.',
                link: 'https://addswift.herokuapp.com/login',
                repo: 'https://github.com/Christopher96/addswift',
                custom: [{
                    name: "paper",
                    link: "http://www.diva-portal.org/smash/get/diva2:1265901/FULLTEXT01.pdf",
                }],
                logo: "addswift.png"
            },
            {
                id: "lang-sec-chat",
                title: "Prototype pollution demo",
                description: "This repository was used to illustrate the dangers of prototype pollution, which is a malicious method which can be used to trigger and execute code which gives the malicious actor a remote shell. We demonstrated how this is can be done in a normal node js chat application and a blog, as well as how to prevent against it.",
                custom: [
                    {name: "chat", link: "https://github.com/Christopher96/lang-sec-chat",},
                    {name: "blog", link: "https://github.com/Christopher96/lang-sec-blog",},
                    {name: "paper", link: "https://github.com/Christopher96/lang-sec-chat/blob/master/Langsec_Project.pdf",}
                ],
                logo: "pollution.png",
            },
          

            {
                id: "text-to-sql",
                title: "Text to SQL",
                description: "This python application is taking normal english questions from the end user and uses Natural Language Processing to convert it to a SQL query.",
                repo: "https://github.com/Christopher96/text-to-sql",
                custom: [
                    {name: "paper", link: "https://github.com/Christopher96/text-to-sql/blob/master/AI_Project.pdf",}
                ],
                logo: "nlp.png"
            },  
            {
                id: "cruise-control",
                title: "FPGA Cruise Control System",
                description: "The Altera DE2 Development kit provides state-of-the-art technology and features including the possibility to program a Field-programmable Gate Array (FPGA) and support for a Hardware Abstraction Layer (HAL) API. We downloaded a Nios 2 Intel Processor to the FPGA and then developed a cruise control system running on the real-time operating system OS-II flashed on the RAM. (Code sent upon request)",
                custom: [
                    {name: "board", link: "https://www.terasic.com.tw/cgi-bin/page/archive.pl?Language=English&No=30"}
                ],
                logo: "fpga.png"
            },
            {
                id: "mips-processor",
                title: "MIPS Processor",
                description: "I have learned the MIPS assembly language and built the complete circuitry of my own simulated processor in logisim. As well as compiling and running my own machine code on it. (Design sent upon request)",
                logo: "mips.png",
            },
            {
                title: 'C compiler',
                description: 'As part of my compiler course I wrote compiler for a subset of the C-language, taking C code as input and producing X86 assembly as output. This was done using the general-purpose functional language Ocaml. (Code sent upon request)',
                logo: "ocaml.png"
            },
            {
                title: 'Machine Learning',
                description: 'I have learned the complex mathematics behind machine learning algorithms, implemented them and trained my own models to produce intelligent output. Namely Descision trees, Support Vector Machines and Bayesian Classifiers. (Code sent upon request)',
                logo: "ml.png"
            },
            {
                id: "yourstorage",
                title: "Yourstorage CLI",
                description: "A Command Line Interface for sending files over the internet through sockets running on Node JS. A central socket server is directly passing through data between the connected clients.",
                repo: "https://github.com/Christopher96/yourstorage-cli",
                logo: "socketio.png"
            },
            {
                title: 'MM',
                description: 'This site is designed with the help of Bootstrap and uses Wordpress PHP in the background. It is is a personal website for contact and where you can upload posts and images, it is also supports 3 languages, slideshows and is fully responsive',
                link: 'http://studenter.miun.se/~chga1600/dt068g/',
                repo: 'https://github.com/Christopher96/mm',
                logo: "mm.jpg"
            },
            {
                title: 'Cryptohunter',
                description: 'This is an application built upon the Angular framework. It is a fictional cryptocurrency trading site where you can play around with real currencies updated in real time an API provided by coinmarketcap.',
                repo: 'https://github.com/Christopher96/cryptohunter',
                logo: 'bitcoin.png'
            },
            {
                title: 'Bitfire',
                description: 'Bitfire is a fictional LAN event, this is a simple yet functional and pretty site built on HTML5',
                link: 'http://studenter.miun.se/~chga1600/dt057g/moment_5/',
                logo: 'bitfire.png',
            },
                    
        ]
    })
}
</script>
