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
        <div className="m-1 size-full inline-flex flex-col gap-1">
            {items.map((item)=>
            <span key={item.itemName} className = " text-[20px] text-left h-min w-full hover:bg-white/50" onMouseOver={()=>onSelectItem(item)}>{item.itemName}</span>)}
        </div>
    )

}
export default InventoryList;
export type {Item};