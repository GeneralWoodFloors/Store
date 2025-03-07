import Form from "../components/Form"
import { Link } from "react-router-dom";

function Register () {
  return (
  <div className="Register-page">
    <Form route="account/register/" method="register"/>
  </div>

)
}

export default Register