import { SimpleButton } from "@/components/simple-button";
import { ButtonCombo } from "@/components/button-combo";
import { MyCard } from "@/components/my-card";
import { MyCards } from "@/components/my-cards";
import { NewTodoForm } from "@/components/new-todo-form";
import { getDb } from "@/lib/db/db"
import { Button } from "@/components/ui/button";
import { Authenthicate } from "@/components/authenthicate";


export default async function Page() {
  const db = await getDb()
  const collection = db!.collection("todos")
  const todos = await collection
    .find(
      { done: false}
    )
    .sort({ created: -1 })
    .toArray()
  todos.forEach((todo) => {
    todo.id = todo._id.toString()
  }
  )
  // console.log(todos)


  // this is javascript
  const cardProps = {
    cards: todos,
  }
  return (
    // this is jsx
    // <ButtonCombo />
    /* <MyCard {...MyCardProps} />
    <MyCard {...MyOtherCardProps} /> */
    <div className="min-h-screen min-w-screen flex justify-center bg-gray-100 p-4">
      <div
        className="flex flex-col gap-4 p-4 md:flex-row md:gap-4 md:p-4"
      >
        {/* {cardProps.map((Prop, index) => (
          <MyCard key={index} {...Prop} />)
        )} */}
        <NewTodoForm />
        {/* @ts-ignore */}
        <MyCards {...cardProps} />
      </div>
      <Authenthicate className="fixed bottom-0 right-0 p-4" />
    </div>
  )
}