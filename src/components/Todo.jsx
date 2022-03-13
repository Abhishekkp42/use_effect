import { useState } from "react"
import axios from "axios"

export const Todo = () => {
	const [text, setText] = useState("")
	const [list, setList] = useState([])

	const getText= () =>{
		axios.get("http://localhost:3001/posts").then((res) => {
			setList(res.data)
		})
	}

	return (
		<div>
			<input type="text" onChange={(e) => {
				setText(e.target.value);
			}} />
			<button onClick={() => {
				console.log("bs")
				fetch("http://localhost:3001/posts", {
					method: "POST",
					body: JSON.stringify({title: text, status: false}),
					headers: {
						"Content-Type": "application/json"
					}
				}).then(() => {
					getText();
				})
			}}>Add Todo</button>
			{list.map((e) => {
				<div key={e.id}>{e.title}</div>
			})}
		</div>
	)
}