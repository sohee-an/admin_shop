const path = require("path");

const express = require("express");
const adminController = require("../controllers/admin");

const adminRouter = express.Router();

// 재품을 보여주기 디비저장하기 라우터
// /admin/add-product => GET
adminRouter.get("/add-product", adminController.getAddProduct);

adminRouter.get("/products", adminController.getProducts);

// /admin/add-product => POST
adminRouter.post("/add-product", adminController.postAddProduct);

module.exports = adminRouter;
