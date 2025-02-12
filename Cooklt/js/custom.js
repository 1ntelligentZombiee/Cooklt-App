// Recipe Data - Can be moved to external JSON later
const recipes = [
    {
        id: 1,
        title: "Vegan Buddha Bowl",
        description: "Nutritious bowl with quinoa and fresh vegetables",
        image: "images/Buddha-Bowl.jpg",
        tags: ["vegan", "gluten-free", "lunch", "easy"],
        prepTime: "20 mins"
    },
    {
        id: 2,
        title: "Gluten-Free Pancakes",
        description: "Fluffy pancakes with maple syrup",
        image: "images/free-gluten-panckaes.avif",
        tags: ["gluten-free", "breakfast", "medium"],
        prepTime: "15 mins"
    },
    {
        id: 3,
        title: "Keto Avocado Salad",
        description: "Fresh avocado with cherry tomatoes and olive oil",
        image: "images/keto-avocado-salad.jpg",
        tags: ["keto", "vegetarian", "lunch", "easy"],
        prepTime: "10 mins"
    },
    {
        id: 4,
        title: "Vegan Smoothie Bowl",
        description: "Creamy smoothie bowl topped with granola and fruits",
        image: "images/vegan-smoothie-bowl.jpg",
        tags: ["vegan", "gluten-free", "breakfast", "easy"],
        prepTime: "10 mins"
    },
    {
        id: 5,
        title: "Vegetarian Stir-Fry",
        description: "Colorful vegetable stir-fry with tofu",
        image: "images/vegetarian-stir-fry.webp",
        tags: ["vegetarian", "gluten-free", "dinner", "medium"],
        prepTime: "25 mins"
    },
    {
        id: 6,
        title: "Keto Egg Muffins",
        description: "Cheesy egg muffins with spinach and mushrooms",
        image: "images/keto-egg-muffins.jpg",
        tags: ["keto", "gluten-free", "breakfast", "medium"],
        prepTime: "15 mins"
    },
    {
        id: 7,
        title: "Vegan Chickpea Wrap",
        description: "Wholesome chickpea wrap with hummus and greens",
        image: "images/vegan-chickpea-wrap.webp",
        tags: ["vegan", "lunch", "easy"],
        prepTime: "15 mins"
    },
    {
        id: 8,
        title: "Gluten-Free Brownies",
        description: "Delicious chocolate brownies with almond flour",
        image: "images/gluten-free-brownies.jpg",
        tags: ["gluten-free", "snacks", "medium"],
        prepTime: "30 mins"
    },
    {
        id: 9,
        title: "Keto Chicken Salad",
        description: "Grilled chicken with creamy avocado dressing",
        image: "images/keto-chicken-salad.jpg",
        tags: ["keto", "lunch", "easy"],
        prepTime: "20 mins"
    },
    {
        id: 10,
        title: "Vegetarian Pasta",
        description: "Pasta with roasted vegetables and basil pesto",
        image: "images/vegetarian-pasta.jpg",
        tags: ["vegetarian", "dinner", "medium"],
        prepTime: "25 mins"
    },
    {
        id: 11,
        title: "Vegan Granola Bars",
        description: "Crunchy oat and nut bars with maple syrup",
        image: "images/vegan-granola-bars.jpg",
        tags: ["vegan", "snacks", "medium"],
        prepTime: "20 mins"
    },
    {
        id: 12,
        title: "Gluten-Free Oatmeal",
        description: "Warm oatmeal with fresh berries and honey",
        image: "images/gluten-free-oatmeal.webp",
        tags: ["gluten-free", "breakfast", "easy"],
        prepTime: "10 mins"
    },
    {
        id: 13,
        title: "Keto Zucchini Noodles",
        description: "Low-carb zucchini noodles with pesto sauce",
        image: "images/keto-zucchini-noodles.jpg",
        tags: ["keto", "dinner", "medium"],
        prepTime: "15 mins"
    },
    {
        id: 14,
        title: "Vegetarian Stuffed Peppers",
        description: "Bell peppers stuffed with quinoa and veggies",
        image: "images/vegetarian-stuffed-peppers.jpg",
        tags: ["vegetarian", "dinner", "advanced"],
        prepTime: "35 mins"
    },
    {
        id: 15,
        title: "Vegan Chia Pudding",
        description: "Creamy chia pudding with coconut milk and fruits",
        image: "images/vegan-chia-pudding.webp",
        tags: ["vegan", "gluten-free", "snacks", "easy"],
        prepTime: "5 mins"
    },
    {
        id: 16,
        title: "Gluten-Free Banana Bread",
        description: "Soft banana bread made with almond flour",
        image: "images/gluten-free-banana-bread.jpg",
        tags: ["gluten-free", "snacks", "advanced"],
        prepTime: "40 mins"
    }
];


// App Configuration
const filters = {
    dietary: ['vegan', 'vegetarian', 'gluten-free', 'keto'],
    mealType: ['breakfast', 'lunch', 'dinner', 'snacks'],
    difficulty: ['easy', 'medium', 'advanced']
};

class RecipeApp {
    constructor() {
        this.activeFilters = new Set();
        this.initializeApp();
    }

    initializeApp() {
        this.renderFilters();
        this.renderRecipes();
        this.setupEventListeners();
    }

    renderFilters() {
        const filtersContainer = document.getElementById('filtersContainer');
        let filterHTML = '';

        for (const [category, items] of Object.entries(filters)) {
            filterHTML += `
                <div class="filter-group">
                    <h6 class="text-muted mb-2 fw-bold">${this.capitalize(category)}</h6>
                    ${items.map(item => `
                        <button class="filter-btn btn btn-outline-secondary btn-sm mb-2" 
                                data-category="${category}" 
                                data-value="${item}">
                            ${this.capitalize(item)}
                        </button>
                    `).join('')}
                </div>`;
        }

        filtersContainer.innerHTML = filterHTML;
    }

    renderRecipes() {
        const container = document.getElementById('recipesContainer');
        container.innerHTML = recipes.map(recipe => `
            <div class="col-md-4 col-lg-3">
                <article class="recipe-card" data-tags="${recipe.tags.join(',')}">
                    <img src="${recipe.image}" alt="${recipe.title}" class="recipe-image">
                    <div class="p-3">
                        <h3 class="fw-bold mb-2" style="font-size: 20px">${recipe.title}</h3>
                        <p class="text-muted" style="font-size: 16px">${recipe.description}</p>
                        <div class="d-flex justify-content-between small">
                            <span>${recipe.prepTime}</span>
                            <span>${recipe.tags.map(t => `#${t}`).join(' ')}</span>
                        </div>
                    </div>
                </article>
            </div>
        `).join('');
    }

    updateFilters(value) {
        this.activeFilters.has(value) 
            ? this.activeFilters.delete(value) 
            : this.activeFilters.add(value);
        
        this.filterRecipes();
    }

    filterRecipes() {
        const activeFilters = Array.from(this.activeFilters);
        document.querySelectorAll('.recipe-card').forEach(card => {
            const tags = card.dataset.tags.split(',');
            const matches = activeFilters.every(filter => tags.includes(filter));
            card.parentElement.style.display = matches ? 'block' : 'none';
        });
    }

    capitalize(str) {
        return str.replace(/\b\w/g, l => l.toUpperCase());
    }

    setupEventListeners() {
        document.getElementById('filtersContainer').addEventListener('click', (e) => {
            if (e.target.matches('.filter-btn')) {
                e.target.classList.toggle('active');
                this.updateFilters(e.target.dataset.value);
            }
        });
    }
}

// Initialize Application
document.addEventListener('DOMContentLoaded', () => new RecipeApp());