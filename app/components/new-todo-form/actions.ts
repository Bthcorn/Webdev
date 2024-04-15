'use server'

import { getDb } from "@/lib/db/db"
import { getServerSession } from "next-auth"
import { revalidatePath } from "next/cache"

export async function newTodo(formData: FormData) {
    const session = await getServerSession()
    const data = Object.fromEntries(formData.entries())
    if (data.title === "") return 
    const payload = {
        ...data,
        created: new Date(),
        done: false,
        user: null as string | null,
    }
    const db = await getDb()
    const result = await db!.collection("todos").insertOne(payload)
    if (session) {
        payload.user = session.user!.name as string
    }
    console.log(result)
    if (result.acknowledged === true) {
        revalidatePath('/')
        return true
    }
    return false
}

// export async function markDone(formData: FormData) {
//     console.log(formData.get('todoId'))
// }