import ReactFlow from "./chart/ReactFlow"
import "reactflow/dist/style.css"

interface FlowchartProps {
  nodes: any
  edges: any
}

export function Flowchart(props: FlowchartProps) {
  return <ReactFlow nodes={props.nodes} edges={props.edges} fitView />
}
