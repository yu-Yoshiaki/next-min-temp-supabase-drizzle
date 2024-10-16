/* eslint-disable react-dom/no-missing-button-type */
import { login, signup } from './actions'

export default function LoginPage() {
  return (
    <form className="flex flex-col gap-4">
      <div className="bg-blue-100">
        <label htmlFor="email">Email:</label>
        <input id="email" name="email" type="email" required />
      </div>
      <div className="bg-blue-100">
        <label htmlFor="password">Password:</label>
        <input id="password" name="password" type="password" required />
      </div>
      <div className="flex gap-2">
        <button formAction={login} className="bg-blue-500 text-white">Log in</button>
        <button formAction={signup} className="bg-blue-500 text-white">Sign up</button>
      </div>
    </form>
  )
}
