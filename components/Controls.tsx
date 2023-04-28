"use client"

import { useState } from "react"

import { Button } from "./ui/button"
import { Textarea } from "./ui/textarea"

interface ControlsProps {
  submit: (prompt: string) => void
}

export default function Controls(props: ControlsProps) {
  const [prompt, setPrompt] = useState("")

  return (
    <section className="flex flex-col p-6 text-gray-900 justify-between h-full">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <h1 className="font-medium">Prompt</h1>
          <p className="text-gray-600 text-sm">
            What do you want to create a flowchart for? You can use a single
            word or a full sentence.
          </p>
        </div>

        <Textarea
          className="min-h-[300px]"
          onChange={(e) => setPrompt(e.target.value)}
        />
      </div>

      <Button onClick={() => props.submit(prompt)}>Draw</Button>
    </section>
  )
}
