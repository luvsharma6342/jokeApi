import React, { useState } from "react";
import axios from "axios";

const App = () => {
  const [data, setData] = useState("");
  const tellJoke = async () => {
    try {
      const response = await axios.get("https://icanhazdadjoke.com/slack");
      setData(response.data.attachments[0].text);
    } catch (e) {
      alert("There is an error in the API");
    }
  };

  return (
    <div className="h-screen bg-blue-500 flex justify-center items-center">
      <div className="h-1/2 w-1/2 flex flex-col items-center pt-4">
        <h1 className="text-white font-bold text-2xl mb-16">
          Try not to laugh
        </h1>
        <div className="h-[75%] w-[90%] text-center text-lg font-bold">
          {data}
        </div>
        <button
          onClick={tellJoke}
          className="text-white bg-red-500 rounded-md p-2 mb-4"
        >
          Tell me a joke
        </button>
      </div>
    </div>
  );
};

export default App;
