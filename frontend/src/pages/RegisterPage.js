import RegisterPageComponent from "./components/RegisterPageComponent";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setReduxUserState } from "../redux/actions/userActions";

const registerUserApiRequest = async (name, lastName, email, password) => {
  const { data } = await axios.post("/api/users/register", { name, lastName, email, password });
  sessionStorage.setItem("userInfo", JSON.stringify(data.userCreated));
  if (data.success === "User created") window.location.href = "/user";
  return data;
}

const RegisterPage = () => {

  const reduxDispatch = useDispatch();
  return <RegisterPageComponent registerUserApiRequest={registerUserApiRequest} reduxDispatch={reduxDispatch} setReduxUserState={setReduxUserState} />

<<<<<<< HEAD
=======
    if (confirmpass.value === password1.value) {
      confirmpass.setCustomValidity("")
      password = confirmpass.value
      console.log(password);
    } else {
      confirmpass.setCustomValidity("Passwords do not match")
      console.log("not match");
    }
  }

  const handleSubmit = (event) => {
      event.preventDefault();
      
      let username=document.querySelector("input[name=username]").value;
      let email=document.querySelector("input[name=email]").value;
      let firstname=document.querySelector("input[name=firstname]").value;
      let lastname=document.querySelector("input[name=lastName]").value;
      let phonenumber=document.querySelector("input[name=phone]").value;
      let name ={firstname,lastname,username,password,email,phonenumber}
      console.log(name);
      fetch("http://localhost:5175/signup",{
          method:"POST",
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(name)
      })
      .then(response => response.json())
      .then(data => {alert(data.message); 
          console.log(data.token);
          document.cookie("token="+data.token);})

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  
  let password="";
  return (
    <Container>
      <Row className="mt-5 justify-content-md-center">
        <Col md={6}>
          <h1>Register</h1>
          <Form noValidate validated={validated} onSubmit={(e) =>{
                        
                        let emailcheck=document.querySelector("input[name=email]").checkValidity();
                        if(emailcheck===false){
                            e.preventDefault();
                            alert("Email is not valid");}else{
                                handleSubmit(e);
                            }
                        }}>
            <Form.Group className="mb-3" controlId="validationCustom01">
              <Form.Label>Your first name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Enter your first name"
                name="firstname"
                // onchange={(e) => {firstname = e.target.value}}
              />
              <Form.Control.Feedback type="invalid">Please enter your first name</Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formmBasicLastName">
              <Form.Label>Your Last Name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Enter your last name"
                name="lastName"
                // onchange={(e) => {lastname = e.target.value}}
              />
              <Form.Control.Feedback type="invalid">Please enter your last name</Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                name="email"
                required
                type="email"
                placeholder="Enter your email"
                // onchange={(e) => {email = e.target.value}}
              />
              <Form.Control.Feedback type="invalid">Please enter a valid email address</Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="validationFormik05">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                name="phone"
                required
                type="text"
                placeholder="Enter your number"
                // onchange={(e) => {phonenumber = e.target.value}}
              />
              <Form.Control.Feedback type="invalid">Please enter your phone number</Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Username</Form.Label>
              <Form.Control
                name="username"
                required
                type="text"
                placeholder="Enter a username"
                // onchange={(e) => {username = e.target.value}}
              />
              <Form.Control.Feedback type="invalid">Please enter a username</Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                name="password"
                required
                type="password"
                placeholder="Password"
                minLength={6}
                onChange={onChange}
              />
              <Form.Control.Feedback type="invalid">Please enter a valid password</Form.Control.Feedback>
              <Form.Text className="text-muted">Password should have atleast 6 characters</Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPasswordRepeat">
              <Form.Label>Repeat Password</Form.Label>
              <Form.Control
                name="confirmPassword"
                required
                type="password"
                placeholder="Repeat Password"
                minLength={6}
                onChange={onChange}
              />
              <Form.Control.Feedback type="invalid">Both passwords should match</Form.Control.Feedback>
            </Form.Group>

            <Row className="pb-2">
              <Col>
                Do you have an account??
                <Link to="/login"> Login </Link>
              </Col>
            </Row>


            <Button type="submit">
              <Spinner
                as="span"
                animation="border"
                size="sm"
                role="status"
                aria-hidden="true"
              />
              Submit
            </Button>

            <Alert show={true} variant="danger">
              User with that email already exists
            </Alert>

            <Alert show={true} variant="info">
              User created
            </Alert>
          </Form>
        </Col>
      </Row>
    </Container>
  );
>>>>>>> 62426b354a0ed419166a19bf65ee8723d567e766
};

export default RegisterPage;
