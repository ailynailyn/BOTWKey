export const data = {
  creatures: [
    {
      id: 1,
      name: "horse",
      description:
        "These can most often be found on plains. Their usefulness as transportation has made them valuable since ancient times. That said, wild horses do tend to get spooked and run off when approached, so if you're looking to snag one, it's best to sneak up on it.",
      common_locations: ["Hyrule Field", "Faron Grasslands"],
      drops: [],
      image: "https://botw-compendium.herokuapp.com/api/v2/entry/horse/image",
      category: "creatures",
    },
    {
      id: 2,
      name: "giant horse",
      description:
        "This giant horse is the last of its kind. Its physical capabilities completely overshadow those of regular horses, but its temperament is extremely wild. Only a truly skilled rider can train, or even catch, this beast of a mount. This is a horse that chooses its rider.",
      common_locations: null,
      drops: [],
      image:
        "https://botw-compendium.herokuapp.com/api/v2/entry/giant_horse/image",
      category: "creatures",
    },
    {
      id: 3,
      name: "white horse",
      description:
        "The Hyrulean royal family that perished 100 years ago would sometimes ride atop white horses as a display of their divine right. This white horse may be a descendant of one once ridden by royalty.",
      common_locations: null,
      drops: null,
      image:
        "https://botw-compendium.herokuapp.com/api/v2/entry/white_horse/image",
      category: "creatures",
    },
    {
      id: 4,
      name: "lord of the mountain",
      description:
        "This noble creature watches over all animals that make their homes in the forest. Legends say this holy creature is a reincarnation of a sage that died on the lands it now protects. It has an acute awareness of its surroundings, so it seldom appears before people. It's sometimes known by its other name, Satori",
      common_locations: ["Satori Mountain"],
      drops: null,
      image:
        "https://botw-compendium.herokuapp.com/api/v2/entry/lord_of_the_mountain/image",
      category: "creatures",
    },
    {
      id: 5,
      name: "stalhorse",
      description:
        "This skeletal horse is ridden by monsters. It was once a regular horse, but Ganon's power revived it from death. It cannot maintain its bone structure in the daytime.",
      common_locations: ["Hebra Mountains", "Akkala Highlands"],
      drops: [],
      image:
        "https://botw-compendium.herokuapp.com/api/v2/entry/stalhorse/image",
      category: "creatures",
    },
    {
      id: 6,
      name: "donkey",
      description:
        "Smaller than horses, these are raised as livestock in the countryside, so they don't exist in the wild. They're more powerful than they look and specialize in transporting baggage. This has made them popular with traveling merchants.",
      common_locations: ["Greater Hyrule"],
      drops: [],
      image: "https://botw-compendium.herokuapp.com/api/v2/entry/donkey/image",
      category: "creatures",
    },
  ],
  equipment: [
    {
      id: 201,
      name: "master sword",
      description:
        "The legendary sword that seals the darkness. Its blade gleams with a sacred luster that can oppose the Calamity. Only a hero chosen by the sword itself can wield it.",
      common_locations: null,
      attack: 30,
      defense: 0,
      image:
        "https://botw-compendium.herokuapp.com/api/v2/entry/master_sword/image",
      category: "equipment",
    },
    {
      id: 202,
      name: "tree branch",
      description:
        "Wooden branches such as this are pretty common, but it's surprisingly well-balanced. It doesn't do much damage, but can serve as a weapon in a pinch.",
      common_locations: ["Hyrule Field", "West Necluda"],
      attack: 2,
      defense: 0,
      image:
        "https://botw-compendium.herokuapp.com/api/v2/entry/tree_branch/image",
      category: "equipment",
    },
    {
      id: 203,
      name: "torch",
      description:
        "This torch will stay lit once ignited, but if you put it away, the flame will be extinguished until you light it again.",
      common_locations: ["Great Hyrule Forest", "Hyrule Field"],
      attack: 2,
      defense: 0,
      image: "https://botw-compendium.herokuapp.com/api/v2/entry/torch/image",
      category: "equipment",
    },
    {
      id: 204,
      name: "soup ladle",
      description:
        "A kitchen implement often used for serving delicious soups. It was carved from the wood of a sturdy tree, so it actually packs quite the wallop.",
      common_locations: ["Hyrule Field", "Tabantha Frontier"],
      attack: 4,
      defense: 0,
      image:
        "https://botw-compendium.herokuapp.com/api/v2/entry/soup_ladle/image",
      category: "equipment",
    },
    {
      id: 205,
      name: "boomerang",
      description:
        "This throwing weapon was originally used by the forest-dwelling Koroks. Its unique shape allows it to return after being thrown.",
      common_locations: ["West Necluda", "Faron Grasslands"],
      attack: 8,
      defense: 0,
      image:
        "https://botw-compendium.herokuapp.com/api/v2/entry/boomerang/image",
      category: "equipment",
    },
    {
      id: 206,
      name: "spring-loaded hammer",
      description:
        "This strange hammer is one of Kilton's specialties. Being struck by it doesn't hurt much, but the forth swing in a string of attacks will send the victim flying.",
      common_locations: null,
      attack: 1,
      defense: 0,
      image:
        "https://botw-compendium.herokuapp.com/api/v2/entry/spring-loaded_hammer/image",
      category: "equipment",
    },
  ],
  materials: [
    {
      id: 165,
      name: "apple",
      description:
        "A common fruit found on trees all around Hyrule. Eat it fresh, or cook it to increase its effect.",
      common_locations: ["Hyrule Field", "East Necluda"],
      hearts_recovered: 0.5,
      cooking_effect: "",
      image: "https://botw-compendium.herokuapp.com/api/v2/entry/apple/image",
      category: "materials",
    },
    {
      id: 166,
      name: "palm fruit",
      description:
        "Fruit from palm trees that grow near the ocean. It doesn't offer any special effects but will increase your heart recovery when used as an ingredient.",
      common_locations: ["East Necluda", "Gerudo Desert"],
      hearts_recovered: 1.0,
      cooking_effect: "",
      image:
        "https://botw-compendium.herokuapp.com/api/v2/entry/palm_fruit/image",
      category: "materials",
    },
    {
      id: 167,
      name: "wildberry",
      description:
        "A fruit that grows in cold, snowy regions known for its tangy, sweet flavor. It doesn't offer any special effects, but it's a popular cooking ingredient.",
      common_locations: ["Gerudo Highlands", "Hebra Mountains"],
      hearts_recovered: 0.5,
      cooking_effect: "",
      image:
        "https://botw-compendium.herokuapp.com/api/v2/entry/wildberry/image",
      category: "materials",
    },
    {
      id: 168,
      name: "hearty durian",
      description:
        'This fruit\'s mighty odor has earned it the nickname "king of fruits." It offers immense restorative powers; dishes cooked with it will temporarily increase your maximum hearts.',
      common_locations: ["West Necluda", "Faron Grasslands"],
      hearts_recovered: 3.0,
      cooking_effect: "extra hearts",
      image:
        "https://botw-compendium.herokuapp.com/api/v2/entry/hearty_durian/image",
      category: "materials",
    },
    {
      id: 169,
      name: "hydromelon",
      description:
        "This resilient fruit can flourish even in the heat of the desert. The hydrating liquid inside provides a cooling effect that, when cooked, increases your heat resistance.",
      common_locations: ["Gerudo Desert", "Faron Grasslands"],
      hearts_recovered: 0.5,
      cooking_effect: "heat resistance",
      image:
        "https://botw-compendium.herokuapp.com/api/v2/entry/hydromelon/image",
      category: "materials",
    },
    {
      id: 170,
      name: "spicy pepper",
      description:
        "This pepper is exploding with spice. Cook with it to create dishes that will raise your body temperature and help you withstand the cold.",
      common_locations: ["Gerudo Desert", "Tabantha Frontier"],
      hearts_recovered: 0.5,
      cooking_effect: "cold resistance",
      image:
        "https://botw-compendium.herokuapp.com/api/v2/entry/spicy_pepper/image",
      category: "materials",
    },
  ],
  monsters: [
    {
      id: 84,
      name: "chuchu",
      description:
        "This low-level, gel-based monster can be found all over Hyrule. It tends to spring its attacks on unsuspecting prey from the ground or from trees. Its strength varies by size, and the type of jelly it drops varies depending on whether the Chuchu was heated up, cooled down, or shocked.",
      common_locations: ["Hyrule Field", "West Necluda"],
      drops: ["chuchu jelly"],
      image: "https://botw-compendium.herokuapp.com/api/v2/entry/chuchu/image",
      category: "monsters",
    },
    {
      id: 85,
      name: "fire chuchu",
      description:
        "This low-level gel monster is engulfed in flames. Its strength varies depending on its size. It tends to explode if attacked from close range, so the use of spears, arrows, and other ranged weapons is advised.",
      common_locations: ["Eldin Canyon", "Eldin Mountains"],
      drops: ["red chuchu jelly"],
      image:
        "https://botw-compendium.herokuapp.com/api/v2/entry/fire_chuchu/image",
      category: "monsters",
    },
    {
      id: 86,
      name: "ice chuchu",
      description:
        "This low-level gel monster is engulfed in freezing-cold air. Its strength varies depending on its size. It tends to explode if attacked from close range, so the use of spears, arrows, and other ranged weapons is advised.",
      common_locations: ["Gerudo Highlands", "Hebra Mountains"],
      drops: ["white chuchu jelly"],
      image:
        "https://botw-compendium.herokuapp.com/api/v2/entry/ice_chuchu/image",
      category: "monsters",
    },
    {
      id: 87,
      name: "electric chuchu",
      description:
        "This low-level gel monster is engulfed in electricity. Its strength varies depending on its size. It tends to explode if attacked from close range, so the use of spears, arrows, and other ranged weapons is advised.",
      common_locations: ["Gerudo Highlands", "East Necluda"],
      drops: ["yellow chuchu jelly"],
      image:
        "https://botw-compendium.herokuapp.com/api/v2/entry/electric_chuchu/image",
      category: "monsters",
    },
    {
      id: 88,
      name: "keese",
      description:
        "The unpredictable flight pattern of this noctoural bat-like species can make fighting them a nuisance, but they're weak enough to fell with a single strike. Sometimes they'll attack in packs, but even then, a pack can be sent packing with a single attack.",
      common_locations: ["Hyrule Field", "East Necluda"],
      drops: ["keese wing", "keese eyeball"],
      image: "https://botw-compendium.herokuapp.com/api/v2/entry/keese/image",
      category: "monsters",
    },
    {
      id: 89,
      name: "fire keese",
      description:
        "The fire that engulfs the bodies of these bat-like Keese makes them more dangerous than the standard type. They're capable of setting fire to anything they touch.",
      common_locations: ["Eldin Canyon", "Eldin Mountains"],
      drops: ["fire keese wing", "keese eyeball"],
      image:
        "https://botw-compendium.herokuapp.com/api/v2/entry/fire_keese/image",
      category: "monsters",
    },
  ],
  treasure: [
    {
      id: 386,
      name: "treasure chest",
      description:
        "Fortunes untold (potentially) await the lucky adventurer who finds one of these. Chests can often be found within shrines or at enemy camps, but there may be some crafty folks who think they're safer underground.",
      common_locations: ["Greater Hyrule"],
      drops: ["treasures"],
      image:
        "https://botw-compendium.herokuapp.com/api/v2/entry/treasure_chest/image",
      category: "treasure",
    },
    {
      id: 387,
      name: "ore deposit",
      description:
        "This deposit contains a good deal of ore. Breaking the rock will yield rock salt, flint, and other minerals of varying value.",
      common_locations: ["Greater Hyrule"],
      drops: [
        "ruby",
        "diamond",
        "amber",
        "sapphire",
        "topaz",
        "opal",
        "rock salt",
        "flint",
      ],
      image:
        "https://botw-compendium.herokuapp.com/api/v2/entry/ore_deposit/image",
      category: "treasure",
    },
    {
      id: 388,
      name: "rare ore deposit",
      description:
        "This deposit contains a good deal of precious ore and the occasional rare mineral, like ruby and sapphire. Break it open to see what it has to offer!",
      common_locations: ["Greater Hyrule"],
      drops: ["ruby", "sapphire", "diamond", "amber", "topaz", "flint"],
      image:
        "https://botw-compendium.herokuapp.com/api/v2/entry/rare_ore_deposit/image",
      category: "treasure",
    },
    {
      id: 389,
      name: "luminous ore deposit",
      description:
        "This deposit contains quite a bit of luminous stone. Crack it open to get at the easily process rocks within.",
      common_locations: ["Greater Hyrule"],
      drops: ["luminous", "flint"],
      image:
        "https://botw-compendium.herokuapp.com/api/v2/entry/luminous_ore_deposit/image",
      category: "treasure",
    },
  ],
};
