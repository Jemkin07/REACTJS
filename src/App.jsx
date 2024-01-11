import { useState } from "react";
import React from "react";

function Counter() {
  var [a, b] = useState(0);
  return (
    <div className="w-full h-screen bg-zinc-950">
      <div className="text-white p-10 text-center text-5xl">{a}</div>
      <div class="flex justify-center items-center ">
        <button
          onClick={() => b(a + 1)}
          class="bg-blue-500 text-white  px-4 py-2 rounded hover:bg-green-600"
        >
          Button
        </button>
      </div>
    </div>
  );
}

export default Counter;
