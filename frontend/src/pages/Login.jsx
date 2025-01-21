import Form from "../components/Form"
import { Link } from "react-router-dom"

function Login() {
  return (
    <div>
      <Form route="account/login/" method="login"/>

      <Link to="/admin" className="button-link-Admin"> 
      <button>Are you Admin?</button>
      </Link>
    </div>
)
}

export default Login