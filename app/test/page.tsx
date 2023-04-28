import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-start p-16 min-h-screen gap-4">
      <h1 className="text-lg font-medium text-gray-900">FlowchartGPT</h1>
      <p>Describe the process you want to create a flowchart for 💦</p>
      <Input />
      <Button>Draw</Button>
    </section>
  )
}
