import './SignUpForm.css'

const SignUpForm = () => {
  return (
    <div className='signUpFormContainer'>
      <form>
        <div className='signUpFormContent'>
          <div>
            <label>Country/Region:</label>
            <select>
              <option>Canada</option>
              <option>us</option>
            </select>
          </div>
          <div>
            <label>Verify email address:</label>
            <input type='email'></input>
          </div>
          <div>
            <label>Login Password:</label>
            <input></input>
          </div>
          <div>
            <label>Confirm Password:</label>
            <input></input>
          </div>
          <div>
            <label>Company Name:</label>
            <input></input>
          </div>
          <div>
            <label>Full name:</label>
            <input></input>
          </div>
          <div>
            <label>Tel:</label>
            <input></input>
          </div>
          <div>
            <label>Verify:</label>
            <input></input>
          </div>
        </div>
      </form>
    </div>
  )
}

export default SignUpForm