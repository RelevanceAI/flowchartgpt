import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"

export default function Sidebar() {
  return (
    <section className="flex flex-col p-6 text-gray-900 justify-between h-full">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <h1 className="font-medium">Prompt</h1>
          <p className="text-gray-600 text-sm">
            What do you want to create a flowchart for? You can use a single
            word or a full sentence.
          </p>
        </div>

        <Textarea className="min-h-[300px]" />
      </div>

      <Button>Draw</Button>
    </section>
  )
}
