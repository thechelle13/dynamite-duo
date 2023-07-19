const database = {
    heroes: [
        {
            id: 1,
            name: "Dynoguy",
            power: "Fire blasts"
        },
        {
            id: 2,
            name: "Hyperspeed",
            power: "Super speed"
        }
    ], 
    villains: [
        {
            id: 1,
            name: "Evil Queen",
            power: "Removes Hearts"
        },
        {
            id: 2,
            name: "Ursela",
            power: "Controls Evil Eels"
        }
        
    ]
}



export const getVillains = () => {
    return database.villains.map(villain => ({...villain}))
}
export const getHeroes = () => {
    return database.heroes.map(hero => ({...hero}))
}