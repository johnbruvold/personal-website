import type { Item } from "./inventoryList";
interface Props {
  item: Item;
}
function ItemDescription({item }: Props) {
  return (
    <div className="w-full  h-full inline-flex flex-col gap-1.5">
        <img
          className="h-1/2 flex  mx-auto"
          src={`/${item.image}`}
        ></img>
      <div className="flex-shrink inline-flex flex-wrap flex-row gap-3">
        {Object.entries(item.attribuites).map(([attr,value]) => (
          <span className="mx-1  border-r-2 text-nowrap border-t-2"> {`${attr}:    `}{attr === "LNK" ? <a  target="_blank" rel="external"  className=" visited:bg-white" href={value as string}><span className="text-white" >LINK</span></a> : value as string}</span>
        ))}
      </div>
      <div className="basis-5/7 flex-1 border-r-2  overflow-auto border-t-2 " ><p className="text-left  z-3 text-size-2  w-full ">
        {item.description}
      </p></div>
    </div>
  );
}
export default ItemDescription;
