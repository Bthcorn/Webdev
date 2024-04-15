import { MyCard } from "../my-card"
import { ImyCard } from "../my-card"

interface ImyCards {
  cards: ImyCard[]
}
export const MyCards = (props: ImyCards) => {
  console.log(props)
  return (
    <div
      className="flex flex-col gap-4"
    >
      {
        props.cards.map((props) => (
          <MyCard key={props.id} {...props} />)
        )
      }
    </div>
  )
}