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
        <div>
            {items.map((item)=>
            <div key={item.itemName} onMouseOver={()=>onSelectItem(item)}>{item.itemName}</div>)}
        </div>
    )

}
export default InventoryList;
export type {Item};