import Controls from "@/components/Controls"
import { Flowchart } from "@/components/Flowchart"

export default function App() {
  return (
    <main className="flex flex-1 divide-x  divide-gray-100">
      <Controls />
      <Flowchart />
    </main>
  )
}
