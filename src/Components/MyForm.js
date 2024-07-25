import { useState } from "react"
export default function MyForm() {
    const [data, setName] = useState({
        name: "",
        email: "",
        generalInfo: "",
        isStudent: "",
        country: "",
        status: ""

    });
    function handeleChangeCheckbox(e) {
        setName({ ...data, isStudent: e.target.checked })
    }
    return (
        <form onSubmit={(e) => {
            e.preventDefault()
            console.log(data);
        }}>
            <label>Name</label>
            <input value={data.name}
                onChange={(e) =>

                    setName({ ...data, name: e.target.value })}
            />
            <label>
                email
            </label>
            <input value={data.email}
                onChange={(e) =>
                    setName({ ...data, email: e.target.value })}
            />
            <textarea value={data.generalInfo}
                onChange={(e) => { setName({ ...data, generalInfo: e.target.value }) }} />

            <input type="checkbox"
                checked={data.isStudent}
                onChange={handeleChangeCheckbox}
            />
            <select onChange={(e) => { setName({ ...data, country: e.target.value }) }}>
                <option></option>
                <option>KSA</option>
                <option>Egypt</option>
                <option>Syria</option>
            </select>

            <div>
                <input type="radio"
                    value="student"
                    name="status"
                    checked={data.status === "student"}
                    onChange={(e) => { setName({ ...data, status: e.target.value }) }}
                />student
                <input type="radio"
                    value="teacher"
                    name="status"
                    checked={data.status === "teacher"}
                    onChange={(e) => { setName({ ...data, status: e.target.value }) }}
                />teacher
            </div>

            <button>submi</button>
        </form>

    )
}