import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import ReactFlow from "@/components/data/ReactFlow"

import "reactflow/dist/style.css"
import { Logo } from "@/components/Logo"

const initialNodes = [
  {
    id: "1",
    type: "input",
    data: { label: "User asks question" },
    position: { x: 250, y: 50 },
  },
  {
    id: "2",
    type: "default",
    data: { label: "Question is commonly asked" },
    position: { x: 250, y: 150 },
  },
  {
    id: "3",
    type: "default",
    data: { label: "Answer with link to knowledge" },
    position: { x: 250, y: 250 },
  },
  {
    id: "4",
    type: "default",
    data: { label: "Question is not commonly asked or user requests agent" },
    position: { x: 450, y: 150 },
  },
  {
    id: "5",
    type: "output",
    data: { label: "Connect to agent" },
    position: { x: 650, y: 150 },
  },
]
const initialEdges = [
  { id: "e1-2", source: "1", target: "2", animated: true },
  { id: "e2-3", source: "2", target: "3", animated: true },
  { id: "e2-4", source: "2", target: "4", animated: true },
  { id: "e4-5", source: "4", target: "5", animated: true },
]

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-start p-16 min-h-screen gap-4 ">
      <Logo />
      <div className="max-w-screen-sm flex flex-col gap-4 w-full">
        <h1 className="text-xl font-medium text-gray-900">FlowchartGPT</h1>
        <p>Describe the process you want to create a flowchart for 💦</p>
        <Input />
        <Button>Draw</Button>
        <div className="w-3/4 h-64">
          <ReactFlow nodes={initialNodes} edges={initialEdges} />
        </div>
      </div>
    </section>
  )
}
