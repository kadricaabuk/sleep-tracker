import { useState, useEffect } from "react"

const ToggleSwitch = ({ id, ...props }) => {
  const [ID, setID] = useState("")
  function idGenerator() {
    var S4 = function () {
      return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1)
    }
    return (
      S4() +
      S4() +
      "-" +
      S4() +
      "-" +
      S4() +
      "-" +
      S4() +
      "-" +
      S4() +
      S4() +
      S4()
    )
  }

  useEffect(() => setID(idGenerator()), [])

  return (
    <label className="ToggleSwitch" htmlFor={id ? id : ID}>
      <input type="checkbox" id={id ? id : ID} {...props} />
      <span />
    </label>
  )
}

export default ToggleSwitch
