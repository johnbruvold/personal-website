import { useState } from "react";
import "./App.css";
import InventoryList from "./Components/inventoryList";
import ItemDescription from "./Components/itemDescriptions";
import type { Item } from "./Components/inventoryList";
function App() {
  var Menus = {
    General: [
      {
        itemName: "Browhawn Lab",
        attribuites: ["START:   08/25 ", "sadfasdfs"],
        description: "dsaf",
        image: "LongHaul.png",
      },
    ],
    Experience: [],
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
      <body className="bg-[#926A25] overflow-hidden ">
        <div className="border-2 absolute inset-4 mask-linear-0 mask-linear-to-9%"></div>
        <div className="bg-[#926A25] absolute top-2 left-2 -mt-3 ml-2 size-min">
          <h1 className="text-left">{currentMenu}</h1>
        </div>
        <div className="absolute inset-5 mt-7 mb-3 -mx-1 inline-flex">
          <div className="flex-2">
            <InventoryList
              items={Menus[currentMenu as keyof {}]}
              onSelectItem={handleSelectItem}
            ></InventoryList>
          </div>
          <div className="flex-3">
            <ItemDescription item={currentItem as Item}></ItemDescription>
          </div>
        </div>
        <div className="absolute left-1/8 right-1/8 bottom-1 grid grid-cols-4 grid-rows-1 gap-5 justify-items-center">
          {Object.keys(Menus).map((menu) => (
            <span
              key={menu}
              className="size-min border-2 border-transparent bg-[#926A25]"
              onClick={() => {
                setCurrentMenu(menu);
              }}
            >
              <p className="mix-blend-overlay opacity-75 hover:border-white hover:bg-white/50">
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
