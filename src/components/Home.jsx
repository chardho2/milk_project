import { useState } from "react";
import logo from "../assets/logo.png.jpeg";

function Home() {
  const pricePerLiter = 50;

  const [quantity, setQuantity] = useState(1);
  const [showCheckout, setShowCheckout] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");

  const totalPrice = quantity * pricePerLiter;

  // 📍 Get Live Location
  const getLocation = () => {
    if (!navigator.geolocation) {
      alert("Geolocation not supported by your browser");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const coords = `https://www.google.com/maps?q=${position.coords.latitude},${position.coords.longitude}`;
        setLocation(coords);
        alert("Location captured successfully ✅");
      },
      () => {
        alert("Location permission denied ❌ Please allow location.");
      }
    );
  };

  // 🟢 Place Order
  const placeOrder = () => {
    if (!name) {
      alert("Please enter your name");
      return;
    }

    if (!phone) {
      alert("Please enter phone number");
      return;
    }

    if (!location) {
      alert("Please share live location");
      return;
    }

    const message = `🥛 Hindupur Milk Order
Name: ${name}
Quantity: ${quantity} Liter
Total: ₹${totalPrice}
Customer Phone: ${phone}
Location: ${location}`;

    const whatsappNumber = "919391126693"; // Owner Number with country code

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(url, "_blank");
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-100 to-green-100">

      {/* NAVBAR */}
      <nav className="flex justify-between items-center px-6 py-4 bg-white shadow-md">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Hindupur Milk" className="w-12 h-12 rounded-full" />
          <h1 className="text-xl font-bold text-green-700">Hindupur Milk</h1>
        </div>
      </nav>

      {/* HERO */}
      <section className="text-center py-12 px-4">
        <img src={logo} alt="Logo" className="mx-auto w-32 mb-6" />
        <h2 className="text-3xl md:text-4xl font-bold text-green-800">
          Pure & Fresh Milk Delivered Daily 🥛
        </h2>
        <p className="mt-4 text-gray-600 max-w-xl mx-auto">
          Fresh cow milk delivered directly to your home in Hindupur.
        </p>
      </section>

      {/* PRODUCT SECTION */}
      <section className="flex flex-col items-center py-10 px-4">
        <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-md text-center">

          <h3 className="text-2xl font-semibold mb-2">Fresh Cow Milk</h3>
          <p className="text-gray-600 mb-4">₹50 per Liter</p>

          {!showCheckout ? (
            <button
              onClick={() => setShowCheckout(true)}
              className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition"
            >
              Add to Cart
            </button>
          ) : (
            <>
              {/* Quantity */}
              <div className="flex justify-center items-center gap-4 my-4">
                <button
                  onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                  className="bg-gray-300 px-3 py-1 rounded"
                >
                  -
                </button>

                <span className="text-lg font-bold">{quantity}</span>

                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="bg-gray-300 px-3 py-1 rounded"
                >
                  +
                </button>
              </div>

              <p className="text-lg font-semibold mb-3">
                Total: ₹{totalPrice}
              </p>

              {/* Name */}
              <input
                type="text"
                placeholder="Enter Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border p-2 rounded mb-3"
              />

              {/* Phone */}
              <input
                type="tel"
                placeholder="Enter Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full border p-2 rounded mb-3"
              />

              {/* Location */}
              <button
                onClick={getLocation}
                className="bg-blue-500 text-white px-4 py-2 rounded mb-3 w-full"
              >
                Share Live Location
              </button>

              {/* Place Order */}
              <button
                onClick={placeOrder}
                className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition w-full"
              >
                Place Order on WhatsApp
              </button>
            </>
          )}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="mt-auto bg-white py-4 text-center shadow-inner">
        <p className="text-gray-600">
          © {new Date().getFullYear()} Hindupur Milk. All Rights Reserved.
        </p>
      </footer>

    </div>
  );
}

export default Home;