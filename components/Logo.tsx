import { TreeStructure } from "@phosphor-icons/react"

export function Logo() {
  return (
    <div className="flex items-center gap-4">
      <div className="bg-yellow-400 p-1 h-8 rounded-md flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="fill-yellow-900 h-full"
          viewBox="0 0 256 256"
        >
          <path
            d="M72,112v32a8,8,0,0,1-8,8H32a8,8,0,0,1-8-8V112a8,8,0,0,1,8-8H64A8,8,0,0,1,72,112ZM216,40H168a8,8,0,0,0-8,8V96a8,8,0,0,0,8,8h48a8,8,0,0,0,8-8V48A8,8,0,0,0,216,40Zm0,112H168a8,8,0,0,0-8,8v48a8,8,0,0,0,8,8h48a8,8,0,0,0,8-8V160A8,8,0,0,0,216,152Z"
            opacity="0.2"
          ></path>
          <path d="M168,112h48a16,16,0,0,0,16-16V48a16,16,0,0,0-16-16H168a16,16,0,0,0-16,16V64h-8a32,32,0,0,0-32,32v24H80v-8A16,16,0,0,0,64,96H32a16,16,0,0,0-16,16v32a16,16,0,0,0,16,16H64a16,16,0,0,0,16-16v-8h32v24a32,32,0,0,0,32,32h8v16a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V160a16,16,0,0,0-16-16H168a16,16,0,0,0-16,16v16h-8a16,16,0,0,1-16-16V96a16,16,0,0,1,16-16h8V96A16,16,0,0,0,168,112ZM64,144H32V112H64v32Zm104,16h48v48H168Zm0-112h48V96H168Z"></path>
        </svg>
      </div>

      <h1 className="text-lg font-bold">FlowchartGPT</h1>
    </div>
  )
}