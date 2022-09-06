<template>
    <v-layout justify-center row>
        <v-flex>
            <v-card 
              v-for="(exp, i) in experience"
              :key="i"
              class="elevation-2"
              >
              <div class="grey darken-2 banner subheading">
                  {{exp.start}}<span v-if="exp.end"> - {{exp.end}}</span>
              </div>
              <div v-if="exp.logo" class="logo">
                  <v-card-media 
                   :src="'experience/'+exp.logo"
                   max-height="100"
                   contain></v-card-media>
              </div>
              <div>
                  <v-card-title>
                      <span class="headline">{{exp.title}}</span><br/>
                  </v-card-title>
                  <v-card-title>
                      <i class="subheading">{{exp.subtitle}}</i>
                  </v-card-title>
                  <v-card-text class="grey--text text--lighten-2">
                        {{exp.description}}
                  </v-card-text>
              </div>
            </v-card>
        </v-flex>
    </v-layout>
</template>

<style>
.banner {
    background-color: white;
    text-align: center;
    padding: 10px;
    margin: 0 18px;
}

.v-timeline {
    padding-top: 0;
}

.v-card__title {
    padding-bottom: 0;
}

.desktop .logo {
    padding: 1em;
}
</style>

<script>


export default {
    data: ()=> ({
        experience: [
            {
                title: 'Inmotion',
                subtitle: 'Embedded Systems Engineer',
                start: '2020',
                end: '2022',
                link: 'https://www.kth.se/utbildning/civilingenjor/informationsteknik/utbildningsbeskrivning-1.4120',
                logo: 'inmotion.jpg',
                description: 'Following my interest for C-programming and hardware I got a summerjob at Inmotion while studying at KTH. The vision of Inmotion is to electrify the vechicle industry for a sustainable future, manufacturing and designing electric motors. I was involved in three different projects, one for each summer. The first was an autonomous solution for Jenkins, a platform for deployment and building projects which eventually became part of the everyday workflow for the software team. The other was an embedded software solution used as a gateway for logging and filtering high-speed data sent through the CAN protocol, present between the power inverter and ECU of the vehicle. The third was to integrate CMocka, a C unit testing framework, and to update their build system to support a more sophisticated testing environment.'
            },
            {
                title: 'Tech Data',
                subtitle: 'Warehouse Employee',
                start: '2019',
                link: 'https://se.techdata.com/',
                logo: 'techdata.jpg',
                description: 'During my summerbreak from KTH I got to work at a fascinating warehouse that handles and ships technological equipment of all sorts to some major companies.'
            },
            {
                title: 'Kungliga Tekniska Högskolan',
                subtitle: 'Civilingenjör Informationsteknik 300 HP',
                start: '2018',
                end: '2023',
                link: 'https://www.kth.se/utbildning/civilingenjor/informationsteknik/utbildningsbeskrivning-1.4120',
                logo: 'kth.png',
                description: 'University KTH, Kungliga Tekniska Högskolan also known as Royal Institute of Technology is my current occupation where I am currently finishing my last year out of a 5 year program to become a civil engineer in information technology. At the moment as part of the program, I am reading a masters in Computer Science with specialization in Computer Security. I have learned a tremendous amount in a vast variety of fields of science, including data science, artificial intelligence, information technology, computer science, computer architechture, computer security, mathematics, neuroscience and embedded engineering among others.'
            },
            {
                title: 'Mittuniversitetet',
                subtitle: 'Webbutveckling 120 HP',
                start: '2016',
                end: '2018',
                link: 'https://www.miun.se/utbildning/program/data-och-it/webbutveckling/om-programmet/',
                logo: 'miun.jpg',
                description: 'While working at Sizmek I also felt the need to do something on the side to develop my skills to its full potential and to build a strong resume. Originating from my interest and creation in web development I wanted to have a degree for it as well. This programme was completely web based, hence I was able to finish it in Stockholm even though the school is situated in Sundsvall.'
            },
            {
                title: 'Sizmek',
                subtitle: 'Creative Solutions Engineer',
                link: 'https://www.sizmek.com/',
                start: '2015',
                end: '2018',
                logo: 'sizmek.png',
                description: 'Finishing high school I was tired of studying so I put my resume up for the test. This is when I got a great opportunity to come and work at a large and interesting corporation with advanced advertising technology. My role at Sizmek was Creative Solutions Engineer, this was a great responsibility since I was the only one on the team with such experience and knowledge. During my three years at Sizmek I developed many tools, scripts and templates to make my own, clients and colleagues lifes much easier. I participated in hundreds of meetings with very interesting clients such as Volvo, Samsung, H&M, Asus, Ikea, Redbull, Danskespil, Volkswagen and their respective creative agencies. Moreover I regularly organised and arranged training sessions and webinars for new clients, designers and developers.'
            }, 
            {
                title: 'C2',
                subtitle: 'Junior Web developer',
                link: 'http://www.c2.se/',
                start: '2014',
                logo: 'c2.png',
                description: 'While studying IT in college I also felt a strong desire to learn and work within a real production environment, so I tried to find a summerjob which I could do while off school. I had the luck to get employed at an amazing creative agency called C2 who was one of the big players in Sweden in making quality display and TV advertisement. My work included making web banners including one for Volkswagen, polishing the company website, searching for bugs in their applications and updating and maintaing client websites.'
            },
            {
                title: 'International IT College of Sweden',
                subtitle: 'Information and media technology',
                start: '2012',
                end: '2015',
                link: 'https://initcollege.se/',
                logo: 'init.png',
                description: 'Following my passion and curiosity for IT I wanted to study it in college full time. I was mainly developing my skills on my free time, but some of the subjects I read really sparked my interest in some languages and programs I use today. The best takeaway from this school was to meet a lot of individuals with different etnicity coming from all over the world not just Sweden and the commitment and focus there was on English. The last year we got to visit London and take the CAE, Cambridge Advanced English exam.'
            },
        ]

    })
}
</script>
