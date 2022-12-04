
const coffeeData = [
    {
        coffeeName: "Old Dank Nic",
        coffeeRoaster: "Dark Matter Coffee",
        singleOrigin: false,
        origin: "El Salvador Santa Petrona, Guatemala San Jeronimo Miramar, Nicaragua Neuva Segovia",
        cultivar: "Bourbon, Catuai",
        process: "Washed",
        roastLevel: "light",
        description: "Old Dank Nic, one of our annual holiday blends, is back! For this coffee we are using a Catuai from Guatemala that has been fermented with Cocoa mucilage to create a sweet, fudgy base. We paired this with two natural processed coffees, a Mixed lot from Nicaragua and a Bourbon from El Salvador, to add punchy, red-fruit acidity to the cup."
    },
    {
        coffeeName: "Kenya Kamwangi",
        coffeeRoaster: "Ceremony Coffee Roasters",
        singleOrigin: true,
        origin: "Kenya Kirinyaga",
        cultivar: "",
        process: "washed",
        roastLevel: "light",
        description: "While terroir plays an important role in quality, some argue that Kenya's outstanding coffee is a result of their strict processing. This cup shines with sweet, deep notes of pomegranate molasses and cranberry sauce. Dial in with a 1:16 brew ratio, filtered water at 208-210℉, a medium grind, and a 3-3.5 minute brew cycle. "
    },
    {
        coffeeName: "Heavy Weather Winter Blend",
        coffeeRoaster: "Modern Times Coffee",
        singleOrigin: false,
        origin: "Honduras, Ethiopia, Guatemala",
        cultivar: "",
        process: "",
        roastLevel: "medium",
        description: "This year’s winter blend is a wildly successful amalgamation of individually stellar coffees that come together in a glorious triumvirate of holiday magic. This iteration is a combo of natural Honduras, natural Ethiopia, and Bourbon Barrel-Aged Guatemala. Together, they yield beautiful notes of berry jam, chocolate truffle, and red wine. It’s a soul-warming cup of seasonal cheer that is virtually guaranteed to increase even the Grinch-iest of hearts by a minimum of three sizes."
    },
]

function getCoffeeData() {
    return coffeeData
}

module.exports = {
    getCoffeeData
}