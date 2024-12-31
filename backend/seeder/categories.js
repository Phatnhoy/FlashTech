const categories = [
    {
        name: 'Smartphones',
        description: 'Category for smartphones and related accessories.',
        image: 'images/smartphones-category.png',
        attrs: [
            { key: 'Brand', value: ['Apple', 'Samsung', 'OnePlus'] },
            { key: 'OS', value: ['iOS', 'Android'] },
        ],
    },
    {
        name: 'Laptops',
        description: 'Category for laptops and notebooks.',
        image: 'images/laptops-category.png',
        attrs: [
            { key: 'Brand', value: ['Dell', 'HP', 'Lenovo'] },
            { key: 'RAM', value: ['8GB', '16GB', '32GB'] },
        ],
    },
    {
        name: 'Tablets',
        description: 'Tablets and their accessories.',
        image: 'images/tablets-category.png',
        attrs: [
            { key: 'Brand', value: ['Apple', 'Samsung', 'Microsoft'] },
            { key: 'Storage', value: ['64GB', '128GB', '256GB'] },
        ],
    },
    {
        name: 'Wearables',
        description: 'Smartwatches and fitness trackers.',
        image: 'images/wearables-category.png',
        attrs: [
            { key: 'Brand', value: ['Fitbit', 'Garmin', 'Apple'] },
            { key: 'Type', value: ['Smartwatch', 'Fitness Tracker'] },
        ],
    },
    {
        name: 'Accessories',
        description: 'Tech accessories like chargers, cases, and more.',
        image: 'images/accessories-category.png',
        attrs: [
            { key: 'Type', value: ['Charger', 'Case', 'Cable'] },
        ],
    },
    {
        name: 'Monitors',
        description: 'High-resolution monitors for work, gaming, and media.',
        image: 'images/monitors-category.png',
        attrs: [
            { key: 'Brand', value: ['Dell', 'Samsung', 'LG', 'ASUS'] },
            { key: 'Screen Size', value: ['24-inch', '27-inch', '32-inch'] },
            { key: 'Resolution', value: ['Full HD', '4K', '1440p'] },
        ],
    },
]

module.exports = categories
