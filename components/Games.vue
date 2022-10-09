<template>
    <v-layout justify-center row>
        <v-flex>
            <v-card 
                v-for="(game, i) in games"
                :key="i">
                <div v-if="game.logo" class="logo">
                  <v-card-media 
                   :src="'games/'+game.logo"
                   max-height="100"
                   contain></v-card-media>
                </div>
                <div>
                    <v-card-title>
                        <span class="headline">{{game.title}}</span><br/>
                    </v-card-title>
                    <v-card-text class="grey--text text--lighten-2">
                        {{game.description}}
                    </v-card-text>
                </div>
                <v-card-actions
                    class="pa-3"
                    >
                    <v-btn 
                    outlined
                    target="_blank"
                    :href="game.link"
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
        games: [
            {
                title: 'RPG',
                description: 'This is my most sofisticated game so far I have made, it is still in development and not released yet, although I have learned a tremendous amount about Unity\'s capabilities and it\'s scripting API making this game. It\s an RPG game so this involves quests, leveling, combat, dialogs, exploration, inventory, spells and a custom made UI to handle all of those things.',
                link: 'https://gitlab.com/Christopher96/RPG',
                id: 'rpg',
                logo: 'rpg.png'
            },
            {
                id: 'dixitonline',
                title: 'Dixit online',
                description: 'An online version of the game Dixit made with the React framework as frontend. A lightweight back end server is run behind the scenes to store saved games and for making calls to the Unsplash API. The backend serves as a RESTful API where simple endpoints are used for fetching and storing data built on Express and MongoDB. The game is deployed with Heroku.',
                repo: 'https://github.com/Christopher96/dixit-online',
                logo: 'dixit.png'
            },
            {
                title: 'Fly & Sh*t',
                description: 'This is a fun game where you control a bird that flies through a city where you have to dodge cars and lamps to survive. The bird is controlled through the mobile accelorometer which is configured dyanmically at the start of the game. When making this game I learned the complete process of coming up with and idea, making a plan, preparing all the assets and compiling and uploading the whole thing to the Google Play store, which trust me, is a tedious process.',
                link: 'https://gitlab.com/Christopher96/FlyAndShit',
                id: 'flyandshit',
                logo: 'flyandshit.png'
            },
            {
                title: 'Disco Ninja',
                description: 'This project required a good amount of planning and developing but was also really engaging to make since I used many of my different skills such as animation in flash, creating assets in photoshop and writing plugins in Java which are bridged to C#. The idea is that the user can choose any song they want from their phone which will be synchronized in the game.', 
                link: 'https://gitlab.com/Christopher96/Disconinja',
                id: 'disconinja',
                logo: 'disconinja.png'
            },
        ]
    })
}
</script>
