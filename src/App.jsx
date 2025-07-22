import React from "react";
import WishListFrame from "./components/WishListFrame";
import PlaceListFrame from "./components/PlaceListFrame";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <WishListFrame />
      <PlaceListFrame />
    </div>
  );
}

export default App;