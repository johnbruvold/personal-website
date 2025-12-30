import type { Item } from "./inventoryList"
interface Props {
    item:Item
}
function ItemDescription({item}:Props) {
return (
<div className="inline-flex  size-full flex-col p-1 mx-2">
    <img></img>
    <div className="flex-1 size-min inline-flex flex-row gap-3">
    {item.attribuites.map((attr) =>
    <h3 className="border-r border-t">{attr}</h3>)}
    </div>
    <p className="border size-full">{item.description}</p>
</div>
)
}
export default ItemDescription