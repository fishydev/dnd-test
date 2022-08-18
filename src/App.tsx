import React, { useState } from "react"
import "./App.css"
import { ListWrapper } from "./components/Dnd/ListWrapper"
import { getListItem } from "./utils/dummyData"

function App() {
  const [items, setItems] = useState(getListItem(5))
  return (
    <div className="App">
      <main>
        <div className="flex justify-center h-[768px] items-center">
          <ListWrapper items={items} />
        </div>
      </main>
    </div>
  )
}

export default App
