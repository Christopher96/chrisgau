<template>
    <v-layout justify-center row>
        <v-flex>
            <v-card
                class="pa-5 mb-5"
                v-for="(skill, name) in skills"
                :key="name"
                >
                <p class="skill headline">{{name}}</p>
                <v-divider></v-divider>
                <div
                    v-for="(stat, i) in skill.stats"
                    :key="i"
                    class="pt-1 pb-1"
                >
                    <span class="subheading">{{stat.title}}</span>
                    <v-progress-linear 
                        v-in-viewport
                        color="white"
                        height="10"
                        v-model="stat.progress"
                    >
                    </v-progress-linear>
                </div>
                <v-divider></v-divider>
                <div class="d-flex">
                    <p class="text-md-left">
                        <i class="subheading">{{skill.low}}</i>
                    </p>
                    <v-spacer></v-spacer>
                    <p class="text-md-right">
                        <i class="subheading">{{skill.high}}</i>
                    </p>
                </div>
            </v-card>
        </v-flex>
    </v-layout>
</template>
<style>
.skill {
    text-transform: capitalize;
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
        intervals: [], 
        skills: { 
            personality: {
                low: "No thanks",
                high: "Lovin it",
                stats: [
                    {
                        title: "Creativity",
                        progress: 100
                    },
                    {
                        title: "Learning",
                        progress: 90
                    }, 
                    {
                        title: "Problemsolving",
                        progress: 90
                    },
                    {
                        title: "Humour",
                        progress: 80
                    },
                    {
                        title: "Social",
                        progress: 70
                    }, 
                    {
                        title: "Excel documents",
                        progress: 10 
                    }
                ]
            },
            "Programming languages": {
                low: "Noob",
                high: "Senpai",
                stats: [
                    {
                        title: "HTML",
                        progress: 100
                    },
                    { 
                        title: "JavaScript",
                        progress: 90
                    },
                    { 
                        title: "CSS",
                        progress: 90
                    },
                    { 
                        title: "PHP",
                        progress: 80
                    },
                    { 
                        title: "C#",
                        progress: 80
                    },
                    { 
                        title: "Java",
                        progress: 70
                    },
                    {
                        title: "SQL",
                        progress: 70
                    },
                    { 
                        title: "Python",
                        progress: 60
                    },
                    { 
                        title: "C",
                        progress: 60
                    },
                    { 
                        title: "BASH",
                        progress: 60
                    },
                    { 
                        title: "C++",
                        progress: 40
                    }
                ]
            },
            frameworks: {
                low: "U wot m8?",
                high: "Master",
                stats: [
                    {
                        title: "jQuery (yeah I know...)",
                        progress: 100
                    },
                    {
                        title: "Bootstrap",
                        progress: 100
                    },
                    {
                        title: "Vue JS/Vuetify",
                        progress: 70
                    },
                    {
                        title: "Express (Node JS)",
                        progress: 70
                    },
                    {
                        title: ".NET",
                        progress: 60
                    },
                    {
                        title: "React JS", 
                        progress: 50
                    },
                    {
                        title: "Angular JS", 
                        progress: 50
                    }
                ],
            },
            databases: {
                low: "Floppydrives?",
                high: "NSA, call me",
                stats: [
                    {
                        title: "MySQL",
                        progress: 90
                    }, 
                    {
                        title: "MongoDB",
                        progress: 70
                    }, 
                    {
                        title: "Microsoft SQL",
                        progress: 60
                    }
                ]
            },
            tools: {
                low: "Scrub",
                high: "Pro",
                stats: [
                    {
                        title: "Adobe Photoshop",
                        progress: 90
                    },
                    {
                        title: "Unity (C#)",
                        progress: 80
                    },
                    {
                        title: "Sony Vegas",
                        progress: 80
                    },
                    {
                        title: "Adobe Animate",
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
                low: "Scriptkiddie",
                high: "Hacker",
                stats: [
                    {
                        title: "Linux",
                        progress: 80
                    },
                    {
                        title: "MacOS",
                        progress: 70
                    },
                    {
                        title: "Windows",
                        progress: 60
                    }
                ]
            }
        },
        "other": [
            "Git", "Arch", "Kali", "Ubuntu", "Gulp", "Webpack", "NPM/Yarn", "Raspberry PI", "Arduino", "Pentesting", "System administration", "Apache", "Adobe Flash", "Nuxt", "Vagrant"
        ]
    })
}
</script>
