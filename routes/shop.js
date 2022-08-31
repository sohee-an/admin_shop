const path = require("path");

const express = require("express");

const shopRouter = express.Router();
const shopController = require("../controllers/shop");

shopRouter.get("/", shopController.getIndex);

shopRouter.get("/products", shopController.getProducts);

shopRouter.delete("/products");

shopRouter.get("/products/:productId", shopController.getProduct);

shopRouter.get("/cart", shopController.getCart);

shopRouter.get("/orders", shopController.getOrders);

shopRouter.get("/checkout", shopController.getCheckout);

module.exports = shopRouter;
