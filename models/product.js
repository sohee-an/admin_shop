const fs = require("fs");
const path = require("path");

const p = path.join(
  path.dirname(process.mainModule.filename),
  "data",
  "products.json"
);
// 공통부분
const getProductsFromFile = (cb) => {
  fs.readFile(p, (err, fileContent) => {
    // 파일에 아무것도 없어서 err나면 [] 리턴
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(fileContent));
    }
  });
};

module.exports = class Product {
  constructor(title, imageUrl, price, description) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }
  //function save
  save() {
    this.id = Math.random().toString();
    getProductsFromFile((products) => {
      products.push(this);
      console.log(this);
      fs.writeFile(p, JSON.stringify(products), (err) => {
        console.log(err);
      });
    });

    fs.readFile(p, (err, fileContent) => {});
  }

  //모든 제품 가져오기
  static fetchAll(cb) {
    getProductsFromFile(cb);
  }
  static findById(id, cb) {
    getProductsFromFile((products) => {
      const productId = products.find((p) => p.id === id);
      cb(productId);
    });
  }
};
