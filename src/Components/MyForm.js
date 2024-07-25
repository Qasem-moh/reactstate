import { useState } from "react"
export default function MyForm() {
    const [data, setName] = useState({ name: "", email: "" });
    return (
        <form onSubmit={(e)=>{e.preventDefault()}}>
            <label>Name</label>
            <input value={data.name}
                onChange={(e) =>
                    
                    setName({...data,name:e.target.value})}
            />
            <label>
                email
            </label>
            <input value={data.email}
                onChange={(e) => 
                    setName({...data ,email:e.target.value})}
            />
            <button>submi</button>
        </form>

    )
}