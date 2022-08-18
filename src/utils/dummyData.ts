import { Item } from "../types"

export const getListItem = (count: number): Item[] => {
  return Array.from({ length: count }, (v, k) => k).map((k) => ({
    id: `item-${k}`,
    title: `Title Item ${k}`,
    content: `Content item ${k}`,
  }))
}
