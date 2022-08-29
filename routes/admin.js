const path = require("path");

const express = require("express");
const productsController = require("../controllers/products");

const router = express.Router();

// 재품을 보여주기 디비저장하기 라우터
// /admin/add-product => GET
router.get("/add-product", productsController.getAddProduct);

// /admin/add-product => POST
router.post("/add-product", productsController.postAddProduct);

module.exports = router;
