<template>
    <v-layout justify-center row>
        <v-flex class="skills">
            <v-card
                v-for="(skill, name) in skills"
                :key="name">
                <p class="headline">{{name}}</p>
                <v-divider class="mb-3"></v-divider>
                <table>
                <tr
                    v-for="(stat, i) in skill.stats"
                    :key="i"
                    class="skill"
                >
                    <td>
                        <span class="skilltitle subheading">{{stat.title}}</span>
                    </td>
                    <td class="skillbar-container">
                        <v-progress-linear 
                            class="skillbar"
                            v-in-viewport
                            :color="skill.color"
                            height="10"
                            v-model="stat.progress"
                        >
                        </v-progress-linear>
                    </td>
                </tr>
                </table>
                <v-divider class="mt-3"></v-divider>
                <div class="mt-3 d-flex">
                    <p class="text-md-left">
                        <i class="subheading">Beginner</i>
                    </p>
                    <v-spacer></v-spacer>
                    <p class="text-md-right">
                        <i class="subheading">Expert</i>
                    </p>
                </div>
            </v-card>
            <v-card>
                <p class="headline">Other knowledge</p>
                <v-divider></v-divider>
                <div class="mt-2">
                    <v-chip
                        label
                        color="blue"
                        text-color="white"
                        class="subheading"
                        v-for="(name, i) in other"
                        :key="i">
                        {{name}}
                    </v-chip>
                </div>
            </v-card>
            <v-card>
                <p class="headline">Expertise and qualities</p>
                <v-divider></v-divider>
                <div class="mt-2">
                    <v-chip
                        label
                        color="deep-orange darken-4"
                        text-color="white"
                        class="subheading"
                        v-for="(name, i) in qualities"
                        :key="i">
                        {{name}}
                    </v-chip>
                </div>
            </v-card>
        </v-flex>
    </v-layout>
</template>
<style>
.skill {
    height: 3rem;
}
.skilltitle {
    white-space: nowrap;
}

.skillbar-container {
    padding-left: 1em;
    width: 100%;
}

.desktop .skills .v-card {
    padding: 3em;
}

.v-progress-linear__bar__determinate {
    transition: width 3s !important;
}
.v-progress-linear:not(.in-viewport) .v-progress-linear__bar__determinate {
    width: 0% !important;
}
</style>
<script>

export default {
    data: ()=> ({
        skills: { 
            "Programming languages": {
                color: "deep-purple",
                stats: [
                    {
                        title: "HTML",
                        progress: 100
                    },
                    { 
                        title: "Typescript",
                        progress: 100
                    },
                    { 
                        title: "CSS",
                        progress: 100
                    },
                    { 
                        title: "Python",
                        progress: 100
                    },
                    { 
                        title: "C",
                        progress: 90
                    },
                    { 
                        title: "C#",
                        progress: 90
                    },
                    { 
                        title: "Java",
                        progress: 90
                    },
                    { 
                        title: "PHP",
                        progress: 90
                    },
                    { 
                        title: "Bash",
                        progress: 80
                    },
                    { 
                        title: "C++",
                        progress: 70
                    },   
                    {
                        title: "SQL",
                        progress: 70
                    },
                    {
                        title: "Ocaml",
                        progress: 60
                    },  
                    {
                        title: "Elixir",
                        progress: 60
                    }
                ]
            },
            "Frameworks and libraries": {
                color: "yellow",
                stats: [
                    {
                        title: "Node JS", 
                        progress: 100
                    },
                    {
                        title: "React", 
                        progress: 100
                    },
                    {
                        title: "Express",
                        progress: 100
                    },
                    {
                        title: "jQuery",
                        progress: 100
                    },
                    {
                        title: "Bootstrap",
                        progress: 100
                    },
                    {
                        title: "Wordpress",
                        progress: 90
                    },
                    {
                        title: "Vue",
                        progress: 80
                    },
                    {
                        title: "Ionic", 
                        progress: 60
                    },
                    {
                        title: "Angular", 
                        progress: 60
                    },
                    {
                        title: ".NET",
                        progress: 60
                    },
                    {
                        title: "Laravel", 
                        progress: 50
                    },
                    {
                        title: "Django", 
                        progress: 50
                    }
                ],
            },
            "Databases": {
                color: "green",
                stats: [
                    {
                        title: "MySQL",
                        progress: 100
                    }, 
                    {
                        title: "MongoDB",
                        progress: 90
                    }, 
                    {
                        title: "Microsoft SQL",
                        progress: 70
                    },
                    {
                        title: "Elasticsearch",
                        progress: 60
                    }                
                ]
            },
            "Tools": {
                color: "teal",
                stats: [
                    {
                        title: "Adobe Photoshop",
                        progress: 100
                    },
                    {
                        title: "Unity (C#)",
                        progress: 90
                    },
                    {
                        title: "Sony Vegas",
                        progress: 80
                    },
                    {
                        title: "Adobe Animate",
                        progress: 80
                    },
                    {
                        title: "Adobe Premiere Pro",
                        progress: 70
                    },
                    {
                        title: "Adobe After Effects",
                        progress: 60
                    },
                    {
                        title: "Adobe Illustrator",
                        progress: 50
                    }
                ]
            },
            "Operating systems": {
                color: "red",
                stats: [
                    {
                        title: "Linux",
                        progress: 90
                    },
                    {
                        title: "Android",
                        progress: 80
                    },
                    {
                        title: "Windows",
                        progress: 70
                    },
                    {
                        title: "IOS",
                        progress: 60
                    },
                    {
                        title: "MacOS",
                        progress: 60
                    },
                ]
            }
        },
        "other": [
            "Jira", "Confluence", "Trello", "Jenkins", "AWS", "Heroku", "Docker", "Git", "NPM", "Yarn", "Tensorflow", "Pandas", "NumPy", "Scikit-learn",
            "MATLAB", "Golang", "X86 Assembly", "MIPS Assembly", "Webpack", "Gulp", "Groovy", "Raspberry PI", "Arduino", "Cmake", "Scons", "Make", "SQL",
            "Ionic", "PhoneGap", "React Native", "Electron", "Apache", "Flash", "Nuxt", "Vuetify", "Vagrant", "Web 3.0", "Arch", "Kali", "Ubuntu",
            "Typescript", "SCSS", "XAMPP", "SSH", "PHPMyAdmin", "SOAP", "RESTful", "OAuth", "MVC",
            "JSON", "XML", "SWOT Analysis", "Gantt"
        ],
        "qualities": [
            "Data Science", "Artificial Intelligence", "Machine Learning", "Discrete Mathematics", "Numerical Methods", "Probability Theory and Statistics", "Calculus", "Networks", 
            "Embedded Engineering", "Digital Design", "Algorithms and Datastructures", "Computer Systems Architechture", "Parallell and Distributed Computing", "Neuroscience", 
            "Processor Programming", "Compiler and Execution Environments", "Penetration Testing", "System Administration", "Cryptography", "Hardware Security", 
            "Network Security", "Web Security", "Fullstack", "Web Design", "Cloud Services", "Automation", "DevOps", "Microservices", "Sales Pitching", "Project Leadership", "Pedagocial Skills", 
            "ICT and Innovation"
        ]
    })

}
</script>
