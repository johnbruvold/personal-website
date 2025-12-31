interface Item {
    itemName:string; 
    attribuites: {};
    description: string;
    image:string;
}
interface Props{
    items:Item[];
    onSelectItem: (item:Item) => void;
}
function InventoryList({items,onSelectItem}:Props) {
    return (
        <div className="size-full inline-flex flex-col gap-1">
            {items.map((item)=>
            <h2 key={item.itemName} className = "-my-1 text-left h-min w-full text-nowrap hover:bg-white/50" onMouseOver={()=>onSelectItem(item)}>{item.itemName}</h2>)}
        </div>
    )

}
export default InventoryList;
export type {Item};