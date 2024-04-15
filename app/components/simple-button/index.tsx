'use client'

import { Button } from "../ui/button"

export const SimpleButton = () => {
	const date = new Date()
	console.log(date.toString())
	const handleClick = () => {
		const date = new Date()
		console.log(date.toString())
		// console.log('HELLO!')
	}
	return (
		<Button onClick={handleClick}>
			Simple Button
		</Button>
	)
}

// export function SimpleButton2() {
// 	return (
// 		<button>
// 			Click me!
// 		</button>
// 	)
// }