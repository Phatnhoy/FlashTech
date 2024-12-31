const products = [
    {
        name: 'iPhone 15 Pro',
        description: 'The latest iPhone with advanced features and top-tier performance.',
        category: 'Smartphones',
        count: 50,
        price: 999.99,
        rating: 4.8,
        reviewsNumber: 9,
        reviews: [],
        attrs: [
            { key: 'Brand', value: 'Apple' },
            { key: 'OS', value: 'iOS' },
            { key: 'Storage', value: '256GB' }
        ],
        images: [
            { path: 'images/iphone-15-pro.jpg', altText: 'iPhone 15 Pro front view' },
            { path: 'images/iphone-15-pro-back.jpg', altText: 'iPhone 15 Pro back view' }
        ]
    },
    {
        name: 'Samsung Galaxy S23',
        description: 'A flagship smartphone with a powerful camera and sleek design.',
        category: 'Smartphones',
        count: 70,
        price: 899.99,
        rating: 4.7,
        reviewsNumber: 90,
        reviews: [],
        attrs: [
            { key: 'Brand', value: 'Samsung' },
            { key: 'OS', value: 'Android' },
            { key: 'Storage', value: '128GB' }
        ],
        images: [
            { path: 'images/samsung-galaxy-s23.jpg', altText: 'Samsung Galaxy S23 front view' }
        ]
    },
    {
        name: 'OnePlus 11',
        description: 'High-performance smartphone with a fast charging feature.',
        category: 'Smartphones',
        count: 60,
        price: 799.99,
        rating: 4.5,
        reviewsNumber: 75,
        reviews: [],
        attrs: [
            { key: 'Brand', value: 'OnePlus' },
            { key: 'OS', value: 'Android' },
            { key: 'Storage', value: '256GB' }
        ],
        images: [
            { path: 'images/oneplus-11.jpg', altText: 'OnePlus 11 smartphone' }
        ]
    },
    {
        name: 'Dell XPS 13',
        description: 'A powerful and sleek laptop with an Intel Core i7 processor and 16GB RAM.',
        category: 'Laptops',
        count: 30,
        price: 1299.99,
        rating: 4.7,
        reviewsNumber: 80,
        reviews: [],
        attrs: [
            { key: 'Brand', value: 'Dell' },
            { key: 'RAM', value: '16GB' },
            { key: 'Processor', value: 'Intel Core i7' }
        ],
        images: [
            { path: 'images/dell-xps-13.jpg', altText: 'Dell XPS 13 laptop' }
        ]
    },
    {
        name: 'HP Spectre x360',
        description: 'Versatile 2-in-1 laptop with touch-screen and high-end specs.',
        category: 'Laptops',
        count: 40,
        price: 1499.99,
        rating: 4.8,
        reviewsNumber: 100,
        reviews: [],
        attrs: [
            { key: 'Brand', value: 'HP' },
            { key: 'RAM', value: '16GB' },
            { key: 'Processor', value: 'Intel Core i5' }
        ],
        images: [
            { path: 'images/hp-spectre-x360.jpg', altText: 'HP Spectre x360 laptop' }
        ]
    },
    {
        name: 'MacBook Air M2',
        description: 'Apple’s ultra-light laptop with the latest M2 chip.',
        category: 'Laptops',
        count: 50,
        price: 1499.99,
        rating: 4.9,
        reviewsNumber: 150,
        reviews: [],
        attrs: [
            { key: 'Brand', value: 'Apple' },
            { key: 'RAM', value: '8GB' },
            { key: 'Processor', value: 'Apple M2' }
        ],
        images: [
            { path: 'images/macbook-air-m2.jpg', altText: 'MacBook Air M2' }
        ]
    },
    {
        name: 'iPad Pro 12.9',
        description: 'Apple’s top-tier tablet with advanced graphics and processing power.',
        category: 'Tablets',
        count: 60,
        price: 1099.99,
        rating: 4.9,
        reviewsNumber: 140,
        reviews: [],
        attrs: [
            { key: 'Brand', value: 'Apple' },
            { key: 'Storage', value: '512GB' },
            { key: 'Display', value: '12.9-inch' }
        ],
        images: [
            { path: 'images/ipad-pro-12-9.jpg', altText: 'iPad Pro 12.9-inch tablet' }
        ]
    },
    {
        name: 'Samsung Galaxy Tab S8 Ultra',
        description: 'High-end tablet with a large screen and productivity features.',
        category: 'Tablets',
        count: 55,
        price: 999.99,
        rating: 4.6,
        reviewsNumber: 120,
        reviews: [],
        attrs: [
            { key: 'Brand', value: 'Samsung' },
            { key: 'Storage', value: '256GB' },
            { key: 'Display', value: '14.6-inch' }
        ],
        images: [
            { path: 'images/samsung-galaxy-tab-s8-ultra.jpg', altText: 'Samsung Galaxy Tab S8 Ultra' }
        ]
    },
    {
        name: 'Lenovo Tab P11',
        description: 'A budget-friendly tablet with good performance and a large screen.',
        category: 'Tablets',
        count: 70,
        price: 299.99,
        rating: 4.2,
        reviewsNumber: 60,
        reviews: [],
        attrs: [
            { key: 'Brand', value: 'Lenovo' },
            { key: 'Storage', value: '128GB' },
            { key: 'Display', value: '11-inch' }
        ],
        images: [
            { path: 'images/lenovo-tab-p11.jpg', altText: 'Lenovo Tab P11' }
        ]
    },
    {
        name: 'Fitbit Versa 4',
        description: 'Smartwatch with advanced fitness tracking and health monitoring.',
        category: 'Wearables',
        count: 45,
        price: 199.99,
        rating: 4.4,
        reviewsNumber: 80,
        reviews: [],
        attrs: [
            { key: 'Brand', value: 'Fitbit' },
            { key: 'Type', value: 'Smartwatch' },
            { key: 'Connectivity', value: 'Bluetooth' }
        ],
        images: [
            { path: 'images/fitbit-versa-4.jpg', altText: 'Fitbit Versa 4 smartwatch' }
        ]
    },
    {
        name: 'Garmin Fenix 7',
        description: 'High-end smartwatch for athletes with GPS and health metrics.',
        category: 'Wearables',
        count: 30,
        price: 799.99,
        rating: 4.8,
        reviewsNumber: 100,
        reviews: [],
        attrs: [
            { key: 'Brand', value: 'Garmin' },
            { key: 'Type', value: 'Smartwatch' },
            { key: 'Features', value: 'GPS, Heart Rate Monitor' }
        ],
        images: [
            { path: 'images/garmin-fenix-7.jpg', altText: 'Garmin Fenix 7 smartwatch' }
        ]
    },
    {
        name: 'Apple Watch Ultra',
        description: 'Premium smartwatch with advanced tracking and rugged design.',
        category: 'Wearables',
        count: 25,
        price: 799.99,
        rating: 4.9,
        reviewsNumber: 150,
        reviews: [],
        attrs: [
            { key: 'Brand', value: 'Apple' },
            { key: 'Type', value: 'Smartwatch' },
            { key: 'Connectivity', value: 'GPS + Cellular' }
        ],
        images: [
            { path: 'images/apple-watch-ultra.jpg', altText: 'Apple Watch Ultra on wrist' }
        ]
    },
    {
        name: 'Anker PowerCore 10000',
        description: 'Compact power bank with a capacity of 10,000mAh for fast charging.',
        category: 'Accessories',
        count: 100,
        price: 29.99,
        rating: 4.6,
        reviewsNumber: 200,
        reviews: [],
        attrs: [
            { key: 'Type', value: 'Charger' },
            { key: 'Capacity', value: '10,000mAh' }
        ],
        images: [
            { path: 'images/anker-powercore.jpg', altText: 'Anker PowerCore 10000 power bank' }
        ]
    },
    {
        name: 'iPhone Case',
        description: 'Durable and stylish protective case for iPhone models.',
        category: 'Accessories',
        count: 150,
        price: 15.99,
        rating: 4.5,
        reviewsNumber: 180,
        reviews: [],
        attrs: [
            { key: 'Type', value: 'Case' },
            { key: 'Material', value: 'Silicone' }
        ],
        images: [
            { path: 'images/iphone-case.jpg', altText: 'iPhone case' }
        ]
    },
    {
        name: 'USB-C Cable',
        description: 'High-quality USB-C charging cable, 6 feet long.',
        category: 'Accessories',
        count: 200,
        price: 12.99,
        rating: 4.3,
        reviewsNumber: 250,
        reviews: [],
        attrs: [
            { key: 'Type', value: 'Cable' },
            { key: 'Length', value: '6 feet' }
        ],
        images: [
            { path: 'images/usb-c-cable.jpg', altText: 'USB-C charging cable' }
        ]
    },
    {
        name: "Product1 Lenovo Comp1 Name Lorem ipsum dolor sit amet",
        description:
            "Product Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsa ducimus architecto explicabo id accusantium nihil exercitationem autem porro esse.",
        count: 5,
        price: 100,
        category: "Computers",
        images: [
            { path: "/images/games-category.png" },
            { path: "/images/monitors-category.png" },
            { path: "/images/tablets-category.png" },
        ],
        rating: 5,
        reviewsNumber: 5,
        reviews: [],
        attrs: [{ key: "color", value: "blue" }],
    },
    {
        name: "Product2 Lenovo Comp2 Name Lorem ipsum dolor sit amet",
        description:
            "Product Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsa ducimus architecto explicabo id accusantium nihil exercitationem autem porro esse.",
        count: 5,
        price: 100,
        category: "Computers",
        images: [
            { path: "/images/games-category.png" },
            { path: "/images/monitors-category.png" },
            { path: "/images/tablets-category.png" },
        ],
        rating: 5,
        reviewsNumber: 5,
        reviews: [],
        attrs: [
            { key: "color", value: "black" },
            { key: "RAM", value: "1 TB" },
        ],
    },
    {
        name: "Product3 Dell Comp Name Lorem ipsum dolor sit amet",
        description:
            "Product Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsa ducimus architecto explicabo id accusantium nihil exercitationem autem porro esse.",
        count: 5,
        price: 100,
        category: "Computers",
        images: [
            { path: "/images/games-category.png" },
            { path: "/images/monitors-category.png" },
            { path: "/images/tablets-category.png" },
        ],
        rating: 5,
        reviewsNumber: 5,
        reviews: [],
        attrs: [
            { key: "color", value: "black" },
            { key: "RAM", value: "1 TB" },
        ],
    },
    {
        name: "Product4 Tablet Name Lorem ipsum dolor sit amet",
        description:
            "Product Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsa ducimus architecto explicabo id accusantium nihil exercitationem autem porro esse.",
        count: 5,
        price: 100,
        category: "Tablets",
        images: [
            { path: "/images/games-category.png" },
            { path: "/images/monitors-category.png" },
            { path: "/images/tablets-category.png" },
        ],
        rating: 5,
        reviewsNumber: 5,
        reviews: [],
    },
    {
        name: "Product5 Tablet Name Lorem ipsum dolor sit amet",
        description:
            "Product Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsa ducimus architecto explicabo id accusantium nihil exercitationem autem porro esse.",
        count: 10,
        price: 200,
        category: "Tablets",
        images: [
            { path: "/images/monitors-category.png" },
            { path: "/images/games-category.png" },
            { path: "/images/tablets-category.png" },
        ],
        rating: 5,
        reviewsNumber: 6,
        reviews: [],
    },
    {
        name: "Product6 Tablet Name Lorem ipsum dolor sit amet",
        description:
            "Product Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsa ducimus architecto explicabo id accusantium nihil exercitationem autem porro esse.",
        count: 15,
        price: 300,
        category: "Tablets",
        images: [
            { path: "/images/tablets-category.png" },
            { path: "/images/monitors-category.png" },
            { path: "/images/games-category.png" },
        ],
        rating: 4,
        reviewsNumber: 7,
        reviews: [],
    },
    {
        name: "Product7 Tablet Name Lorem ipsum dolor sit amet",
        description:
            "Product Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsa ducimus architecto explicabo id accusantium nihil exercitationem autem porro esse.",
        count: 20,
        price: 400,
        category: "Tablets",
        images: [
            { path: "/images/games-category.png" },
            { path: "/images/tablets-category.png" },
            { path: "/images/monitors-category.png" },
        ],
        rating: 4,
        reviewsNumber: 8,
        reviews: [],
    },
    {
        name: "Product8 Tablet Name Lorem ipsum dolor sit amet",
        description:
            "Product Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsa ducimus architecto explicabo id accusantium nihil exercitationem autem porro esse.",
        count: 25,
        price: 500,
        category: "Tablets",
        images: [
            { path: "/images/monitors-category.png" },
            { path: "/images/games-category.png" },
            { path: "/images/tablets-category.png" },
        ],
        rating: 3,
        reviewsNumber: 9,
        reviews: [],
    },
    {
        name: "Product9 Monitor Name Lorem ipsum dolor sit amet",
        description:
            "Product Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsa ducimus architecto explicabo id accusantium nihil exercitationem autem porro esse.",
        count: 5,
        price: 100,
        category: "Monitors",
        images: [
            { path: "/images/games-category.png" },
            { path: "/images/monitors-category.png" },
            { path: "/images/tablets-category.png" },
        ],
        rating: 5,
        reviewsNumber: 5,
        reviews: [],
    },
    {
        name: "Product10 Monitor Name Lorem ipsum dolor sit amet",
        description:
            "Product Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsa ducimus architecto explicabo id accusantium nihil exercitationem autem porro esse.",
        count: 10,
        price: 200,
        category: "Monitors",
        images: [
            { path: "/images/monitors-category.png" },
            { path: "/images/games-category.png" },
            { path: "/images/tablets-category.png" },
        ],
        rating: 5,
        reviewsNumber: 6,
        reviews: [],
    },
    {
        name: "Product11 Monitor Name Lorem ipsum dolor sit amet",
        description:
            "Product Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsa ducimus architecto explicabo id accusantium nihil exercitationem autem porro esse.",
        count: 15,
        price: 300,
        category: "Monitors",
        images: [
            { path: "/images/tablets-category.png" },
            { path: "/images/monitors-category.png" },
            { path: "/images/games-category.png" },
        ],
        rating: 4,
        reviewsNumber: 7,
        reviews: [],
    },
    {
        name: "Product12 Monitor Name Lorem ipsum dolor sit amet",
        description:
            "Product Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsa ducimus architecto explicabo id accusantium nihil exercitationem autem porro esse.",
        count: 20,
        price: 400,
        category: "Monitors",
        images: [
            { path: "/images/games-category.png" },
            { path: "/images/tablets-category.png" },
            { path: "/images/monitors-category.png" },
        ],
        rating: 4,
        reviewsNumber: 8,
        reviews: [],
    },
    {
        name: "Product13 Monitor Name Lorem ipsum dolor sit amet",
        description:
            "Product Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsa ducimus architecto explicabo id accusantium nihil exercitationem autem porro esse.",
        count: 25,
        price: 500,
        category: "Monitors",
        images: [
            { path: "/images/monitors-category.png" },
            { path: "/images/games-category.png" },
            { path: "/images/tablets-category.png" },
        ],
        rating: 3,
        reviewsNumber: 9,
        reviews: [],
    },
]

module.exports = products
