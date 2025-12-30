import { useState } from "react";
import "./App.css";
import InventoryList from "./Components/inventoryList";
import ItemDescription from "./Components/itemDescriptions";
import type { Item } from "./Components/inventoryList";
function App() {
  var Menus = {
    General: [{ itemName: "f", attribuites: ["dafads", "sadfasdfs"], description: "dsaf",image:[] }],
    Experience: [],
    Skills: [],
    Projects: [],
  };

  const [currentMenu, setCurrentMenu] = useState("General");
  const [currentItem, setCurrentItem] = useState({});
  const handleSelectItem = (item: Item) => {
    setCurrentItem(item);
  };
  return (
    <>
      <body className="bg-[#926A25]">
        <div className="flex flex-col absolute inset-4 border font-mono">
          <div className="bg-[#926A25] flex-0 -mt-3 ml-2 size-min">
            <h1 className="text-left">{currentMenu}</h1>
          </div>
          <div className="flex-3/4 border inline-flex">
            <div className="flex-2">
              <InventoryList
                items={Menus[currentMenu as keyof {}]}
                onSelectItem={handleSelectItem}
              ></InventoryList>
            </div>
            <div className="flex-3 border">
              <ItemDescription item={currentItem as Item}></ItemDescription>
            </div>
          </div>
          <div className="flex-0 inline-grid grid-cols-4 grid-rows-1 gap-5 m-3 justify-items-center">
            {Object.keys(Menus).map((menu) => (
              <span
                key={menu}
                className="size-min border border-transparent hover:border-white hover:bg-white/50"
                onClick={() => {
                  setCurrentMenu(menu);
                }}
              >
                {menu}
              </span>
            ))}
          </div>
        </div>
      </body>
    </>
  );
}

export default App;
