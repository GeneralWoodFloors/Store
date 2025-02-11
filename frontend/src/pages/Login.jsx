import Form from "../components/Form"
const API_BASE_URL = import.meta.env.VITE_API_URL; // Get URL from env file

function Login() {
  return (
    <div className="login-page">
      <Form route="account/login/" method="login"/>
      <button><a href={`${API_BASE_URL}admin`} className="link" target="_blank" rel="noopener noreferrer">Admin</a></button>
    </div>
)
}

export default Login