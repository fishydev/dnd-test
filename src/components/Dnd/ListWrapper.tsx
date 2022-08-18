import { Item } from "../../types"
import { Card } from "../Card"
// import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd"
import { ListItem } from "./ListItem"

type ListWrapperProps = {
  items: Item[]
}

export const ListWrapper = (props: ListWrapperProps) => {
  const { items } = props
  return (
    <div>
      <Card>
        {items.map((item) => (
          <ListItem item={item} key={item.id} />
        ))}
      </Card>
    </div>
  )
}
