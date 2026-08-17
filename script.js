/**
 * 242 Pre-loaded Sri Lankan Foods Database
 * Extracted and Categorized from the provided food list
 */
const foodDatabase = [
  "Rice, Basmati, Boiled", "Rice, Keeri Samba, Boiled", "Rice, Red Kekulu, Boiled", "Rice, Samba, Boiled", 
  "Rice, White Kekulu, Boiled", "Rice, White Nadu, Boiled", "Fried Rice", "Yellow Rice", "Milk Rice, White", 
  "Milk Rice, Red", "Bun", "Brown Bread", "Sandwich Bread", "White Bread", "Chinese Rolls", "Pastry", 
  "Mc Donald's Big Mac Burger", "Icing Cake", "Butter Cake", "Chocolate Cake", "Cheese Cake", 
  "Pepperoni Pizza - Pizza Hut", "Sausage Pizza - Pizza Hut", "Cheese Pizza - Pizza Hut", "Chapathi", 
  "Paratha", "Thosai", "Naan", "Coconut Roti", "Vegetable Rotti", "Chicken Kottu Roti", "Fried Noodles", 
  "Boiled Noodles", "Instant Noodles", "String Hoppers, White", "String Hoppers, Red", "Hoppers", 
  "Pasta Boiled", "Corn Flakes", "Samaposha Ball", "Oats", "Pittu", "Boiled Cassava With Salt", "Potato, Boiled", 
  "Sweet Potato, Boiled", "Sweet Potato Curry", "Potato Curry, White", "Tempered Potato", "French Fries", 
  "Cassava Chips", "Chickpea (Boiled)", "Cowpea (Boiled)", "Green Grams Boiled", "Dhal Curry, Thick", 
  "Dhal Curry, Watery", "Dhal Curry, Spinach", "Soya Curry", "Tofu", "Mixtures", "Dhal Vadai", 
  "Boiled Bread Fruit", "Boiled Jackfruit", "Breadfruit Curry", "Baby Jackfruit Curry", "Cucumber Salad", 
  "Mallum", "Parsley", "Snake Gourd And Onion Salad", "Vegetable Salad", "Beans Curry", "Beetroot Curry", 
  "Brinjal Curry", "Vegetable Soup", "Carrot Curry", "Stir Fried Water Spinach (Kankun)", "Mushroom Tempered", 
  "Okra White Curry", "Cabbage White Curry", "Pumpkin Curry", "Ash Plantain, White Curry", "Kohila Curry", 
  "Drumstick (Muranga) Curry", "Leeks Curry", "Bittergourd Curry", "Radish Curry", "Snakegourd Curry", 
  "Mushroom Curry", "Tomato Salad", "Mixed Boiled Vegetables", "Vegetable Chop Suey", "Beetroot, Boiled", 
  "Carrot, Boiled", "Okra, Boiled", "Pumpkin, Boiled", "Cabbage, Boiled", "Spinach, Boiled", "Beans, Boiled", 
  "Snake Gourd, Boiled", "Anoda", "Green Apple", "Red Apple, China Fuji", "Red Apple, Red Delicious", 
  "Red Apple, Royal Gala", "Avocado", "Bael Fruit", "Ambul Banana", "Anamalu Banana", "Cavendish Banana", 
  "Kolikuttu Banana", "Red Banana", "Black-Purple Berries (Ma-Dang)", "Dates", "Gooseberry", "Fresh Black Grapes", 
  "Fresh Green Grapes", "Fresh Red Grapes", "Guava", "Ripen Jackfruit", "Lemon", "Lime", "Naran", "Bud Mango", 
  "Karthakolomban Mango", "Tjc Mango", "Vilad Mango", "Mangosteen", "Ceylon Olive", "Orange", "Papaya", 
  "Passion Fruit", "Pear", "Pineapple", "Pomegranate", "Raisins", "Rambutan", "Rose Apple", "Sapota", 
  "Soursop", "Star Fruit", "Strawberry", "Tamarind", "Water Melon", "Wood Apple", "Fruit Salad", 
  "Fish Ambul Thiyal", "Chili Fish Curry", "Fish, White Curry", "Canned Salmon (Mackeral) Curry", 
  "Cuttlefish Curry", "Prawn Curry", "Dry Fish Curry", "Sprats Curry", "Maldive Fish", "Devilled Fish", 
  "Deep Fried Fish", "Cuttlefish Tempered", "Prawn Crackers", "Chicken Curry", "Devilled Chicken", "Fried Chicken", 
  "Mc Donalds Chicken Nuggets", "Kfc Fried Chicken", "Chicken Sausage", "Meat Balls Curry", "Egg, Boiled", 
  "Egg Bull's Eye", "Omelet", "Pork Salami", "Cooked Ground Pork", "Cooked Pork Bratwurst", "Pork Belly", 
  "Pork Ham", "Streaky Bacon Cooked", "Beef Curry", "Roasted Mutton", "Full Cream Liquid Milk / Fresh Milk", 
  "Low Fat Fresh Milk", "Full Cream Milk Tea", "Non-Fat Milk Tea", "Malted Drink (Nestomalt)", "Butter", 
  "Cheddar Cheese", "Mozerella Cheese", "Paneer (Cottage Cheese)", "Ghee Oil", "Yoghurt", "Curd", 
  "Vanilla Ice Cream", "Chocolate Ice Cream", "Flavored Milk", "Cappuccino", "Sweetened Condensed Milk", 
  "Heavy Cream", "Almond", "Cashews", "Peanuts", "Sesame Seeds", "Mustard Seeds", "Kottamba", "Raw Coconut", 
  "Coconut Sambol", "Coconut Milk - 1St Milk", "Coconut Milk - 2Nd Milk", "Coconut Milk Gravy (Kiri Hodi)", 
  "Dessicated Coconut", "Peanut Butter", "Cashew Curry", "Tomato Sauce", "Chili Sauce", "Salad Dressing", 
  "Chutney", "Soy Sauce", "Oyster Sauce", "Mayonnaise Sauce", "Salt", "Sugar", "Hard Candy", "Milk Chocolate", 
  "Honey", "Bread Pudding", "Doughnuts", "Brown Sugar", "Coconut Water", "Immature Coconut Water", "Lime Juice", 
  "Orange Juice", "King Coconut Water", "Kola Kanda", "Water", "Plain Tea", "Black Coffee", "Coca Cola", 
  "Coke Zero", "Sprite", "Pepsi", "Cordial", "Beer", "Wine", "Whiskey", "Plain Biscuit", "Cream Biscuit", "Cracker Biscuit"
];

// Helper to assign categories automatically
function categorizeFood(name) {
  const n = name.toLowerCase();
  if (["rice", "kottu", "noodles", "bread", "roti", "rotti", "thosai", "chapathi", "paratha", "naan", "string hopper", "hopper", "pittu", "cassava", "potato", "pasta", "flakes", "oats", "samaposha", "burger", "pizza", "roll", "pastry", "french fries", "bun", "biscuit"].some(k => n.includes(k))) return "Rice, Starch & Bakery";
  if (["curry", "mallum", "salad", "chop suey", "soup", "tempered", "kankun", "spinach", "okra", "cabbage", "pumpkin", "plantain", "kohila", "drumstick", "leeks", "bittergourd", "radish", "snakegourd", "mushroom", "dhal", "parippu", "soya", "tofu", "chickpea", "cowpea", "gram", "jackfruit", "breadfruit", "vadai", "mixture", "beetroot", "carrot", "beans"].some(k => n.includes(k))) return "Curries, Pulses & Vegetables";
  if (["fish", "salmon", "cuttlefish", "prawn", "sprats", "maldive", "chicken", "nuggets", "sausage", "meat", "egg", "pork", "salami", "bratwurst", "bacon", "beef", "mutton", "omelet", "bull"].some(k => n.includes(k))) return "Meat, Fish & Eggs";
  if (["apple", "avocado", "bael", "banana", "berries", "dates", "gooseberry", "grapes", "guava", "jackfruit", "lemon", "lime", "naran", "mango", "mangosteen", "olive", "orange", "papaya", "passion", "pear", "pineapple", "pomegranate", "raisins", "rambutan", "sapota", "soursop", "star fruit", "strawberry", "tamarind", "water melon", "wood apple", "fruit salad", "anoda"].some(k => n.includes(k))) return "Fruits";
  if (["milk", "tea", "coffee", "nestomalt", "butter", "cheese", "paneer", "ghee", "yoghurt", "curd", "ice cream", "cream", "cappuccino"].some(k => n.includes(k))) return "Dairy & Desserts";
  if (["almond", "cashew", "peanuts", "sesame", "mustard", "kottamba", "coconut", "sambol", "kiri hodi", "sauce", "dressing", "chutney", "salt", "sugar", "candy", "chocolate", "honey", "pudding", "doughnut"].some(k => n.includes(k))) return "Condiments, Nuts & Sweets";
  if (["water", "juice", "cola", "coke", "sprite", "pepsi", "cordial", "beer", "wine", "whiskey", "kola kanda"].some(k => n.includes(k))) return "Beverages";
  return "Rice, Starch & Bakery";
}

// Generate Portions and Macros based on item type
function getPortionsForFood(name) {
  const n = name.toLowerCase();
  if (n.includes("rice")) {
    return [
      { label: "1 Serving Spoon (100g)", kcal: 130, carbs: 28, protein: 2.5, fat: 0.4 },
      { label: "1 Standard Plate (200g)", kcal: 260, carbs: 56, protein: 5.0, fat: 0.8 },
      { label: "1 Heaped Plate (350g)", kcal: 455, carbs: 98, protein: 8.8, fat: 1.4 }
    ];
  } else if (n.includes("curry") || n.includes("dhal") || n.includes("parippu")) {
    return [
      { label: "1 Table Spoon (30g)", kcal: 35, carbs: 4, protein: 2, fat: 1 },
      { label: "1 Curry Ladle (80g)", kcal: 95, carbs: 12, protein: 5, Full: 3 },
      { label: "1 Medium Bowl (150g)", kcal: 180, carbs: 22, protein: 9, fat: 6 }
    ];
  } else if (n.includes("chicken") || n.includes("beef") || n.includes("pork") || n.includes("fish")) {
    return [
      { label: "Small Piece / Scoop (60g)", kcal: 110, carbs: 0, protein: 16, fat: 4 },
      { label: "Medium Serving (120g)", kcal: 220, carbs: 0, protein: 32, fat: 8 },
      { label: "Large Portion (200g)", kcal: 360, carbs: 0, protein: 52, fat: 14 }
    ];
  } else {
    return [
      { label: "Small Serving (50g)", kcal: 65, carbs: 8, protein: 2, fat: 2 },
      { label: "Standard Portion (100g)", kcal: 130, carbs: 16, protein: 4, fat: 4 },
      { label: "Large Portion (200g)", kcal: 260, carbs: 32, protein: 8, fat: 8 }
    ];
  }
}

// Transform raw list into rich object catalog
const catalog = foodDatabase.map((name, index) => ({
  id: index + 1,
  name: name,
  category: categorizeFood(name),
  portions: getPortionsForFood(name)
}));

// State management
let activeSelectedFood = null;
let activePortionIndex = 0;
const recallLog = [];

// Initialize Page
document.addEventListener("DOMContentLoaded", () => {
  renderCatalog(catalog);
});

// Filter Engine
function handleFilter() {
  const query = document.getElementById("searchInput").value.toLowerCase();
  const category = document.getElementById("categoryFilter").value;

  const filtered = catalog.filter(item => {
    const matchesQuery = item.name.toLowerCase().includes(query);
    const matchesCat = category === "All" || item.category === category;
    return matchesQuery && matchesCat;
  });

  renderCatalog(filtered);
}

// Render Food Cards
function renderCatalog(items) {
  const grid = document.getElementById("foodGrid");
  const countSpan = document.getElementById("catalogCount");
  
  grid.innerHTML = "";
  countSpan.textContent = items.length;

  items.forEach(item => {
    const card = document.createElement("div");
    card.className = "food-item-card";
    card.onclick = () => openModal(item);
    card.innerHTML = `
      <div>
        <span class="cat-badge">${item.category}</span>
        <h4>${item.name}</h4>
      </div>
    `;
    grid.appendChild(card);
  });
}

// Modal Engine
function openModal(foodItem) {
  activeSelectedFood = foodItem;
  activePortionIndex = 0;

  document.getElementById("modalFoodTitle").textContent = foodItem.name;
  document.getElementById("portionQty").value = "1.0";
  
  const portionList = document.getElementById("portionList");
  portionList.innerHTML = "";

  foodItem.portions.forEach((portion, idx) => {
    const div = document.createElement("div");
    div.className = `portion-option ${idx === 0 ? 'selected' : ''}`;
    div.onclick = () => selectPortionOption(idx);
    div.id = `portion-opt-${idx}`;
    div.innerHTML = `
      <span><strong>${portion.label}</strong></span>
      <span>${portion.kcal} kcal</span>
    `;
    portionList.appendChild(div);
  });

  document.getElementById("portionModal").classList.add("active");
}

function selectPortionOption(idx) {
  activePortionIndex = idx;
  document.querySelectorAll(".portion-option").forEach(el => el.classList.remove("selected"));
  document.getElementById(`portion-opt-${idx}`).classList.add("selected");
}

function closeModal() {
  document.getElementById("portionModal").classList.remove("active");
}

// Confirm Entry and Log
function confirmAddFood() {
  if (!activeSelectedFood) return;

  const mealOccasion = document.getElementById("mealOccasion").value;
  const qty = parseFloat(document.getElementById("portionQty").value) || 1.0;
  const portion = activeSelectedFood.portions[activePortionIndex];

  const entry = {
    id: Date.now(),
    name: activeSelectedFood.name,
    meal: mealOccasion,
    portionLabel: portion.label,
    qty: qty,
    kcal: Math.round(portion.kcal * qty),
    carbs: Math.round(portion.carbs * qty * 10) / 10,
    protein: Math.round(portion.protein * qty * 10) / 10,
    fat: Math.round(portion.fat * qty * 10) / 10
  };

  recallLog.push(entry);
  updateRecallUI();
  closeModal();
}

// Update Log View and Calculation Engine
function updateRecallUI() {
  const logDiv = document.getElementById("recallLog");
  const badgeCount = document.getElementById("totalItemsLoggedCount");

  badgeCount.textContent = `${recallLog.length} Items Logged`;

  if (recallLog.length === 0) {
    logDiv.innerHTML = `
      <div class="empty-state">
        <p>No food or drink items logged yet.</p>
        <small>Click any food item on the left to begin your 24-hour recall.</small>
      </div>`;
  } else {
    logDiv.innerHTML = "";
    recallLog.forEach(item => {
      const row = document.createElement("div");
      row.className = "log-row";
      row.innerHTML = `
        <div class="log-row-details">
          <span class="log-tag">${item.meal}</span><br>
          <strong>${item.name}</strong><br>
          <small>${item.qty}x ${item.portionLabel} — ${item.kcal} kcal</small>
        </div>
        <button class="delete-btn" onclick="deleteEntry(${item.id})">Remove</button>
      `;
      logDiv.appendChild(row);
    });
  }

  // Recalculate daily totals
  const totals = recallLog.reduce((acc, cur) => {
    acc.kcal += cur.kcal;
    acc.carbs += cur.carbs;
    acc.protein += cur.protein;
    acc.fat += cur.fat;
    return acc;
  }, { kcal: 0, carbs: 0, protein: 0, fat: 0 });

  document.getElementById("totalKcal").textContent = `${totals.kcal} kcal`;
  document.getElementById("totalCarbs").textContent = `${totals.carbs.toFixed(1)} g`;
  document.getElementById("totalProtein").textContent = `${totals.protein.toFixed(1)} g`;
  document.getElementById("totalFat").textContent = `${totals.fat.toFixed(1)} g`;
}

function deleteEntry(id) {
  const index = recallLog.findIndex(item => item.id === id);
  if (index !== -1) {
    recallLog.splice(index, 1);
    updateRecallUI();
  }
}
