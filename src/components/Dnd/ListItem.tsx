import { Item } from "../../types"

type ListItemProps = {
  item: Item
}

export const ListItem = ({ item }: ListItemProps) => {
  const { content, title } = item

  return (
    <div className="rounded-sm border-2 border-slate-200 mb-2 p-2 w-72">
      <div className="flex flex-col items-start">
        <span className="font-bold text-lg">{title}</span>
        <span>{content}</span>
      </div>
    </div>
  )
}
