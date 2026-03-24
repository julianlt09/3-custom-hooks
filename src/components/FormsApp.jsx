import { useForm } from "../Hooks/useForm"

export const FormsApp = () => {

  const initialForm = {
    UserName: '',
    Email: '',
    Password: ''
  }

  const { UserName, Email, Password, onInputChange } = useForm(initialForm)


  const handleSubmit = (event) => {
    event.preventDefault()
    console.log( UserName, Email, Password)
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="userName" className="form-label">UserName</label>
          <input
            type="text"
            className="form-control"
            id="UserName"
            name="UserName"
            value={UserName}
            onChange={onInputChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="Email" className="form-label">Email </label>
          <input
            type="email"
            className="form-control"
            id="Email"
            name="Email"
            value={Email}
            onChange={onInputChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="Password" className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            id="Password"
            name="Password"
            value={Password}
            onChange={onInputChange}
          />
        </div>

        <div className="mb-3 form-check">
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </>
  )
}