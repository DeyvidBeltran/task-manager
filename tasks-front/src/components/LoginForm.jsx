export default function LoginForm({
  errorMessage,
  username,
  password,
  handleUserChange,
  handlePasswordChange,
  handleLogin,
}) {
  return (
    <form onSubmit={handleLogin} className="login-form">
      <div className="login-container">
        <h1>Login</h1>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <input
          type="text"
          value={username}
          name="username"
          placeholder="Username"
          onChange={handleUserChange}
          className="input-login"
        />
        <input
          type="password"
          value={password}
          name="password"
          placeholder="Password"
          onChange={handlePasswordChange}
          className="input-login"
        />
        <button type="submit" className="btn-login">
          Login
        </button>
      </div>
    </form>
  )
}
