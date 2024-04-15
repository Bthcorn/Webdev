import { getDb } from "@/lib/db/db"

export default async function Page() {
	const db = await getDb()
	const payload = {
		name: "test",
		last: "test",
	}
	const result = await db!.collection("test").insertOne(payload)
	console.log(result)
	return result
}