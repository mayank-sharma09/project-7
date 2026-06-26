# 🛍️ ShopArc – Modern eCommerce Website

ShopArc is a modern, responsive eCommerce web application built using **React.js**. It provides a seamless shopping experience with product browsing, advanced filtering, searching, sorting, shopping cart management, and an intuitive user interface.

---

## 📌 Features

### 🔐 User Authentication
- Simple login interface
- User session management
- Logout functionality

### 🛒 Shopping Experience
- Browse all available products
- View detailed product information
- Add products to cart
- Update product quantity
- Remove items from cart
- View total cart value
- Cart drawer with real-time updates

### 🔍 Product Search & Filtering
- Search products by name
- Filter by category
- Filter by price range
- Filter by minimum rating
- Clear all filters instantly

### 📊 Product Sorting
- Default sorting
- Price: Low to High
- Price: High to Low
- Top Rated
- Alphabetical (A-Z)

### 💬 Interactive UI
- Product detail modal
- Toast notifications
- Responsive navigation
- Sidebar filters
- Clean product grid layout

### 📱 Responsive Design
- Desktop optimized
- Tablet friendly
- Mobile responsive
- Adaptive layouts
- Mobile-friendly controls

---

# 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| React.js | Frontend Framework |
| JavaScript (ES6+) | Application Logic |
| CSS Modules | Component Styling |
| CSS3 | Responsive Design |
| React Hooks | State Management |
| Fake Store API (or similar) | Product Data |

---

# 📂 Project Structure

```
ShopArc/
│
├── components/
│   ├── Navbar
│   ├── Sidebar
│   ├── LoginPage
│   ├── ProductGrid
│   ├── ProductModal
│   ├── CartDrawer
│   └── Toast
│
├── hooks/
│   ├── useCart
│   └── useProducts
│
├── App.jsx
├── App.module.css
├── index.css
└── ...
```

---

# 🚀 Main Functionalities

## Product Management

- Fetches products using a custom hook
- Displays products in a responsive grid
- Opens detailed product modal on click

---

## Search

Users can search products instantly using the search bar.

---

## Category Filter

Products can be filtered based on categories.

---

## Price Filter

Users can specify:

- Minimum Price
- Maximum Price

to narrow down results.

---

## Rating Filter

Products can be filtered based on minimum customer rating.

---

## Sorting Options

Users can sort products by:

- Default
- Price (Ascending)
- Price (Descending)
- Highest Rating
- Product Name (A-Z)

---

## Shopping Cart

Features include:

- Add products
- Increase quantity
- Decrease quantity
- Remove products
- Real-time total calculation

---

## Notifications

A toast notification confirms when a product has been added to the cart.

---

# 🎨 UI Highlights

- Modern purple color theme
- Clean minimalist design
- Responsive product cards
- Interactive hover effects
- Smooth user experience
- Mobile optimized layouts

---

# 📱 Responsive Design

The application is optimized for:

- Desktop
- Laptop
- Tablet
- Mobile Devices

Responsive breakpoints ensure a consistent experience across all screen sizes.

---

# 📦 Installation

Clone the repository:

```bash
git clone https://github.com/yourusername/shoparc.git
```

Navigate into the project:

```bash
cd shoparc
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

---

# 📸 Screenshots

Add screenshots here.

Example:

```
screenshots/
├── Login.png
├── Home.png
├── Product.png
├── Cart.png
└── Mobile.png
```

---

# 🔮 Future Improvements

- User registration
- Wishlist
- Product reviews
- Payment gateway integration
- Order history
- Admin dashboard
- Dark mode
- Product recommendations
- Checkout page
- Inventory management

---

# 👨‍💻 Author

**Mayank Sharma**

Frontend Developer | UI/UX Designer

---

# 📄 License

This project is created for educational and portfolio purposes.