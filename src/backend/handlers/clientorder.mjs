import clientOrderSchema from "../model/clientcart.mjs";
function ClientOrder(req, res) {
  console.log("posting to client order");
  const clientorder = clientOrderSchema;
  let firstname = req.body.firstname;
  let lastname = req.body.lastname;
  let phonenumber = req.body.phonenumber;
  let deilverydata = req.body.deilverydate;
  let deilverytime = req.body.deilverytime;
  let cart = req.body.cart;

  let client_order = {
    firstname,
    lastname,
    phonenumber,
    deilverydata,
    deilverytime,
    cart,
  };

  if (
    ((firstname == "firstname" || null) &&
      (lastname == "lastname" || null) &&
      (phonenumber == "phonenumber" || null)) ||
    cart === null
  ) {
    console.log("user/cart data information is empty");
  } else {
    clientorder
      .insertMany(client_order)
      .then((result) => {
        if (result) {
          console.log("client cart adding succsess");
          res.json({
            message: "client cart adding succsess",
            succsess: true,
            usercart: result,
          });
        }
      })
      .catch((err) => {
        console.log("client cart adding failed");
        res.json({ message: "client cart adding failed", succsess: false });
      });
  }
}

export default { ClientOrder };