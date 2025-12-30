interface Item {
    itemName:string; 
    attribuites: string[];
    description: string;
    image:string;
}
interface Props{
    items:Item[];
    onSelectItem: (item:Item) => void;
}
function InventoryList({items,onSelectItem}:Props) {
    return (
        <div className="">
            {items.map((item)=>
            <h2 key={item.itemName} className = "text-left m-2 hover:bg-white/50" onMouseOver={()=>onSelectItem(item)}>{item.itemName}</h2>)}
        </div>
    )

}
export default InventoryList;
export type {Item};