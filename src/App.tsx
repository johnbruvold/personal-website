import { useState } from "react";
import "./App.css";
import InventoryList from "./Components/inventoryList";
import ItemDescription from "./Components/itemDescriptions";
import type { Item } from "./Components/inventoryList";

function App() {
  var Menus = {
    General: [{
      itemName: "About Me",
      attribuites:{YR:"2nd Year",UNI:"UC Berkeley"},
      description: "dsaf",
      image: "",
    },],
    Experience: [
      {
        itemName: "Browhawn Lab",attribuites: {START:"08/25 ",POS:"Researcher",link:"https/google.com"},image: "labcoat2.png",
        description: "Researching the structure and function of membrane channels present in mammalian neurons.Exploring tool development and protein engineering of membrane tension sensors. Developing skills in cell culture of mammalian cell lines and strengthening understanding of fluorescent microscopy techniques. Created a Python pipeline to handle imaging data.",
      },{
        itemName: "BrainHub @ Berkeley",attribuites:{START:"08/25 ", POS:"Co-Founder"},
        description: "",image: "Speech.png",
      },
    ],
    Skills: [],
    Projects: [],
  };

  const [currentMenu, setCurrentMenu] = useState("General");
  const [currentItem, setCurrentItem] = useState(Menus["General"][0] as Item);
  const handleSelectItem = (item: Item) => {
    setCurrentItem(item);
  };
  return (
    <>
      <body className="blur-[0.75px] bg-[#926A25] mask-t-to-90% mask-t-from-70%  mask-size-[100px_2.75px] font-mono brightness-115 font-black overflow-hidden ">
      <div className="border-2 mix-blend-overlay absolute inset-4 mask-exclude  mask-y-to-5% "></div>
      <div className="animate-scroll w-screen h-10 blur-[35px] bg-white/45 mix-blend-overlay absolute top-0 left-0 z-3"></div>
        <div className="bg-[#926A25] absolute top-2 left-2 -mt-3 ml-2 size-min">
          <h1 className="text-left font-stretch-[23.66%] mix-blend-overlay opacity-55">
            {currentMenu}
          </h1>
        </div>
        <div className="absolute opacity-55 mix-blend-overlay inset-4 mt-7 mb-3  inline-grid grid-cols-5 grid-rows-1">
          <div className="col-span-2">
            <InventoryList
              items={Menus[currentMenu as keyof {}]}
              onSelectItem={handleSelectItem}
            ></InventoryList>
          </div>
          <div className="col-span-3">
            <ItemDescription item={currentItem as Item}></ItemDescription>
          </div>
        </div>
        <div className=" absolute left-1/16 right-1/16 bottom-1 grid grid-cols-4 grid-rows-1 gap-2 justify-items-center">
          {Object.keys(Menus).map((menu) => (
            <span
              key={menu}
              className="size-min border-2 border-transparent bg-[#926A25]"
              onClick={() => {
                setCurrentMenu(menu);
              }}
            >
              <p className=" mix-blend-overlay opacity-75 hover:border-white  hover:bg-white/50">
                {menu}
              </p>
            </span>
          ))}
        </div>
      </body>
    </>
  );
}

export default App;
