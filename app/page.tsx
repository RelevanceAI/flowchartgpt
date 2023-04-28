"use client"

import { useMemo, useState } from "react"

import Controls from "@/components/Controls"
import { Flowchart } from "@/components/Flowchart"

export default function App() {
  const [nodes, setNodes] = useState(null)
  const [edges, setEdges] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const memoizedNodes = useMemo(() => {
    return nodes
  }, [nodes])
  const memoizedEdges = useMemo(() => {
    return edges
  }, [edges])

  async function generateFlowchart(prompt: string) {
    setNodes(null)
    setEdges(null)
    setError(false)
    setLoading(true)
    const res = await fetch(
      "https://api-1e3042.stack.tryrelevance.com/latest/studios/f4a52c1a-f098-48e9-af6a-81e3bf1ea486/trigger_limited",
      {
        method: "POST",
        body: JSON.stringify({
          params: { description: prompt },
          project: "4cb18efcb506-4bea-9fad-310b3de2a959",
        }),
      }
    )

    if (!res.ok) {
      setLoading(false)
      setError(true)
      throw new Error("Failed to generate flowchart")
    }

    let {
      output: { answer },
    } = await res.json()

    answer = answer.replace(/\\/g, "")

    const { nodes, edges } = JSON.parse(answer)

    if (!nodes || !edges) {
      setLoading(false)
      setError(true)
      throw new Error("Failed to destructure nodes and edges")
    }
    setNodes(nodes)
    setEdges(edges)
    setLoading(false)
  }

  return (
    <main className="flex flex-1 flex-col divide-x divide-gray-100 md:flex-row">
      <div className="h-96 md:h-full md:w-[520px]">
        <Controls
          submit={async (prompt: string) => {
            await generateFlowchart(prompt)
          }}
        />
      </div>

      <div className="flex flex-1 items-center justify-center bg-slate-50">
        {nodes && edges ? (
          <Flowchart nodes={memoizedNodes} edges={memoizedEdges} />
        ) : error ? (
          <span className="text-red-600">
            Failed to generate flowchart! Try making your prompt more specific.
          </span>
        ) : loading ? (
          <div className="flex flex-col gap-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 animate-spin fill-yellow-500"
              viewBox="0 0 256 256"
            >
              <path d="M236,128a108,108,0,0,1-216,0c0-42.52,24.73-81.34,63-98.9A12,12,0,1,1,93,50.91C63.24,64.57,44,94.83,44,128a84,84,0,0,0,168,0c0-33.17-19.24-63.43-49-77.09A12,12,0,1,1,173,29.1C211.27,46.66,236,85.48,236,128Z"></path>
            </svg>

            <span className="text-yellow-700">
              Loading — this might take a while...
            </span>
          </div>
        ) : null}
      </div>
    </main>
  )
}
