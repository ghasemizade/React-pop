

export default function Email({value, onChange, style}) {
    return (
        <input value={value} placeholder="Email" type="email" style={{
            margin: "20px",
            padding: "10px",
            background: "#eee"
        }} onChange={onChange}></input>
    )
}