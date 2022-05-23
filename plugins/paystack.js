const paystack = {
  name: "payWithPaystack",
  payWithPaystack(email, amount) {
    let handler = PaystackPop.setup({
      key: "pk_test_269c4c16ec764db0ec100083f3d09e89e7f991fc",
      email: email,
      amount: amount * 100,
      ref: "" + Math.floor(Math.random() * 1000000000 + 1),
      onClose: function () {
        alert("Window closed.");
      },
      callback: function (response) {
        let message = "Payment complete! Reference: " + response.reference;
        alert(message);
      },
    });
    handler.openIframe();
  },
};

export default ({ app }, inject) => {
  inject("paystack", paystack);
};
