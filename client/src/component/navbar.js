import React from 'react';
import { NavbarXS } from './navbarXs';
import './nav.css'
import TextField from 'material-ui/TextField';
import paypal from '../image/paypal.png'
import axios from 'axios';


export class Navbar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isEdit: false,
            signUpIsEdit: false,
            signInIsEdit: false,
            text: {
                username: "",
                password: ""
            },
            text2: {
                username: "",
                password: "",
                confirm: "",
                emai: "",
                phone: "",

            }
        }
    }
    componentDidMount() {
        window.addEventListener("resize", this.resize.bind(this));
        this.resize();
    }
    resize() {
        if (window.innerWidth <= 760) {
            this.setState({ isEdit: true });
        } else if (window.innerWidth >= 760) {
            this.setState({ isEdit: false });
        }
    }
    changeHandle(type, event) {
        let text = this.state.text;
        text[type] = event.target.value
        this.setState({
            text
        })

    }
    changeHandle2(type, event) {
        let text = this.state.text2;
        text[type] = event.target.value;
        this.setState({
            text
        })
    }
    submit() {
        // e.preventDefault();
        //console.log(this.state.text)
        // console.log({ headers: { usreName: 'testing 007' } }, 'dasfklasdfasdf');
        //usreName: 'testing 007'
        var usrObj = {
            username: this.state.text.username,
            password: this.state.text.password
        }
        return axios.post('/login', usrObj)
            .then((data) => console.log(data)
            )
            .catch((err) => console.log(err))

    }
    submit2() {
        // e.preventDefault();
        //console.log(this.state.text)
        // console.log({ headers: { usreName: 'testing 007' } }, 'dasfklasdfasdf');
        //usreName: 'testing 007'
        var usrObj = {
            username: this.state.text.username,
            password: this.state.text.password,
            email: this.state.text.email,
            phoneNumber: this.state.text.phone
        }
        return axios.post('/signup', usrObj)
            .then((data) => console.log(data)
            )
            .catch((err) => console.log(err))

    }
    render() {
        const { isEdit, signUpIsEdit, signInIsEdit } = this.state
        return (
            <div className=" makeMirror nav animated fadeInDown" >
                {isEdit &&
                    <NavbarXS />
                }
                {/*  */}
                {!isEdit &&
                    <div style={styles.container} className="container-fluid" style={{ background: "#00B8D4" }} >
                        <div className="row" >
                            {/* <div className="col-md-1" ></div> */}
                            <div className="col-md-2 font-weight-bold text-white right " >
                                <img width="80px" src={paypal} />
                            </div>
                            <div className="col-md-3 mt-3" >
                                <form onSubmit={this.submit} action="#" >
                                    <div className="d-inline-block px-2  " style={styles.formButton} >
                                        <i className="fa fa-search prefix" aria-hidden="true"></i>
                                    </div>
                                    <input className="form-control" type="text" placeholder="Medium input" />
                                </form>
                            </div>
                            <div className="col-md-7 text-right" >
                                <div onMouseOver={() => this.setState({ signUpIsEdit: true, signInIsEdit: false })} id="menuSelect" className="signupBtn py-3  d-inline-block mx-3 px-4">
                                    <span className="selectedButton">SignUp</span>
                                    {signUpIsEdit &&
                                        <div className="text-left z-depth-1" id="signupMenu" >
                                            {/* <!-- Material input --> */}
                                            <div className="modal-header waves-effect waves-light info-color white-text">
                                                <h4 className="title">
                                                    <i className="fa fa-pencil"></i>Sign Up</h4>
                                                <button onClick={() => this.setState({ signUpIsEdit: false })} type="button" className="close waves-effect waves-light text-white" data-dismiss="modal" aria-label="Close">
                                                    <span aria-hidden="true">×</span>
                                                </button>
                                            </div>
                                            <div style={{ textAlign: 'left' }} >
                                                <div className="md-form">
                                                    <i className="fa fa-user prefix "></i>
                                                    <input type="text" onChange={this.changeHandle2.bind(this, "username")} id="inputIconEx0" className="form-control" />
                                                    <label htmlFor="inputIconEx0">User name</label>
                                                </div>
                                                <div className="md-form">
                                                    <i className="fa fa-envelope prefix"></i>
                                                    <input type="email" onChange={this.changeHandle2.bind(this, "email")} id="inputIconEx1" className="form-control" />
                                                    <label htmlFor="inputIconEx1">E-mail address</label>
                                                </div>
                                                <div className="md-form">
                                                    <i className="fa fa-lock prefix "></i>
                                                    <input type="password" id="inputIconEx2" className="form-control" onChange={this.changeHandle2.bind(this, "password")} />
                                                    <label htmlFor="inputIconEx2">Password</label>
                                                </div>
                                                <div className="md-form">
                                                    <i className="fa fa-exclamation-triangle prefix "></i>
                                                    <input type="password" id="inputIconEx3" className="form-control" />
                                                    <label htmlFor="inputIconEx3">Retype password</label>
                                                </div>
                                                <div className="md-form">
                                                    <i className="fa fa-mobile-phone prefix" aria-hidden="true"></i>
                                                    <input type="number" id="inputIconEx4" className="form-control" onChange={this.changeHandle2.bind(this, "phone")} />
                                                    <label htmlFor="inputIconEx4">Mobile</label>
                                                </div>
                                            </div>
                                            <div className="custom-control custom-checkbox my-1 mr-sm-2">
                                                <input type="checkbox" className="custom-control-input" id="customControlInline" />
                                                <label htmlFor="customControlInline" className="custom-control-label grey-text">Accept the<a href="#" className="blue-text"> Terms and Conditions</a></label>
                                            </div>
                                            <button className=" waves-effect waves-light signupButton btn btn-cyan btn-block btn-rounded z-depth-1a" onClick={this.submit2.bind(this)} >Free Sign Up <i className="fa fa-paper-plane-o ml-2" ></i> </button>
                                            <div className="row my-3 d-flex justify-content-center align-items-center">
                                                {/* <!--Facebook--> */}
                                                <button type="button" className="btn btn-white btn-rounded mr-md-3 z-depth-1a"><i className="fa fa-facebook blue-text text-center"></i></button>
                                                {/* <!--Twitter--> */}
                                                <button type="button" className="btn btn-white btn-rounded mr-md-3 z-depth-1a"><i className="fa fa-twitter blue-text"></i></button>
                                                {/* <!--Google +--> */}
                                                <button type="button" className="btn btn-white btn-rounded z-depth-1a"><i className="fa fa-google-plus blue-text"></i></button>
                                            </div>
                                            <div className="col-md-12">
                                                <p className="font-small  d-flex justify-content-end">Have an account? <a href="#" className="info-text ml-1 font-weight-bold"> Log in</a></p>
                                            </div>
                                        </div>
                                    }
                                </div>
                                <div onMouseOver={() => this.setState({ signInIsEdit: true, signUpIsEdit: false })} id="menuSelect" className="signupBtn py-3  d-inline-block mx-3 px-4">
                                    <span className="selectedButton">SignIn</span>
                                    {signInIsEdit &&
                                        <div className="text-left z-depth-1" id="signupMenu" >

                                            {/* <!-- Material input --> */}
                                            <div className="modal-header waves-effect waves-light info-color white-text">
                                                <h4 className="title">
                                                    <i className="fa fa-pencil"></i>Sign In</h4>
                                                <button onClick={() => this.setState({ signInIsEdit: false })} type="button" className="close waves-effect waves-light text-white" data-dismiss="modal" aria-label="Close">
                                                    <span aria-hidden="true">×</span>
                                                </button>
                                            </div>
                                            <form onSubmit={this.submit.bind(this)}>
                                                <div style={{ textAlign: 'left' }} >

                                                    <div className="md-form">
                                                        <i className="fa fa-envelope prefix"></i>
                                                        <input type="text" onChange={this.changeHandle.bind(this, "username")} value={this.state.text.username} id="inputIconEx1" className="form-control" />
                                                        <label htmlFor="inputIconEx1">E-mail address</label>
                                                    </div>
                                                    <div className="md-form">
                                                        <i className="fa fa-lock prefix "></i>
                                                        <input type="password" id="inputIconEx2" onChange={this.changeHandle.bind(this, "password")} value={this.state.text.password} className="form-control" />
                                                        <label htmlFor="inputIconEx2">Password</label>
                                                    </div>

                                                </div>
                                                <div className="custom-control custom-checkbox my-1 mr-sm-2">
                                                    <input type="checkbox" className="custom-control-input" id="customControlInline" />
                                                    <label htmlFor="customControlInline" className="custom-control-label grey-text">Accept the<a href="#" className="blue-text"> Terms and Conditions</a></label>
                                                </div>
                                                <button type="submit" className=" waves-effect waves-light signupButton btn btn-cyan btn-block btn-rounded z-depth-1a"  > Sign In <i className="fa fa-paper-plane-o ml-2"></i> </button>
                                            </form>


                                            <div className="row my-3 d-flex justify-content-center align-items-center">
                                                {/* <!--Facebook--> */}
                                                <button type="button" className="btn btn-white btn-rounded mr-md-3 z-depth-1a"><i className="fa fa-facebook blue-text text-center"></i></button>
                                                {/* <!--Twitter--> */}
                                                <button type="button" className="btn btn-white btn-rounded mr-md-3 z-depth-1a"><i className="fa fa-twitter blue-text"></i></button>
                                                {/* <!--Google +--> */}
                                                <button type="button" className="btn btn-white btn-rounded z-depth-1a"><i className="fa fa-google-plus blue-text"></i></button>
                                                <br />
                                                {this.state.text.username}
                                                {this.state.text.password}
                                            </div>
                                            <div className="col-md-12">
                                                <p className="font-small  d-flex justify-content-end">ve'nt account? <a href="#" className="info-text ml-1 font-weight-bold"> Sign Up</a></p>
                                            </div>

                                        </div>
                                    }
                                </div>
                                <div className="py-3 d-inline-block mx-3 px-4"></div>

                            </div>

                        </div>
                    </div>
                }
            </div>

        )
    }
}
const styles = {
    container: {
        padding: ' 0px 10px '
    },
    formButton: {
        position: 'absolute', top: 4, right: 22, cursor: "pointer", backgroundColor: '#fff',
    }
}