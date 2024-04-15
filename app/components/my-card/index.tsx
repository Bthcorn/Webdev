// import { markDone } from '../new-todo-form/action'
import { Button } from '../ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card'
import { Input } from '../ui/input'
import { DoneBten } from './done-btc.comp'
import { markDone } from './actions'

// export { Mycard } from '@/components/my-card'

export interface ImyCard {
  id: string
  title: string
  created: Date
  content: string
}

export const MyCard = (props: ImyCard) => {
  // console.log(props) = {}
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          {props.title}
        </CardTitle>
        <CardDescription>
          {props.created.toLocaleString()}
        </CardDescription>
      </CardHeader>
      <CardContent>
        {props.content}
      </CardContent>
      <CardFooter
        className='flex justify-end'
      >
        <form
          // className='flex justify-end'
          action={markDone}
        >
          <Input
            name='todoId'
            value={props.id}
            type="hidden"
          />

          <Button
            variant={'destructive'}
          >
            Done
          </Button>
        </form>
        {/* <DoneBten todoId= {props.id}></DoneBten> */}
        {/* {props.footer} */}
      </CardFooter>
    </Card>
  )
}