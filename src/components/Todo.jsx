import { useState } from "react"
import axios from "axios"

export const Todo = () => {
	const [text, setText] = useState("")

	return (
		<div>
			<input type="text" onChange={(e) => {
				setText(e.target.value);
			}} />
			<button onClick={() => {
				console.log("bs")
			}}>Add Todo</button>
		</div>
	)
}