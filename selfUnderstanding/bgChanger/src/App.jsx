import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [bgColor, setbgColor] = useState("Lavender");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: bgColor }}
    >
      <div className="fixed flex flex-wrap justify-center top-4 inset-x-0">
        <div className="flex flex-wrap justify-center shadow-lg bg-white  gap-3 px-4 py-2 rounded-md">
          <button
            onClick={() => setbgColor("red")}
            className="outline-none px-3 py-2 rounded-full shadow-2xl text-white"
            style={{ background: "red" }}
          >
            Red
          </button>

          <button
            onClick={() => setbgColor("blue")}
            className="outline-none px- py-2 rounded-full shadow-2xl text-white"
            style={{ background: "blue" }}
          >
            Blue
          </button>

          <button
            onClick={() => setbgColor("green")}
            className="outline-none px-3 py-2 rounded-full shadow-2xl text-white"
            style={{ background: "green" }}
          >
            Green
          </button>

          <button
            onClick={() => setbgColor("yellow")}
            className="outline-none px-3 py-2 rounded-full shadow-2xl text-black"
            style={{ background: "yellow" }}
          >
            Yellow
          </button>

          <button
            onClick={() => setbgColor("purple")}
            className="outline-none px-3 py-2 rounded-full shadow-2xl text-white"
            style={{ background: "purple" }}
          >
            Purple
          </button>

          <button
            onClick={() => setbgColor("orange")}
            className="outline-none px-3 py-2 rounded-full shadow-2xl text-white"
            style={{ background: "orange" }}
          >
            Orange
          </button>

          <button
            onClick={() => setbgColor("pink")}
            className="outline-none px-3 py-2 rounded-full shadow-2xl text-white"
            style={{ background: "pink" }}
          >
            Pink
          </button>

          <button
            onClick={() => setbgColor("black")}
            className="outline-none px-3 py-2 rounded-full shadow-2xl text-white"
            style={{ background: "black" }}
          >
            Black
          </button>
        </div>
      </div>

      <div className="fixed flex flex-wrap items-center left-4 bg-white gap-3 px-3 py-2 rounded-md top-1/2 -translate-y-1/2 shadow-lg ">
        <div className="flex flex-wrap flex-col item-center gap-3">
          <button
            onClick={() => setbgColor("#ef4444")}
            className="outline-none px-4 py-2 rounded-full shadow-lg text-white"
            style={{ background: "#ef4444" }}
          >
            Red
          </button>

          <button
            onClick={() => setbgColor("#3b82f6")}
            className="outline-none px-4 py-2 rounded-full shadow-lg text-white"
            style={{ background: "#3b82f6" }}
          >
            Blue
          </button>

          <button
            onClick={() => setbgColor("#10b981")}
            className="outline-none px-4 py-2 rounded-full shadow-lg text-white"
            style={{ background: "#10b981" }}
          >
            Green
          </button>

          <button
            onClick={() => setbgColor("#facc15")}
            className="outline-none px-4 py-2 rounded-full shadow-lg text-black"
            style={{ background: "#facc15" }}
          >
            Yellow
          </button>

          <button
            onClick={() => setbgColor("#8b5cf6")}
            className="outline-none px-4 py-2 rounded-full shadow-lg text-white"
            style={{ background: "#8b5cf6" }}
          >
            Purple
          </button>

          <button
            onClick={() => setbgColor("#f97316")}
            className="outline-none px-4 py-2 rounded-full shadow-lg text-white"
            style={{ background: "#f97316" }}
          >
            Orange
          </button>

          <button
            onClick={() => setbgColor("#ec4899")}
            className="outline-none px-4 py-2 rounded-full shadow-lg text-white"
            style={{ background: "#ec4899" }}
          >
            Pink
          </button>

          <button
            onClick={() => setbgColor("#0f172a")}
            className="outline-none px-4 py-2 rounded-full shadow-lg text-white"
            style={{ background: "#0f172a" }}
          >
            Navy
          </button>
        </div>
      </div>
      <div className="fixed flex flex-wrap items-center right-4 bg-white gap-3 px-3 py-2 rounded-md top-1/2 -translate-y-1/2 shadow-lg ">
        <div className="flex flex-wrap flex-col item-center gap-3">
          <button
            onClick={() => setbgColor("#22c55e")}
            className="outline-none px-4 py-2 rounded-full shadow-lg text-white"
            style={{ background: "#22c55e" }}
          >
            Emerald
          </button>

          <button
            onClick={() => setbgColor("#f43f5e")}
            className="outline-none px-4 py-2 rounded-full shadow-lg text-white"
            style={{ background: "#f43f5e" }}
          >
            Rose
          </button>

          <button
            onClick={() => setbgColor("#eab308")}
            className="outline-none px-4 py-2 rounded-full shadow-lg text-black"
            style={{ background: "#eab308" }}
          >
            Amber
          </button>

          <button
            onClick={() => setbgColor("#14b8a6")}
            className="outline-none px-4 py-2 rounded-full shadow-lg text-white"
            style={{ background: "#14b8a6" }}
          >
            Teal
          </button>

          <button
            onClick={() => setbgColor("#f472b6")}
            className="outline-none px-4 py-2 rounded-full shadow-lg text-white"
            style={{ background: "#f472b6" }}
          >
            Fuchsia
          </button>

          <button
            onClick={() => setbgColor("#0ea5e9")}
            className="outline-none px-4 py-2 rounded-full shadow-lg text-white"
            style={{ background: "#0ea5e9" }}
          >
            Sky
          </button>

          <button
            onClick={() => setbgColor("#8b5cf6")}
            className="outline-none px-4 py-2 rounded-full shadow-lg text-white"
            style={{ background: "#8b5cf6" }}
          >
            Violet
          </button>

          <button
            onClick={() => setbgColor("#f97316")}
            className="outline-none px-4 py-2 rounded-full shadow-lg text-white"
            style={{ background: "#f97316" }}
          >
            Carrot
          </button>
        </div>
      </div>
      <div className="fixed flex flex-wrap justify-center bottom-4 inset-x-0">
        <div className="flex flex-wrap justify-center shadow-lg bg-white  gap-3 px-4 py-2 rounded-md">
          <button
            onClick={() => setbgColor("#f87171")}
            className="outline-none px-4 py-2 rounded-full shadow-lg text-white"
            style={{ background: "#f87171" }}
          >
            Coral
          </button>

          <button
            onClick={() => setbgColor("#34d399")}
            className="outline-none px-4 py-2 rounded-full shadow-lg text-white"
            style={{ background: "#34d399" }}
          >
            Mint
          </button>

          <button
            onClick={() => setbgColor("#60a5fa")}
            className="outline-none px-4 py-2 rounded-full shadow-lg text-white"
            style={{ background: "#60a5fa" }}
          >
            Light Blue
          </button>

          <button
            onClick={() => setbgColor("#fbbf24")}
            className="outline-none px-4 py-2 rounded-full shadow-lg text-black"
            style={{ background: "#fbbf24" }}
          >
            Gold
          </button>

          <button
            onClick={() => setbgColor("#a78bfa")}
            className="outline-none px-4 py-2 rounded-full shadow-lg text-white"
            style={{ background: "#a78bfa" }}
          >
            Lavender
          </button>

          <button
            onClick={() => setbgColor("#22d3ee")}
            className="outline-none px-4 py-2 rounded-full shadow-lg text-black"
            style={{ background: "#22d3ee" }}
          >
            Cyan
          </button>

          <button
            onClick={() => setbgColor("#f472b6")}
            className="outline-none px-4 py-2 rounded-full shadow-lg text-white"
            style={{ background: "#f472b6" }}
          >
            Hot Pink
          </button>

          <button
            onClick={() => setbgColor("#c084fc")}
            className="outline-none px-4 py-2 rounded-full shadow-lg text-white"
            style={{ background: "#c084fc" }}
          >
            Orchid
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
