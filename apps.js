
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const gallery = document.getElementById("gallery");
const loading = document.getElementById("loading");

searchBtn.addEventListener("click", searchImages);
async function searchImages() {
  const query = searchInput.value.trim();
  document.querySelector(".para").innerHTML = "";

  if (!query) {
    document.querySelector(".para").innerHTML = "Please enter something to search!";
    return;
  }

  gallery.innerHTML = "";
  loading.innerHTML = "Loading...";

  try {
    const response = await axios.get("https://images-api.nasa.gov/search", {
      params: { q: query, media_type: "image" },
    });

    const items = response.data.collection.items;
    loading.innerHTML = "";

    if (items.length === 0) {
      gallery.innerHTML = "<h2>No images found.</h2>";
      return;
    }

    items.forEach((item) => {
      const data = item.data?.[0];
      const imageUrl = item.links?.[0]?.href;

      if (!imageUrl) return;

      const card = document.createElement("div");
      card.classList.add("card");
      card.innerHTML = `
                <img
                    src="${imageUrl}"
                    alt="${data?.title || "NASA Image"}"
                    >

                <div class="card-content">
                    <h3>
                        ${data?.title || "NASA Image"}
                    </h3>
                    <p>
                        ${
                          data?.description
                            ? data.description.substring(0, 150) + "..."
                            : "No description available."
                        }
                    </p>
                </div>
            `;

      gallery.appendChild(card);
    });
  } catch (error) {
    console.error(error);
    loading.innerHTML = "Something went wrong. Please try again.";
  }
}
searchImages();
