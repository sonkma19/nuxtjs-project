import { createStore } from "vuex";

export const store = createStore({
    state: [
        {
            id: 1,
            name: "Auston Matthews",
            position: "Center",
            team: "Toronto Maple Leafs",
            points: 20
        },
        {
            id: 9,
            name: "Jack Eichel",
            position: "Wing",
            team: "Buffalo Sabres",
            points: 2
        }

    ],
    getters: {
        getters: {
            playerlist: (state) => {
                return state.playerlist;
            },
        }
    }
})