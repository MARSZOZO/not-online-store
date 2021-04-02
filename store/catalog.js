const state = {
    backpacks : [
        {
            id: 1,
            name: "Рюкзак туристический трансформер Polar",
            price: 1800,
            photo: "https://cdn1.ozone.ru/s3/multimedia-z/wc250/6022575779.jpg"
        },
        {
            id: 2,
            name: "Рюкзак туристический Декатлон",
            price: 3500,
            photo: "https://cdn1.ozone.ru/s3/multimedia-c/wc250/6022576188.jpg"
        },
        {
            id: 3,
            name: "Рюкзак туристический Prival",
            price: 2500,
            photo: "https://cdn1.ozone.ru/s3/multimedia-a/wc250/6019699246.jpg"
        },
        {
            id: 4,
            name: "Рюкзак туристический ТАЙГА ЦЕНТР",
            price: 2700,
            photo: "https://cdn1.ozone.ru/s3/multimedia-2/wc250/6022576214.jpg"
        },
        {
            id: 5,
            name: "Рюкзак туристический Indigo",
            price: 3100,
            photo: "https://cdn1.ozone.ru/s3/multimedia-b/wc250/6019170623.jpg"
        },
        {
            id: 6,
            name: "Рюкзак туристический ЧИНГИСХАН",
            price: 4700,
            photo: "https://cdn1.ozone.ru/s3/multimedia-4/wc250/6011139304.jpg"
        },
        {
            id: 7,
            name: "Рюкзак туристический Rotekors Gear",
            price: 2350,
            photo: "https://cdn1.ozone.ru/s3/multimedia-p/wc250/6025456345.jpg"
        },
        {
            id: 8,
            name: "Рюкзак туристический Хоббихит",
            price: 5100,
            photo: "https://cdn1.ozone.ru/s3/multimedia-q/wc250/6017219654.jpg"
        },
        {
            id: 9,
            name: "Рюкзак туристический ТАЙГА ЦЕНТР ЭКИПИРОВКИ",
            price: 4300,
            photo: "https://cdn1.ozone.ru/multimedia/wc250/1022171016.jpg"
        },
        {
            id: 10,
            name: "Рюкзак Ecos Appalachian",
            price: 9800,
            photo: "https://cdn1.ozone.ru/s3/multimedia-z/wc250/6022575779.jpg"
        },
        {
            id: 11,
            name: "Рюкзак туристический HUNTSMAN",
            price: 3600,
            photo: "https://cdn1.ozone.ru/s3/multimedia-z/wc250/6022575779.jpg"
        },
        {
            id: 12,
            name: "Рюкзак туристический Jack Wolfskin Kingston",
            price: 1100,
            photo: "https://cdn1.ozone.ru/s3/multimedia-8/wc250/6019837664.jpg"
        },
    ],
    tShirts : {},
    shirts : {}
}
const mutations = {

}
const getters = {
    BACKPACKS : state => {
        return state.backpacks
    }
}
const actions = {

}

export default {
    state, getters, mutations, actions
}
