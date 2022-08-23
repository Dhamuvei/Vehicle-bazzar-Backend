var nodemailer = require("nodemailer");

const BuyerMailservice = {
  async buyerMail(req, res) {
    let data = req.body;

    var transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "bikebazzzar@gmail.com",
        pass: "cjcbokqfokrcdcdf",
        
      },
    });

    var mailOptions = {
        from:"bikebazzzar@gmail.com",
        to:data.sellerEmail,
        subject:`Message from ${data.BuyerName}`,
        html:`<h3>Hai ${data.sellerName}</h3>
        <ul>
        <li> Name:${data.BuyerName}</li>
        <li> Number:${data.number}</li>
        <li> Email:${data.Byeremail}</li>
        <li> ${data.iptText}</li>
        </ul>`
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });
  },
};

module.exports = BuyerMailservice;



