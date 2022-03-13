import { useEffect, useState } from "react"
import axios from "axios"

export const Todo = () => {
	const [text, setText] = useState("")
	const [list, setList] = useState([])
	const [page, setPage] = useState(1)

	useEffect(() => {
		getText();
	},[page])

	const getText= () =>{
		axios.get(`http://localhost:3001/posts?_limit=2&_page=${page}`).then((res) => {
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

			{list.map((e) => (
				<div key={e.id}>
				<p>{e.title}</p>
				<button>Delete</button>
				</div>
	))}

			<button onClick={() => {
				setPage(page-1)
			}}>prev</button>

			<button onClick={() => {
					setPage(page+1)
				}}>next</button>

		</div>
	)
}