'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
// import { useRouter } from "next/router";
import { useRouter } from "next/navigation";
import { useEffect, useReducer, useState } from "react"


export default function Page() {
  const [search, setSearch] = useState<string>("default");
  const router = useRouter()
  const handleSubmit = () => {
    if (search === "") return
     // console.log(search);
    const query = search.split(" ").join("+")
    router.push(`/search/search/?q${query}`)
  }
  // useEffect(
  //   () => {
  //     console.log(search);
  //   }, []
  //  )
    return (
    <div className="grid h-screen place-items-center">
      <div 
        className="flex flex-col spaxe-y-4 items-center"
        >
        <Input className="w-96 m-4"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button
          className="w-16"
          onClick={handleSubmit}
        >
          Search
        </Button>
      </div>
    </div>
    )
}
