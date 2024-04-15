'use client'

import { Button } from "../ui/button"

export const DoneBten = ({todoId}: {todoId : string}) =>{
    const handleClick = () => {
        console.log('done!')
    }
    return (
        <Button onClick={handleClick}>
            Done!
        </Button>
    )
}