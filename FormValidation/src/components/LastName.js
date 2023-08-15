

export default function LastName({value, onChange}) {
    return (
        <input value={value} placeholder="lastname" type="text" style={{
            margin: "20px",
            padding: "10px",
            background: "#eee"
        }} onChange={onChange}></input>
    )
}