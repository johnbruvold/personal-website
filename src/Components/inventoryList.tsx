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
        <div className=" size-full">
            {items.map((item)=>
            <h2 key={item.itemName} className = "text-left text-nowrap hover:bg-white/50" onMouseOver={()=>onSelectItem(item)}>{item.itemName}</h2>)}
        </div>
    )

}
export default InventoryList;
export type {Item};