import Form from "../components/Form"
import { Link } from "react-router-dom";

function Register () {
  return (
  <div className="Register-page">
    <Form route="account/register/" method="register"/>
    <Link to="/login" className="button-link-Login">
      <button>Already a User?</button>
    </Link>
  </div>

)
}

export default Register