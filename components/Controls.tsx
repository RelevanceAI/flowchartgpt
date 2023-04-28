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
    <form className="flex h-full flex-col justify-between p-6 text-gray-900">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <h1 className="font-medium">Prompt</h1>
          <p className="text-sm text-gray-600">
            What do you want to create a flowchart for? You can use a single
            word or a full sentence.
          </p>
        </div>

        <Textarea
          required
          className="md:min-h-[300px]"
          onChange={(e) => setPrompt(e.target.value)}
        />
      </div>

      <Button
        onClick={(e) => {
          e.preventDefault()
          if (prompt) {
            props.submit(prompt)
          }
        }}
      >
        Draw
      </Button>
    </form>
  )
}
