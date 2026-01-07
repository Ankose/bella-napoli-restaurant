// ============================================
// BELLA NAPOLI - COMPLETE MOCK DATA
// ============================================

export const restaurantInfo = {
  name: "Bella Napoli",
  tagline: "Authentic Neapolitan Cuisine in Sant Adrià de Besòs",
  phone: "+34 933 123 456",
  email: "info@bellanapoli.es",
  address: {
    street: "Carrer de Sant Adrià, 123",
    city: "Sant Adrià de Besòs",
    postalCode: "08930",
    region: "Barcelona, Spain"
  },
  coordinates: {
    lat: 41.4301,
    lng: 2.2194
  },
  hours: {
    days: "Tuesday - Sunday",
    lunch: "12:00 PM - 3:30 PM",
    dinner: "7:00 PM - 11:00 PM",
    closed: "Monday"
  },
  socialMedia: {
    instagram: "https://instagram.com/bellanapoli",
    facebook: "https://facebook.com/bellanapoli",
    tripadvisor: "https://tripadvisor.com/bellanapoli"
  }
};

export const chefSpecials = [
  {
    id: 1,
    name: "Ravioli di Zucca e Amaretti",
    price: "16.50",
    description: "Handmade pumpkin ravioli with amaretti cookies, sage butter, Parmigiano",
    image: "https://images.unsplash.com/photo-1587740908075-9e245070dfaa?w=600&q=80"
  }
];

export const menuItems = {
  pizzas: [
    {
      name: "Margherita D.O.P.",
      price: "11.50",
      description: "The queen of pizzas. San Marzano tomatoes, fior di latte mozzarella, fresh basil, extra virgin olive oil",
      ingredients: "Tomato, Mozzarella, Basil",
      tag: "POPULAR"
    },
    {
      name: "Marinara",
      price: "9.50",
      description: "Simple perfection. San Marzano tomatoes, garlic, oregano, EVOO",
      ingredients: "Tomato, Garlic, Oregano",
      tag: "VEGAN"
    },
    {
      name: "Diavola",
      price: "13.50",
      description: "Spicy ventricina salami, fior di latte, San Marzano tomatoes, chili oil",
      ingredients: "Tomato, Mozzarella, Spicy Salami"
    },
    {
      name: "Quattro Formaggi",
      price: "14.50",
      description: "Four cheese masterpiece. Gorgonzola, Parmigiano-Reggiano, mozzarella, fontina",
      ingredients: "4 Italian Cheeses"
    },
    {
      name: "Prosciutto e Funghi",
      price: "14.00",
      description: "Prosciutto cotto, wild mushrooms, mozzarella, truffle oil",
      ingredients: "Ham, Mushrooms, Mozzarella"
    },
    {
      name: "Capricciosa",
      price: "15.00",
      description: "Artichokes, ham, mushrooms, olives, mozzarella",
      ingredients: "Artichokes, Ham, Mushrooms, Olives"
    },
    {
      name: "Bufalina",
      price: "16.50",
      description: "Buffalo mozzarella DOP, cherry tomatoes, arugula, Parmigiano shavings",
      ingredients: "Buffalo Mozzarella, Cherry Tomatoes, Arugula",
      tag: "CHEF'S CHOICE"
    },
    {
      name: "Tartufata",
      price: "18.00",
      description: "Black truffle cream, mozzarella, porcini mushrooms, truffle oil",
      ingredients: "Truffle, Mushrooms, Mozzarella",
      tag: "PREMIUM"
    }
  ],

  pasta: [
    {
      name: "Spaghetti alla Carbonara",
      price: "13.50",
      description: "Roman classic. Guanciale, pecorino romano, egg yolk, black pepper",
      ingredients: "Guanciale, Pecorino, Eggs"
    },
    {
      name: "Penne all'Arrabbiata",
      price: "11.50",
      description: "Fiery tomato sauce with garlic, chili peppers, fresh parsley",
      ingredients: "Tomato, Garlic, Chili",
      tag: "SPICY"
    },
    {
      name: "Lasagna della Nonna",
      price: "14.00",
      description: "Nonna Maria's recipe. Beef ragù, béchamel, Parmigiano, fresh pasta sheets",
      ingredients: "Beef Ragù, Béchamel, Parmigiano",
      tag: "POPULAR"
    },
    {
      name: "Tagliatelle al Tartufo",
      price: "19.00",
      description: "Fresh egg pasta with black truffle, butter, Parmigiano",
      ingredients: "Truffle, Butter, Parmigiano",
      tag: "PREMIUM"
    },
    {
      name: "Ravioli di Ricotta e Spinaci",
      price: "13.00",
      description: "Handmade ravioli filled with ricotta and spinach, sage butter sauce",
      ingredients: "Ricotta, Spinach, Sage"
    },
    {
      name: "Gnocchi alla Sorrentina",
      price: "12.50",
      description: "Potato gnocchi, tomato sauce, mozzarella, basil, baked",
      ingredients: "Gnocchi, Tomato, Mozzarella"
    }
  ],

  antipasti: [
    {
      name: "Bruschetta Classica",
      price: "7.50",
      description: "Toasted bread, fresh tomatoes, garlic, basil, EVOO",
      ingredients: "Bread, Tomatoes, Basil",
      tag: "VEGAN"
    },
    {
      name: "Caprese Salad",
      price: "9.50",
      description: "Buffalo mozzarella DOP, heirloom tomatoes, basil, aged balsamic",
      ingredients: "Buffalo Mozzarella, Tomatoes"
    },
    {
      name: "Arancini Siciliani",
      price: "8.00",
      description: "Fried rice balls filled with ragù and mozzarella (3 pieces)",
      ingredients: "Rice, Meat Ragù, Mozzarella"
    },
    {
      name: "Prosciutto e Melone",
      price: "11.00",
      description: "24-month aged Prosciutto di Parma, fresh cantaloupe",
      ingredients: "Prosciutto di Parma, Melon"
    },
    {
      name: "Calamari Fritti",
      price: "12.50",
      description: "Crispy fried calamari, lemon aioli, arugula",
      ingredients: "Calamari, Lemon"
    },
    {
      name: "Antipasto Misto",
      price: "16.00",
      description: "Selection of Italian meats, cheeses, olives, vegetables (for 2)",
      ingredients: "Assorted Meats & Cheeses"
    }
  ],

  dolci: [
    {
      name: "Tiramisù",
      price: "6.50",
      description: "Classic Italian dessert. Espresso-soaked ladyfingers, mascarpone cream",
      tag: "POPULAR"
    },
    {
      name: "Panna Cotta",
      price: "6.00",
      description: "Vanilla panna cotta with berry compote"
    },
    {
      name: "Cannoli Siciliani",
      price: "7.00",
      description: "Crispy shells filled with sweet ricotta and chocolate chips (2 pieces)"
    },
    {
      name: "Gelato Artigianale",
      price: "5.50",
      description: "Homemade Italian ice cream (ask for daily flavors)"
    },
    {
      name: "Affogato",
      price: "6.50",
      description: "Vanilla gelato drowned in hot espresso"
    },
    {
      name: "Torta della Nonna",
      price: "6.50",
      description: "Grandmother's cake with custard filling and pine nuts"
    }
  ],

  beverages: [
    {
      name: "Espresso",
      price: "2.50",
      description: "Italian espresso from Lavazza"
    },
    {
      name: "Cappuccino",
      price: "3.50",
      description: "Espresso with steamed milk and foam"
    },
    {
      name: "Acqua Minerale",
      price: "2.50",
      description: "Still or sparkling water (750ml)"
    },
    {
      name: "Coca-Cola / Fanta",
      price: "3.00",
      description: "Soft drinks"
    },
    {
      name: "Limonata",
      price: "4.00",
      description: "Homemade lemonade with fresh lemons"
    },
    {
      name: "House Wine",
      price: "4.50",
      description: "Red or white Italian wine (glass)"
    },
    {
      name: "Peroni / Moretti",
      price: "4.00",
      description: "Italian beer (330ml)"
    },
    {
      name: "Limoncello",
      price: "5.00",
      description: "Traditional Italian lemon liqueur"
    }
  ]
};

export const features = [
  {
    id: 1,
    icon: "UtensilsCrossed",
    title: "Traditional Recipes",
    description: "Authentic family recipes passed down through generations from Naples"
  },
  {
    id: 2,
    icon: "Flame",
    title: "Wood-Fired Oven",
    description: "Hand-built by Neapolitan artisans, reaching 485°C for perfect pizza"
  },
  {
    id: 3,
    icon: "Leaf",
    title: "Fresh Ingredients",
    description: "Daily imported San Marzano tomatoes, buffalo mozzarella, and Italian flour"
  }
];

export const timeline = [
  { year: "1952", event: "Nonna Maria opens her trattoria in Naples" },
  { year: "1985", event: "Giuseppe begins training in the family kitchen" },
  { year: "2010", event: "Giuseppe masters pizza-making in Naples" },
  { year: "2015", event: "Bella Napoli opens in Sant Adrià de Besòs" },
  { year: "2023", event: "Awarded Best Italian Restaurant in Barcelona" }
];

export const testimonials = [
  {
    id: 1,
    text: "Absolutely authentic! The Margherita pizza transported me back to Naples.",
    author: "Maria S.",
    role: "Google Reviews",
    rating: 5,
    stars: 5,
    quote: "Absolutely authentic! The Margherita pizza transported me back to Naples.",
    name: "Maria S.",
    platform: "Google Reviews",
    date: "December 2025"
  },
  {
    id: 2,
    text: "Best Italian food in Barcelona. The pasta carbonara is incredible!",
    author: "David L.",
    role: "TripAdvisor",
    rating: 5,
    stars: 5,
    quote: "Best Italian food in Barcelona. The pasta carbonara is incredible!",
    name: "David L.",
    platform: "TripAdvisor",
    date: "November 2025"
  },
  {
    id: 3,
    text: "Nonna's lasagna recipe is perfection. Feels like eating at an Italian home.",
    author: "Sophie M.",
    role: "Google Reviews",
    rating: 5,
    stars: 5,
    quote: "Nonna's lasagna recipe is perfection. Feels like eating at an Italian home.",
    name: "Sophie M.",
    platform: "Google Reviews",
    date: "October 2025"
  }
];

export const galleryImages = [
  {
    url: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=80",
    caption: "Margherita Pizza"
  },
  {
    url: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=800&q=80",
    caption: "Fresh Pasta"
  },
  {
    url: "https://images.unsplash.com/photo-1567337710282-00832b415979?w=800&q=80",
    caption: "Caprese Salad"
  },
  {
    url: "https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?w=800&q=80",
    caption: "Tiramisu"
  },
  {
    url: "https://images.unsplash.com/photo-1590947132387-155cc02f3212?w=800&q=80",
    caption: "Our Kitchen"
  },
  {
    url: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80",
    caption: "Italian Ingredients"
  }
];

export const weeklySpecials = [
  {
    name: "Ravioli di Zucca e Amaretti",
    price: "16.50",
    description: "Handmade pumpkin ravioli with amaretti cookies, sage butter, Parmigiano",
    image: "https://images.unsplash.com/photo-1587740908075-9e245070dfaa?w=600&q=80"
  }
];

export const timeSlots = {
  lunch: ["12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00"],
  dinner: ["19:00", "19:30", "20:00", "20:30", "21:00", "21:30", "22:00", "22:30"]
};

export const guestOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export const menuCategories = ["Pizza", "Pasta", "Antipasti", "Dolci", "Bevande"];