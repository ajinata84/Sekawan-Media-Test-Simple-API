import express from "express";
import cors from "cors";
import fs from "fs";

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

const dataset = JSON.parse(fs.readFileSync("./dataset.json", "utf-8")).data;

function filterByCategory(cuisine) {
  return dataset.filter((restaurant) =>
    restaurant.establishmentTypeAndCuisineTags.some((tag) =>
      tag.toLowerCase().includes(cuisine.toLowerCase())
    )
  );
}

app.get("/restaurants", (req, res) => {
  const { cuisine } = req.query;

  let filteredRestaurants = dataset;
  if (cuisine) {
    filteredRestaurants = filterByCategory(cuisine);
  }

  const restaurantList = filteredRestaurants.map((restaurant) => ({
    restaurantId: restaurant.restaurantsId,
    id: restaurant.locationId,
    name: restaurant.name,
    image: restaurant.heroImgUrl,
    cuisine: restaurant.establishmentTypeAndCuisineTags[0],
    rating: restaurant.averageRating,
    price: restaurant.priceTag,
    openStatus:
      restaurant.currentOpenStatusCategory === "OPEN" ? "Open" : "Closed",
  }));

  res.json(restaurantList);
});

app.get("/restaurants/:id", (req, res) => {
  const restaurantId = parseInt(req.params.id);
  const restaurant = dataset.find((r) => r.locationId === restaurantId);

  if (!restaurant) {
    return res.status(404).json({ message: "Restaurant not found" });
  }

  const restaurantDetail = {
    id: restaurant.locationId,
    name: restaurant.name,
    rating: restaurant.averageRating,
    price: restaurant.priceTag,
    openStatus: restaurant.currentOpenStatusCategory,
    image: restaurant.heroImgUrl,
    reviews: restaurant.reviewSnippets.reviewSnippetsList.map((snippet) => ({
      text: snippet.reviewText,
      url: snippet.reviewUrl,
    })),
  };

  res.json(restaurantDetail);
});

app.listen(port, () => {
  console.log(`API is running on http://localhost:${port}`);
});
