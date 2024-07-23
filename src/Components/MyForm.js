import { useState } from "react"
export default function MyForm() {
    const [data, setName] = useState({ name: "", email: "" });
    return (
        <form onSubmit={(e)=>{e.preventDefault()}}>
            <label>Name</label>
            <input value={data.name}
                onChange={(e) => setName({ name: e.target.value, email: data.email })}
            />
            <label>
                email
            </label>
            <input value={data.email}
                onChange={(e) => setName({ email: e.target.value, name: data.name })}

            />
            <button>submi</button>
        </form>

    )
}