import LoginPageComponent from "./components/LoginPageComponent";
import axios from "axios";
import {useDispatch} from "react-redux";
import { setReduxUserState } from "../redux/actions/userActions";


const loginUserApiRequest = async (email, password, doNotLogout) => {
    const { data } = await axios.post("/api/users/login", { email, password, doNotLogout });
    if(data.userLoggedIn.doNotLogout) localStorage.setItem("userInfo", JSON.stringify(data.userLoggedIn));
    else sessionStorage.setItem("userInfo", JSON.stringify(data.userLoggedIn));
    return data;
}

const LoginPage = () => {

    const reduxDispatch = useDispatch();

<<<<<<< HEAD
    return <LoginPageComponent loginUserApiRequest={loginUserApiRequest} reduxDispatch={reduxDispatch} setReduxUserState={setReduxUserState} />
    
=======
    const handleSubmit = (event) => {
        event.preventDefault();
      let password=document.querySelector("input[name=password]").value;
      let email=document.querySelector("input[name=email]").value;
        let name ={email,password}
        console.log(name);
        fetch("http://localhost:5175/signin",{
            method:"POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(name)
        })
        .then(response => response.json())
        .then(data => {alert(data.message); 
            console.log(data.token);
            document.cookie="token=Bearer: "+data.token})
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);

    };
    return (
        <Container>
            <Row className="mt-5 justify-content-md-center">
                <Col md={6}>
                    <h1>Login</h1>
                    <Form noValidate validated={validated} onSubmit={(e) =>{
                        
                    let emailcheck=document.querySelector("input[name=email]").checkValidity();
                    if(emailcheck===false){
                        e.preventDefault();
                        alert("Email is not valid");}else{
                            handleSubmit(e);
                        }
                    }}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control
                                name="email"
                                required
                                type="email"
                                placeholder="Enter your email"
                                // onChange={(e) => {email = e.target.value}}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                name="password"
                                required
                                type="password"
                                placeholder="Password"
                                // onChange={(e) => {password = e.target.value}}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check
                                name="doNotLogout"
                                type="checkbox"
                                label="Do not logout"
                            />
                        </Form.Group>

                        <Row className="pb-2">
                            <Col>
                                Don't have an account??
                                <Link to="/register"> Register </Link>
                            </Col>
                        </Row>

                        <Button variant="primary" type="submit">
                            <Spinner
                                as="span"
                                animation="border"
                                size="sm"
                                role="status"
                                aria-hidden="true"
                            />
                            Login
                        </Button>

                        <Alert show={true} variant="danger">
                            Wrong credentials
                        </Alert>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
>>>>>>> 62426b354a0ed419166a19bf65ee8723d567e766
};

export default LoginPage;
