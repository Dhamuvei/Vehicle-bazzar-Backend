const routers = {
  SellerAuth: require("./SellerAuth.rout"),
  Sellerdata: require("./SellerRoute"),
  BuyerAuth: require("./BuyerAuth.route"),
  BuyerData: require("./BuyerRout"),
  feedBack:require("./FeedBackRoute"),
  BuyerMailService:require("./BuyerMail.Route")
};

module.exports = routers;
