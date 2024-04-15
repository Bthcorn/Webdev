import { MyCards } from "../my-cards"
import React from "react"
import { CardContent, CardHeader, CardTitle } from "../ui/card"
import { Card } from "../ui/card"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { newTodo } from "./actions"


export const NewTodoForm = () => {
  return (
    <Card className="w-[300px] h-fit">
      <CardHeader>
        <CardTitle>
          Create a new todo
        </CardTitle>
        <CardContent>
          <form
            action={newTodo}
            className="space-y-4"
          >
            <Input
              name="title"
              placeholder="Title"
            />
            <Input
              name="content"
              placeholder="Content"
              className="h-16"
            />
            <Button className="w-full">
              New todo
            </Button>
          </form>
        </CardContent>
      </CardHeader>
    </Card>
  )
}