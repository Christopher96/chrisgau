<template>
    <v-layout justify-center row>
        <v-flex class="skills">
            <v-card
                v-for="(skill, name) in skills"
                :key="name">
                <p class="skill headline">{{name}}</p>
                <v-divider></v-divider>
                <div
                    v-for="(stat, i) in skill.stats"
                    :key="i"
                    class="pt-1 pb-1"
                >
                    <span class="skilltitle subheading">{{stat.title}}</span>
                    <v-progress-linear 
                          class="skillbar"
                        v-in-viewport
                        :color="skill.color"
                        height="10"
                        v-model="stat.progress"
                    >
                    </v-progress-linear>
                </div>
                <v-divider></v-divider>
                <div class="d-flex">
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
                <p class="skill headline">Other</p>
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
        </v-flex>
    </v-layout>
</template>
<style>
.skill {
    text-transform: capitalize;
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
                        title: "JavaScript",
                        progress: 100
                    },
                    { 
                        title: "CSS",
                        progress: 100
                    },
                    { 
                        title: "PHP",
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
                        title: "Python",
                        progress: 80
                    },
                    { 
                        title: "C",
                        progress: 70
                    },                
                    { 
                        title: "C++",
                        progress: 70
                    },                
                    {
                        title: "SQL",
                        progress: 60
                    },
                    {
                        title: "Prolog",
                        progress: 50
                    }
                ]
            },
            frameworks: {
                color: "yellow",
                stats: [
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
                        title: "Vue JS",
                        progress: 80
                    },
                    {
                        title: "Express (Node JS)",
                        progress: 70
                    },
                    {
                        title: "React JS", 
                        progress: 70
                    },
                    {
                        title: "Angular JS", 
                        progress: 60
                    },
                    {
                        title: ".NET",
                        progress: 60
                    }
                ],
            },
            databases: {
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
                        progress: 60
                    }                ]
            },
            tools: {
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
            "Sales pitching", "Project leadership", "Pedagocial skills", "Git", "Ionic", "PhoneGap", "Gulp", "Webpack", "NPM", "Yarn", "Raspberry PI", "Arduino", "Pentesting", "Sysadmin", "Apache", "Flash", "Nuxt", "Vagrant", "Gantt", "SWOT", "Web 2.0", "Arch", "Kali", "Ubuntu", "Typescript", "SCSS", "XAMPP", "SSH", "PHPMyAdmin", "Partitioning", "SOAP", "RESTful", "JSON", "XML", "Processor programming"
        ]
    })
}
</script>
