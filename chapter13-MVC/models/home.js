
const fs = require('fs');
const path = require('path');
const rootDir = require('../utils/pathUtil');




module.exports = class Home {
 constructor(houseName, price, location, photoUrl) {
  this.houseName = houseName;
  this.price = price;   
  this.location = location;
  this.photoUrl = photoUrl;

 }

 save() {
 Home.fetchAll(registeredHomes => {
  registeredHomes.push(this);
 const  homeDataPath  = path.join(rootDir,'data', 'homes.json');
 fs.writeFile(homeDataPath, JSON.stringify(registeredHomes), error => {
 
 })
  })

 }
 static fetchAll(callback) {
  const  homeDataPath  = path.join(rootDir,'data', 'homes.json');
  fs.readFile(homeDataPath, (err, data) => {
    
    callback(!err ? JSON.parse(data) : []);
   

    
  });

 }
}