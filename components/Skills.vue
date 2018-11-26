<template>
    <v-layout justify-center row>
        <v-flex>
            <v-card
                class="pa-5 pt-3"
                >
                <span class="display-1">Stats</span>
                <div
                    v-for="(skill, i) in skills.Stats"
                    :key="i"
                    class="pb-2"
                >
                    <span class="subheading">{{skill.title}}</span>
                    <v-progress-linear 
                        height="15"
                        v-model="skill.progress"
                    >
                    </v-progress-linear>
                </div>
            </v-card>
        </v-flex>
    </v-layout>
</template>

<script>

export default {
    data: ()=> ({
        skills: { 
            Stats: [
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
                    title: "Excel interest",
                    progress: 10 
                }
            ],
            Languagues: [
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
                    progress: 50
                },
                { 
                    title: "BASH",
                    progress: 50
                },
                { 
                    title: "C++",
                    progress: 40
                }
            ],
            Tools: [
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
            ],
            Frameworks: [
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
            Databases: [
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
            ],
            Operating: [
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
        },
        "Other": [
            "Git", "Arch", "Kali", "Ubuntu", "Gulp", "Webpack", "NPM/Yarn", "Raspberry PI", "Arduino", "Pentesting", "System administration", "Apache", "Adobe Flash", "Nuxt"
        ]
    })
}
</script>
