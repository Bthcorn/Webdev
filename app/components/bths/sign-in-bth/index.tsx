'use client'
import react from 'react'
import { Button } from "@/components/ui/button"
import { signIn } from "next-auth/react"

export const SignInBth = ( {className} : {className?: string } ) => {
  return (
    <Button
      className={className}
      onClick={() => { signIn('line') }}
    >
      Sign in
    </Button>
  )
}