import {useState} from 'react'
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Container,
  Row,
  Col,
} from "reactstrap";
// core components
import UserHeader from "./UserHeader";

const Profile = () => {
  const[username, setUsername]=useState('username')
  const[email,setEmail]=useState('email')
  const[firstname, setFirstname]=useState('firstname')
  const[lastname, setLastname]=useState('lastname')
  const[cin, setCin]=useState(0)
  const[phone, setPhone]=useState(0)
  const[birthday, setBirthday]=useState('jj/mm/aaaa')
  const[password, setPassword]=useState('password')
  const[adress, setAdress]=useState('adress')
  const[city, setCity]=useState('Manouba')
  const[country, setCountry]=useState('Tunisia')
  const[postal, setPostal]=useState(0)
  const[description, setDescription]=useState('description')
  
 
  return (
    <>
      <UserHeader />
      {/* Page content */}
      <Container className="mt--7" fluid>
        <Row>
          <Col className="order-xl-2 mb-5 mb-xl-0" xl="4">
            <Card className="card-profile shadow">
              <Row className="justify-content-center">
                <Col className="order-lg-2" lg="3">
                  <div className="card-profile-image">
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                      width="100%"
                        alt="..."
                        className="rounded-circle"
                        src={
                          require("./assets/img/theme/team-4-800x800.jpg")
                            .default
                        }
                      />
                    </a>
                  </div>
                </Col>
              </Row>
              <CardHeader className="text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
                <div className="d-flex justify-content-between">
                </div>
              </CardHeader>
              <CardBody className="pt-0 pt-md-4">
                <Row>
                  <div className="col">
                    <div className="card-profile-stats d-flex justify-content-center mt-md-5">
                      
                    </div>
                  </div>
                </Row>
                <div className="text-center">
                  <h3>
                    {username}
                   
                  </h3>
                  <div className="font-weight-light">{firstname} {lastname}</div>
                 <br/>
                  <h5>
                    CIN:
                    <span className="font-weight-light"> {cin}</span>
                  </h5>
                  <h5>
                    Phone number:
                    <span className="font-weight-light"> {phone}</span>
                  </h5>
                  <h5>
                    Birth Date:
                    <span className="font-weight-light"> {birthday}</span>
                  </h5>
                  <h5>
                    Email:
                    <span className="font-weight-light"> {email}</span>
                  </h5>
                  <div className="h5 mt-4">
                    <i className="ni business_briefcase-24 mr-2" />
                    Adress: 
                  </div>
                  <div>
                    <i className="ni education_hat mr-2" />
                    {adress},{city},{country},{postal}
                  </div>
                  <hr className="my-4" />
                  <div className="h5 mt-4">
                    <i className="ni business_briefcase-24 mr-2" />
                    About me: 
                  </div>
                  <div>
                    <i className="ni education_hat mr-2" />
                    {description}
                  </div>
                 
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col className="order-xl-1" xl="8">
            <Card className="bg-secondary shadow">
              <CardHeader className="bg-white border-0">
                <Row className="align-items-center">
                  <Col xs="8">
                    <h3 className="mb-0">My account</h3>
                  </Col>
                  <Col className="text-right" xs="4">
                    <Button
                      color="primary"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      size="sm"
                    >
                      update
                    </Button>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <Form >
                  <div className="centrer">
                  <h6   className="heading-small text-muted mb-4">
                    User information
                  </h6>
                  </div>
                  <div className="pl-lg-4">
                    <Row>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-username"
                          >
                            Username
                          </label>
                          <Input
                            className="form-control-alternative"
                            defaultValue=""
                            id="input-username"
                            placeholder="Username"
                            type="text"
                            onChange={(e)=>setUsername(e.target.value)}
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-email"
                          >
                            Email address
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="input-email"
                            placeholder="email"
                            type="email"
                            defaultValue=""
                            onChange={(e)=>setEmail(e.target.value)}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-first-name"
                          >
                            First name
                          </label>
                          <Input
                            className="form-control-alternative"
                            defaultValue=""
                            id="input-first-name"
                            placeholder="First name"
                            type="text"
                            onChange={(e)=>setFirstname(e.target.value)}
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-last-name"
                          >
                            Last name
                          </label>
                          <Input
                            className="form-control-alternative"
                            defaultValue=""
                            id="input-last-name"
                            placeholder="Last name"
                            type="text"
                            onChange={(e)=>setLastname(e.target.value)}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-cin"
                          >
                            CIN
                          </label>
                          <Input
                            className="form-control-alternative"
                            defaultValue=""
                            id="input-cin"
                            placeholder="cin"
                            type="number"
                            onChange={(e)=>setCin(e.target.value)}
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-phone-number"
                          >
                            Phone number
                          </label>
                          <Input
                            className="form-control-alternative"
                            defaultValue=""
                            id="input-phone-number"
                            placeholder="phone number"
                            type="number"
                            onChange={(e)=>setPhone(e.target.value)}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-cin"
                          >
                            Birth Date
                          </label>
                          <Input
                            className="form-control-alternative"
                            defaultValue=""
                            id="input-Date-of-birth"
                            placeholder="date of birth"
                            type="date"
                            onChange={(e)=>setBirthday(e.target.value)}
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-password"
                          >
                           Password
                          </label>
                          <Input
                            className="form-control-alternative"
                            defaultValue="123456789"
                            id="input-password"
                            placeholder="password"
                            type="password"
                            onChange={(e)=>setPassword(e.target.value)}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    
                  </div>
                  <hr className="my-4" />
                  {/* Description */}
                  <div className="centrer">
                  <h6   className="heading-small text-muted mb-4">
                   About me
                  </h6>
                  </div>
                  <div className="pl-lg-4">
                    <FormGroup>
                      
                      <Input
                        className="form-control-alternative"
                        placeholder="A few words about you ..."
                        rows="4"
                        defaultValue=""
                        type="textarea"
                        onChange={(e)=>setDescription(e.target.value)}
                      />
                    </FormGroup>
                  </div>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Profile;
