import type { Item } from "./inventoryList";
interface Props {
  item: Item;
}
function ItemDescription({ item }: Props) {
  return (
    <div className=" h-full w-full  inline-flex flex-col gap-1.5">
        <img
          className="h-1/2 mix-blend-overlay grow flex  mx-auto"
          src={`/src/assets/${item.image}`}
        ></img>
      <div className="  flex-shrink inline-flex flex-row gap-3">
        {item.attribuites.map((attr) => (
          <p className="size-min  border-r-2 text-nowrap border-t-2">{attr}</p>
        ))}
      </div>
      <p className="basis-5/7 border-t-2 border-r-2 mask-b-to-50%">
        {item.description}
      </p>
    </div>
  );
}
export default ItemDescription;
