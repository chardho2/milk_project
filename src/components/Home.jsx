import { useState } from "react";
import logo from "../assets/logo.png.jpeg";

function Home() {
  const pricePerLiter = 50;
  const appDownloadPath = "/hindupur-milk.apk";

  const [quantity, setQuantity] = useState(1);
  const [showCheckout, setShowCheckout] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");

  const totalPrice = quantity * pricePerLiter;

  const getLocation = () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const coords = `https://www.google.com/maps?q=${position.coords.latitude},${position.coords.longitude}`;
        setLocation(coords);
        alert("Location captured successfully.");
      },
      () => {
        alert("Location permission denied. Please allow location access.");
      }
    );
  };

  const placeOrder = () => {
    const trimmedName = name.trim();
    const normalizedPhone = phone.replace(/\D/g, "");

    if (!trimmedName) {
      alert("Please enter your name.");
      return;
    }

    if (normalizedPhone.length !== 10) {
      alert("Please enter a valid 10-digit phone number.");
      return;
    }

    if (!location) {
      alert("Please share your live location.");
      return;
    }

    const message = [
      "Hindupur Milk Order",
      `Name: ${trimmedName}`,
      `Quantity: ${quantity} Liter`,
      `Total: Rs ${totalPrice}`,
      `Customer Phone: ${normalizedPhone}`,
      `Location: ${location}`,
    ].join("\n");

    const whatsappNumber = "918520818781";
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <section className="text-center py-12 px-4">
        <img src={logo} alt="Logo" className="mx-auto w-32 mb-6" />
        <h2 className="text-3xl md:text-4xl font-bold text-green-800">
          Pure and Fresh Milk Delivered Daily
        </h2>
        <p className="mt-4 text-gray-600 max-w-xl mx-auto">
          Fresh cow milk delivered directly to your home in Hindupur.
        </p>
        <a
          href={appDownloadPath}
          download
          className="inline-block mt-6 bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition"
        >
          Download App
        </a>
      </section>

      <section className="flex flex-col items-center py-10 px-4">
        <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-md text-center">
          <h3 className="text-2xl font-semibold mb-2">Fresh Cow Milk</h3>
          <p className="text-gray-600 mb-4">Rs 50 per Liter</p>

          {!showCheckout ? (
            <button
              onClick={() => setShowCheckout(true)}
              className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition"
            >
              Add to Cart
            </button>
          ) : (
            <>
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

              <p className="text-lg font-semibold mb-3">Total: Rs {totalPrice}</p>

              <input
                type="text"
                placeholder="Enter Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border p-2 rounded mb-3"
              />

              <input
                type="tel"
                placeholder="Enter Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full border p-2 rounded mb-3"
              />

              <button
                onClick={getLocation}
                className="bg-blue-500 text-white px-4 py-2 rounded mb-3 w-full"
              >
                Share Live Location
              </button>

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
    </>
  );
}

export default Home;
