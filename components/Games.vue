<template>
    <v-layout justify-center row>
        <v-flex>
            <v-card 
                v-for="(game, i) in games"
                :key="i"
                class="pa-4 mb-5">
                <v-card-title primary-title>
                        <div>
                            <div class="headline">{{ game.title }}</div>
                            <span class="subheading grey--text">{{ game.description }}</span>
                        </div>
                </v-card-title>
                <v-card-actions>
                    <v-btn 
                    flat 
                    target="_blank"
                    color="purple"
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
                id: 'rpg'
            },
            {
                title: 'Fly & Sh*t',
                description: 'This is a fun and dumb game where you control a bird that flies through a city where you have to dodge cars and lamps to survive. Extra points is given for taking a dump on cars. The bird is controlled through the mobile accelorometer which is configured dyanmically at the start of the game. When making this game I learned the complete process of coming up with and idea, making a plan, preparing all the assets and compiling and uploading the whole thing to the Google Play store, which trust me, is a tedious process.',
                link: 'https://gitlab.com/Christopher96/FlyAndShit',
                id: 'flyandshit'
            },
            {
                title: 'Disco ninja',
                description: 'This project required a good amount of planning and developing but was also really engaging to make since I used many of my different skills such as animation in flash, creating assets in photoshop and writing plugins in Java which are bridged to C#. The idea is that the user can choose any song they want from their phone which will be synchronized in the game.', 
                link: 'https://gitlab.com/Christopher96/Disconinja',
                id: 'disconinja'
            },
            {
                title: 'Fruitcatch',
                description: 'Back when Flash was widely used I made this simple yet fun game where you drag your finger across the screen to move the basket horizontally to catch fruit falling from the sky, the amount of fruits and the speed of them increase the higher level you reach. This game gave me more knowledge for flash based applications and animations and the scripting language Actionscript 3.',
                id: 'fruitcatch'
            },
            {
                title: 'Hangman',
                description: 'This is my first game I have ever made which I initially started out making as a normal html/js type game in the browser, later I reused the revamped the code to make it playable on mobile. I used the Ionic framework to convert the game from a static site to a Single Page Application with native mobile components.',
                id: 'hangman'
            },
        ]
    })
}
</script>
