'use client'

import { Button } from '@/components/ui/button'

export const ButtonCombo = () => {
  const handleBth1Click = () => {
    console.log('Button Combo1 clicked')
  }
  const handleBth2Click = () => {
    console.log('Button Combo2 clicked')
  }
  return (
    <div>
      <Button onClick={handleBth1Click}>Button Combo1</Button>
      <Button onClick={handleBth2Click}>Button Combo2</Button>
    </div>
  )
}