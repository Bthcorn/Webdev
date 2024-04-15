'use server'

import { getDb } from '@/lib/db/db'
import { ObjectId } from 'mongodb'
import { revalidatePath } from 'next/cache'

export async function markDone(formData: FormData) {
    console.log(formData.get('todoId'))
    const todoId = formData.get('todoId') as string
    const db = await getDb()
    const todo = await db!.collection('todos')
    const result = await todo.updateOne(
        { _id: new ObjectId(todoId) },
        { $set: { done: true } }
    )

    console.log(result)
    if (result.modifiedCount === 1) {
        revalidatePath('/')
        return true
        
    }
    return false 
}