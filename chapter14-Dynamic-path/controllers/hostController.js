const Home = require("../models/home");


exports.getAddHome = (req,res,next) => {
res.render('host/addHome', {pageTitle: 'add Home to airbnb' , currentPage: 'addHome'})
}


exports.getHostHomes = (req, res, next) => {
  Home.fetchAll((registeredHomes) =>
    res.render("host/host-home-list", {
      registeredHomes: registeredHomes,
      pageTitle: "Host Home List",
      currentPage: "host-homes",
    })
  );
};


exports.postAddHome = (req,res,next) => {
  console.log("Home Registration successful for:",req.body );
  const {houseName, price, location, photoUrl} = req.body;
const home = new Home(houseName, price, location, photoUrl)
 home.save();
 
  res.render('host/home-added', {pageTitle: 'Home add sucessfully' ,currentPage: 'homeAdded'})
}




