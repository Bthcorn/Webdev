import { getServerSession } from "next-auth"
import { SignInBth } from "../bths/sign-in-bth"
import { SignOutBth } from "../bths/sign-out-bth"


export const Authenthicate = async ( {className} : {className?: string } ) => {
  const session = await getServerSession()
  return (
    <div className={className}>
      {
        session
          ? <SignOutBth className="rounded-full w-24 bg-red-500" />
          : <SignInBth className="rounded-full w-24" />
      }
    </div>
  )
}