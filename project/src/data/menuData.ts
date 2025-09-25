import { MenuItemType } from '../components/MenuCategory';

export const appetizers: (MenuItemType & {
  image: string;
  cookingTime: string;
  servings: number;
  ingredients: string[];
  preparation: string;
})[] = [
  {
    id: 1,
    name: "Bruschetta Trio",
    description: "Three varieties of our signature bruschetta: classic tomato basil, mushroom truffle, and goat cheese with honey",
    price: 14.95,
    isVegetarian: true,
    image: "https://images.pexels.com/photos/1438672/pexels-photo-1438672.jpeg?auto=compress&cs=tinysrgb&w=800",
    cookingTime: "15 mins",
    servings: 2,
    ingredients: [
      "Fresh baguette slices",
      "Roma tomatoes, diced",
      "Fresh basil leaves",
      "Wild mushrooms",
      "Truffle oil",
      "Goat cheese",
      "Local honey",
      "Extra virgin olive oil",
      "Garlic cloves",
      "Sea salt and black pepper"
    ],
    preparation: "Our bruschetta begins with artisanal bread, toasted to golden perfection. The classic variety features vine-ripened tomatoes mixed with fresh basil and garlic. The mushroom version showcases wild fungi sautéed with aromatic truffle oil, while the third combines creamy goat cheese with a drizzle of local honey for the perfect sweet-savory balance."
  },
  {
    id: 2,
    name: "Calamari Fritti",
    description: "Golden fried squid rings served with spicy marinara sauce and lemon aioli",
    price: 16.95,
    image: "https://images.pexels.com/photos/6107787/pexels-photo-6107787.jpeg?auto=compress&cs=tinysrgb&w=800",
    cookingTime: "12 mins",
    servings: 3,
    ingredients: [
      "Fresh squid rings",
      "All-purpose flour",
      "Semolina flour",
      "Eggs",
      "Sparkling water",
      "San Marzano tomatoes",
      "Red pepper flakes",
      "Fresh mayonnaise",
      "Lemon juice and zest",
      "Fresh parsley"
    ],
    preparation: "Tender squid rings are coated in our signature light batter made with sparkling water for extra crispiness. Quick-fried at high temperature to achieve the perfect golden exterior while keeping the squid tender inside. Served immediately with our house-made spicy marinara and creamy lemon aioli."
  },
  {
    id: 3,
    name: "Antipasto Platter",
    description: "Selection of cured meats, aged cheeses, olives, roasted peppers, and artichoke hearts",
    price: 19.95,
    image: "https://images.pexels.com/photos/1435735/pexels-photo-1435735.jpeg?auto=compress&cs=tinysrgb&w=800",
    cookingTime: "20 mins",
    servings: 4,
    ingredients: [
      "Prosciutto di Parma",
      "Salami Milano",
      "Aged Parmigiano-Reggiano",
      "Fresh mozzarella",
      "Kalamata olives",
      "Castelvetrano olives",
      "Roasted red peppers",
      "Marinated artichoke hearts",
      "Fresh figs",
      "Crusty Italian bread"
    ],
    preparation: "A carefully curated selection of Italy's finest cured meats and artisanal cheeses, arranged with marinated vegetables and fresh accompaniments. Each component is chosen for its quality and how it complements the others, creating a perfect harmony of flavors and textures that represent the best of Italian antipasti tradition."
  },
  {
    id: 4,
    name: "Arancini",
    description: "Crispy risotto balls stuffed with mozzarella and peas, served with pomodoro sauce",
    price: 12.95,
    isVegetarian: true,
    image: "https://images.pexels.com/photos/5949888/pexels-photo-5949888.jpeg?auto=compress&cs=tinysrgb&w=800",
    cookingTime: "25 mins",
    servings: 2,
    ingredients: [
      "Arborio rice",
      "Vegetable stock",
      "Fresh mozzarella",
      "Green peas",
      "Parmigiano-Reggiano",
      "Eggs",
      "Breadcrumbs",
      "San Marzano tomatoes",
      "Fresh basil",
      "Onion and garlic"
    ],
    preparation: "Traditional Sicilian arancini made from creamy risotto, cooled and formed into balls around a center of melted mozzarella and sweet peas. Each ball is carefully breaded and fried until golden and crispy outside, while remaining creamy inside. Served with our signature pomodoro sauce made from San Marzano tomatoes."
  }
];

export const mains: (MenuItemType & {
  image: string;
  cookingTime: string;
  servings: number;
  ingredients: string[];
  preparation: string;
})[] = [
  {
    id: 5,
    name: "Osso Buco",
    description: "Slow-braised veal shank with saffron risotto, gremolata, and seasonal vegetables",
    price: 36.95,
    image: "https://images.pexels.com/photos/8753657/pexels-photo-8753657.jpeg?auto=compress&cs=tinysrgb&w=800",
    cookingTime: "3 hours",
    servings: 1,
    ingredients: [
      "Veal shank cross-cuts",
      "Arborio rice",
      "Saffron threads",
      "White wine",
      "Beef stock",
      "Carrots, celery, onions",
      "Lemon zest",
      "Fresh parsley",
      "Garlic",
      "Seasonal vegetables"
    ],
    preparation: "A classic Milanese dish featuring tender veal shanks slowly braised in white wine and aromatic vegetables until fork-tender. The marrow-rich bones create an incredibly flavorful sauce. Served over creamy saffron risotto and topped with traditional gremolata - a bright mixture of lemon zest, garlic, and parsley that cuts through the richness beautifully."
  },
  {
    id: 6,
    name: "Linguine alle Vongole",
    description: "Fresh linguine with littleneck clams, white wine, garlic, parsley, and red pepper flakes",
    price: 28.95,
    image: "https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800",
    cookingTime: "20 mins",
    servings: 1,
    ingredients: [
      "Fresh linguine pasta",
      "Littleneck clams",
      "Dry white wine",
      "Extra virgin olive oil",
      "Fresh garlic",
      "Italian parsley",
      "Red pepper flakes",
      "Cherry tomatoes",
      "Sea salt",
      "Fresh lemon"
    ],
    preparation: "Fresh littleneck clams are steamed in white wine with garlic and herbs, creating a aromatic broth that coats perfectly al dente linguine. The pasta is finished in the clam broth, allowing it to absorb all the oceanic flavors. Finished with fresh parsley, a touch of red pepper heat, and a squeeze of lemon for brightness."
  },
  {
    id: 7,
    name: "Pollo Parmigiana",
    description: "Breaded chicken breast with san marzano tomatoes, mozzarella, and fresh basil over spaghetti",
    price: 24.95,
    image: "https://images.pexels.com/photos/8753659/pexels-photo-8753659.jpeg?auto=compress&cs=tinysrgb&w=800",
    cookingTime: "35 mins",
    servings: 1,
    ingredients: [
      "Free-range chicken breast",
      "Italian breadcrumbs",
      "Fresh mozzarella",
      "San Marzano tomatoes",
      "Parmigiano-Reggiano",
      "Fresh basil",
      "Spaghetti pasta",
      "Eggs",
      "All-purpose flour",
      "Extra virgin olive oil"
    ],
    preparation: "Tender chicken breast is pounded thin, breaded with seasoned Italian breadcrumbs, and pan-fried until golden. Topped with our signature San Marzano tomato sauce, fresh mozzarella, and Parmigiano-Reggiano, then baked until bubbly. Served over perfectly cooked spaghetti and garnished with fresh basil."
  },
  {
    id: 8,
    name: "Eggplant Parmigiana",
    description: "Layers of roasted eggplant, san marzano tomatoes, fresh mozzarella, and basil",
    price: 22.95,
    isVegetarian: true,
    image: "https://images.pexels.com/photos/5949892/pexels-photo-5949892.jpeg?auto=compress&cs=tinysrgb&w=800",
    cookingTime: "45 mins",
    servings: 1,
    ingredients: [
      "Large Italian eggplants",
      "San Marzano tomatoes",
      "Fresh mozzarella",
      "Parmigiano-Reggiano",
      "Fresh basil leaves",
      "Extra virgin olive oil",
      "Garlic",
      "Sea salt",
      "Black pepper",
      "Italian breadcrumbs"
    ],
    preparation: "Thick slices of eggplant are salted, drained, and roasted until tender and golden. Layered with our rich San Marzano tomato sauce, creamy fresh mozzarella, and aged Parmigiano-Reggiano. Baked until bubbling and golden, creating a vegetarian masterpiece that's both hearty and elegant."
  },
  {
    id: 9,
    name: "Branzino alla Griglia",
    description: "Grilled Mediterranean sea bass with lemon, herbs, roasted potatoes, and seasonal vegetables",
    price: 32.95,
    image: "https://images.pexels.com/photos/8753658/pexels-photo-8753658.jpeg?auto=compress&cs=tinysrgb&w=800",
    cookingTime: "25 mins",
    servings: 1,
    ingredients: [
      "Whole Mediterranean sea bass",
      "Fresh lemons",
      "Mixed Mediterranean herbs",
      "Baby potatoes",
      "Seasonal vegetables",
      "Extra virgin olive oil",
      "Sea salt",
      "Fresh rosemary",
      "Garlic",
      "White wine"
    ],
    preparation: "Fresh Mediterranean sea bass is grilled whole over high heat, creating crispy skin while keeping the flesh moist and flaky. Seasoned simply with lemon, herbs, and olive oil to let the fish's natural flavors shine. Accompanied by herb-roasted baby potatoes and a medley of seasonal vegetables."
  },
  {
    id: 10,
    name: "Penne Arrabbiata",
    description: "Penne pasta in spicy tomato sauce with garlic, red peppers, and fresh herbs",
    price: 18.95,
    isVegetarian: true,
    isSpicy: true,
    image: "https://images.pexels.com/photos/4518844/pexels-photo-4518844.jpeg?auto=compress&cs=tinysrgb&w=800",
    cookingTime: "15 mins",
    servings: 1,
    ingredients: [
      "Penne pasta",
      "San Marzano tomatoes",
      "Fresh garlic",
      "Red chili peppers",
      "Extra virgin olive oil",
      "Fresh basil",
      "Italian parsley",
      "Parmigiano-Reggiano",
      "Sea salt",
      "Black pepper"
    ],
    preparation: "A fiery Roman classic featuring al dente penne pasta tossed in a vibrant sauce of San Marzano tomatoes, garlic, and red chili peppers. The sauce is kept simple but bold, allowing the heat and acidity to create a perfect balance. Finished with fresh herbs and a generous grating of Parmigiano-Reggiano."
  }
];

export const desserts: (MenuItemType & {
  image: string;
  cookingTime: string;
  servings: number;
  ingredients: string[];
  preparation: string;
})[] = [
  {
    id: 11,
    name: "Tiramisu",
    description: "Classic Italian dessert with espresso-soaked ladyfingers, mascarpone, and cocoa",
    price: 8.95,
    isVegetarian: true,
    image: "https://images.pexels.com/photos/6880219/pexels-photo-6880219.jpeg?auto=compress&cs=tinysrgb&w=800",
    cookingTime: "30 mins + chilling",
    servings: 1,
    ingredients: [
      "Ladyfinger cookies",
      "Strong espresso coffee",
      "Mascarpone cheese",
      "Fresh eggs",
      "Sugar",
      "Dark cocoa powder",
      "Coffee liqueur",
      "Heavy cream",
      "Vanilla extract",
      "Dark chocolate shavings"
    ],
    preparation: "Our signature tiramisu is made with layers of delicate ladyfingers soaked in strong espresso and coffee liqueur, alternated with a rich mixture of mascarpone, eggs, and sugar. Chilled overnight to allow the flavors to meld, then dusted with premium cocoa powder and finished with dark chocolate shavings."
  },
  {
    id: 12,
    name: "Cannoli Siciliani",
    description: "Crispy shells filled with sweet ricotta, chocolate chips, and candied orange peel",
    price: 7.95,
    isVegetarian: true,
    image: "https://images.pexels.com/photos/8753660/pexels-photo-8753660.jpeg?auto=compress&cs=tinysrgb&w=800",
    cookingTime: "45 mins",
    servings: 2,
    ingredients: [
      "Cannoli shells",
      "Fresh ricotta cheese",
      "Powdered sugar",
      "Mini chocolate chips",
      "Candied orange peel",
      "Vanilla extract",
      "Cinnamon",
      "Pistachios",
      "Powdered sugar for dusting",
      "Marsala wine"
    ],
    preparation: "Traditional Sicilian cannoli featuring crispy, golden shells made fresh daily and filled to order with a smooth ricotta mixture enhanced with vanilla, cinnamon, and mini chocolate chips. Studded with candied orange peel and chopped pistachios, then dusted with powdered sugar for the perfect finish."
  },
  {
    id: 13,
    name: "Panna Cotta",
    description: "Vanilla bean panna cotta with fresh berry compote and mint",
    price: 7.95,
    isVegetarian: true,
    image: "https://images.pexels.com/photos/8753661/pexels-photo-8753661.jpeg?auto=compress&cs=tinysrgb&w=800",
    cookingTime: "20 mins + setting",
    servings: 1,
    ingredients: [
      "Heavy cream",
      "Vanilla bean pods",
      "Sugar",
      "Gelatin",
      "Mixed fresh berries",
      "Berry compote",
      "Fresh mint leaves",
      "Lemon zest",
      "Honey",
      "Balsamic reduction"
    ],
    preparation: "Silky smooth panna cotta infused with real vanilla bean seeds, set to the perfect wobble. Topped with a vibrant compote of seasonal berries cooked with a touch of honey and lemon zest. Garnished with fresh mint and a delicate drizzle of aged balsamic reduction for complexity."
  },
  {
    id: 14,
    name: "Gelato Selection",
    description: "Daily selection of house-made gelato: vanilla, chocolate, pistachio, and strawberry",
    price: 6.95,
    isVegetarian: true,
    image: "https://images.pexels.com/photos/8753662/pexels-photo-8753662.jpeg?auto=compress&cs=tinysrgb&w=800",
    cookingTime: "Made fresh daily",
    servings: 1,
    ingredients: [
      "Whole milk",
      "Heavy cream",
      "Sugar",
      "Egg yolks",
      "Vanilla beans",
      "Belgian chocolate",
      "Sicilian pistachios",
      "Fresh strawberries",
      "Natural flavorings",
      "Stabilizers"
    ],
    preparation: "Our gelato is made fresh daily using traditional Italian methods. Each flavor is crafted with premium ingredients: Madagascar vanilla beans, Belgian chocolate, Sicilian pistachios, and fresh seasonal strawberries. Churned slowly for a dense, creamy texture that's more intense in flavor than regular ice cream."
  }
];

export const beverages: (MenuItemType & {
  image: string;
  cookingTime: string;
  servings: number;
  ingredients: string[];
  preparation: string;
})[] = [
  {
    id: 15,
    name: "Espresso",
    description: "Rich, authentic Italian espresso",
    price: 3.95,
    isVegetarian: true,
    image: "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=800",
    cookingTime: "2 mins",
    servings: 1,
    ingredients: [
      "Premium Italian coffee beans",
      "Filtered water"
    ],
    preparation: "Our espresso is pulled from a carefully selected blend of premium Italian coffee beans, roasted to perfection and ground fresh for each cup. Extracted at the perfect pressure and temperature to create a rich, aromatic shot with a beautiful golden crema on top."
  },
  {
    id: 16,
    name: "Cappuccino",
    description: "Espresso with steamed milk and foam, dusted with cocoa",
    price: 4.95,
    isVegetarian: true,
    image: "https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=800",
    cookingTime: "3 mins",
    servings: 1,
    ingredients: [
      "Premium Italian espresso",
      "Fresh whole milk",
      "Cocoa powder for dusting"
    ],
    preparation: "A perfect balance of rich espresso, velvety steamed milk, and light, airy foam. Our baristas create microfoam with the ideal texture, creating beautiful latte art when possible. Finished with a delicate dusting of premium cocoa powder."
  },
  {
    id: 17,
    name: "House Wine Selection",
    description: "Ask your server about our rotating selection of Italian wines by the glass",
    price: 8.95,
    isVegetarian: true,
    image: "https://images.pexels.com/photos/1407846/pexels-photo-1407846.jpeg?auto=compress&cs=tinysrgb&w=800",
    cookingTime: "Served immediately",
    servings: 1,
    ingredients: [
      "Italian wine varietals",
      "Rotating selection from various regions"
    ],
    preparation: "Our sommelier carefully selects wines from different Italian regions, featuring both well-known and boutique producers. Each wine is stored at optimal temperature and served in appropriate glassware to enhance the tasting experience. Ask your server for today's featured selections."
  },
  {
    id: 18,
    name: "San Pellegrino",
    description: "Sparkling mineral water from Italy",
    price: 3.95,
    isVegetarian: true,
    image: "https://images.pexels.com/photos/1346155/pexels-photo-1346155.jpeg?auto=compress&cs=tinysrgb&w=800",
    cookingTime: "Served chilled",
    servings: 1,
    ingredients: [
      "Natural sparkling mineral water",
      "Natural minerals from Italian springs"
    ],
    preparation: "Authentic San Pellegrino sparkling mineral water sourced from natural springs in Italy. Served ice-cold in chilled glasses with a fresh lemon wedge. The perfect palate cleanser and complement to any Italian meal."
  },
  {
    id: 19,
    name: "Italian Soda",
    description: "Choice of lemon, orange, or blood orange",
    price: 4.95,
    isVegetarian: true,
    image: "https://images.pexels.com/photos/1346155/pexels-photo-1346155.jpeg?auto=compress&cs=tinysrgb&w=800",
    cookingTime: "2 mins",
    servings: 1,
    ingredients: [
      "Sparkling water",
      "Natural fruit syrups",
      "Fresh citrus",
      "Ice",
      "Fresh herbs for garnish"
    ],
    preparation: "Refreshing Italian-style sodas made with sparkling water and natural fruit syrups. Available in classic lemon, sweet orange, or distinctive blood orange flavors. Served over ice with fresh fruit garnish and a sprig of mint."
  }
];