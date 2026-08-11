# 🚀 NASA Image Search App

A responsive web application that allows users to search and explore NASA's vast image collection using the **NASA Images API**. Users can enter any keyword such as `Apollo 11`, `Mars`, `Moon`, or `SpaceX` and instantly view related NASA images.

## 🌐 Live Demo

**Live Demo:** Add your deployed project link here

**GitHub:** Add your GitHub repository link here

---

## ✨ Features

* 🔍 Search NASA images using keywords
* 🚀 Fetch real-time data from NASA Images API
* 🖼️ Display multiple images in a responsive gallery
* 📱 Fully responsive design
* ⚡ Fast API requests using Axios
* 📄 Display image titles and descriptions
* ❌ Handle empty search and API errors
* 🎨 Clean and modern dark-themed UI

---

## 🛠️ Technologies Used

* **HTML5** – Website structure
* **CSS3** – Styling and responsive layout
* **JavaScript (ES6+)** – Application logic
* **Axios** – API requests
* **NASA Images API** – NASA image data

---

## 🔗 API Used

This project uses the official NASA Images API.

```text
https://images-api.nasa.gov/search
```

### Example API Request

```text
https://images-api.nasa.gov/search?q=apollo%2011&media_type=image
```

The API returns JSON data containing NASA image information and image URLs.

---

## 📂 Project Structure

```text
NASA-Image-Search/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

---

## ⚙️ How It Works

The application follows this simple workflow:

```text
User enters search keyword
        ↓
JavaScript captures the keyword
        ↓
Axios sends GET request
        ↓
NASA Images API returns JSON
        ↓
Extract collection.items
        ↓
Extract image URL from item.links
        ↓
Create image cards dynamically
        ↓
Display images on the webpage
```

---

## 💻 Core API Code

Axios is used to send the search request:

```javascript
const response = await axios.get(
    "https://images-api.nasa.gov/search",
    {
        params: {
            q: query,
            media_type: "image"
        }
    }
);
```

The image URL is extracted from the API response:

```javascript
const items = response.data.collection.items;

items.forEach(item => {

    const imageUrl = item.links?.[0]?.href;

    console.log(imageUrl);

});
```

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/nasa-image-search.git
```

### 2. Open the project

```bash
cd nasa-image-search
```

### 3. Run the project

Open `index.html` in your browser.

You can also use **VS Code Live Server** for a better development experience.

---

## 🔎 Example Searches

Try searching for:

```text
Apollo 11
Mars
Moon
Earth
Space Shuttle
International Space Station
James Webb
Saturn
Astronaut
```

---

## 📸 Screenshots

Add your project screenshots here:

```markdown
![NASA Image Search Screenshot](./screenshots/home.png)
```

---

## 🎯 Future Improvements

* 🔄 Add pagination / Load More button
* ❤️ Add favorite images feature
* 🔎 Add advanced search filters
* 📥 Add image download option
* 🌙 Add light/dark mode
* 🖼️ Add image preview modal
* 📱 Improve mobile UI
* 🏷️ Add NASA image metadata
* ⚡ Add search suggestions

---

## 📚 What I Learned

Through this project, I learned:

* How to work with third-party REST APIs
* How to send GET requests using Axios
* How to read and understand JSON responses
* How to extract nested API data
* How to dynamically create HTML elements using JavaScript
* How to display API images using `<img>`
* How to handle API errors
* How to build a responsive image gallery

---

## 👨‍💻 Author

**Suraj Kumar**

B.Tech Computer Science & Engineering Student
Aspiring Full Stack Developer

### Skills Used

```text
HTML | CSS | JavaScript | Axios | REST API
```

---

## ⭐ If You Like This Project

If you found this project useful, consider giving the repository a ⭐ on GitHub.

---

## 📄 License

This project is created for educational and learning purposes.
