import React, { Component } from 'react'


class From extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        return (
            <div className="bg-white" >

                <div className="container p-5 bg-white" style={{ border: '1px solid green', margin: '40px auto', fontWeight: 600 }} >
                    <p style={{ fontWeight: 600 }}> Kindly fill all the required fields for better rankings your record will be verified through NADRA for home tuitions </p>
                    <br />

                    <div className="row py-2" >
                        <div className="col-sm-6 col-lg-3 mt-1" >Qualification</div>
                        <div className="col-sm-6 col-lg-3" >
                            <input className="form-control" type="text" placeholder="Medium input" />
                        </div>
                        <div className="col-sm-0 col-lg-5" ></div>
                    </div>
                    {/*  */}
                    <div className="row py-2" >
                        <div className="col-sm-6 col-lg-3 mt-1" >Last Institute attended</div>
                        <div className="col-sm-6 col-lg-3" >
                            <input className="form-control" type="text" placeholder="Medium input" />
                        </div>
                        <div className="col-sm-0 col-lg-5" ></div>
                    </div>
                    {/*  */}
                    <div className="row py-2" >
                        <div className="col-xs-12 col-sm-6 col-lg-3 mt-1" >Date Of Birth</div>
                        <div className="col-xs-2 col-sm-2 col-lg-1" >
                            <input className="form-control" type="text" placeholder="Day" />
                        </div>
                        <div className="col-xs-2 col-sm-2 col-lg-1" >
                            <input className="form-control" type="text" placeholder="Month" />
                        </div>
                        <div className="col-xs-2 col-sm-2 col-lg-1" >
                            <input className="form-control" type="text" placeholder="Year" />
                        </div>
                        <div className="col-xs-0 col-sm-0 col-lg-5" ></div>
                    </div>
                    {/*  */}
                    {/*  */}
                    <div className="row py-2" >
                        <div className="col-sm-6 col-lg-3 mt-1" >Area</div>
                        <div className="col-sm-6 col-lg-3" >
                            <input className="form-control" type="text" placeholder="Medium input" />
                        </div>
                        <div className="col-sm-0 col-lg-5" ></div>
                    </div>
                    {/*  */}
                    {/*  */}
                    <div className="row py-2" >
                        <div className="col-sm-6 col-lg-3 mt-1" >City</div>
                        <div className="col-sm-6 col-lg-3" >
                            <input className="form-control" type="text" placeholder="Medium input" />
                        </div>
                        <div className="col-sm-0 col-lg-5" ></div>
                    </div>
                    {/*  */}
                    {/*  */}
                    <div className="row py-2" >
                        <div className="col-sm-6 col-lg-3 mt-1" >Country</div>
                        <div className="col-sm-6 col-lg-3" >
                            <input className="form-control" type="text" placeholder="Medium input" />
                        </div>
                        <div className="col-sm-0 col-lg-5" ></div>
                    </div>
                    {/*  */}
                    {/*  */}
                    <div className="row py-2" >
                        <div className="col-sm-6 col-lg-3 mt-1" >Postal Code</div>
                        <div className="col-sm-6 col-lg-3" >
                            <input className="form-control" type="text" placeholder="Medium input" />
                        </div>
                        <div className="col-sm-0 col-lg-5" ></div>
                    </div>
                    {/*  */}
                    <div className="row py-2" >
                        <div className="col-sm-6 col-lg-3 mt-1" >House # along with street number</div>
                        <div className="col-sm-6 col-lg-9" >
                            <input className="form-control" type="text" placeholder="Medium input" />
                        </div>
                    </div>
                    {/*  */}
                    <div className="row py-2" >
                        <div className="col-sm-6 col-lg-3 mt-1" >Gender</div>
                        <div className="col-sm-6 col-lg-3" >
                            <input className="form-control" type="text" placeholder="Medium input" />
                        </div>
                        <div className="col-sm-0 col-lg-5" ></div>
                    </div>
                    {/*  */}
                    <p style={{ fontWeight: 600, margin: '30px  0px', textDecoration: 'underline', cursor: 'pointer' }}> This data will never revealed to anyone it`s just for the security of your own and you cannot continue without verification </p>
                    {/*  */}
                    <div className="row py-2" >
                        <div className="col-sm-6 col-lg-6 mt-1" >CNIC OR From B. Number</div>
                        <div className="col-sm-6 col-lg-5" >
                            <input className="form-control" type="text" placeholder="Medium input" />
                        </div>
                        <div className="col-sm-6 col-lg-1" ></div>
                    </div>
                    {/*  */}
                    <div className="row py-2" >
                        <div className="col-sm-6 col-lg-6 mt-1" >What is the name of your grandfather?</div>
                        <div className="col-sm-6 col-lg-5" >
                            <input className="form-control" type="text" placeholder="Medium input" />
                        </div>
                        <div className="col-sm-6 col-lg-1" ></div>
                    </div>
                    {/*  */}
                    <div className="row py-2" >
                        <div className="col-xs-12 col-sm-6 col-lg-8 mt-1" >What is the date of birth of your father a/c to his CNIC?</div>
                        <div className="col-xs-2 col-sm-2 col-lg-1" >
                            <input className="form-control" type="text" placeholder="" />
                        </div>
                        <div className="col-xs-2 col-sm-2 col-lg-1" >
                            <input className="form-control" type="text" placeholder="" />
                        </div>
                        <div className="col-xs-2 col-sm-2 col-lg-1" >
                            <input className="form-control" type="text" placeholder="" />
                        </div>
                        <div className="col-xs-0 col-sm-0 col-lg-1" ></div>
                    </div>
                    {/*  */}
                    <div className="row py-2" >
                        <div className="col-sm-6 col-lg-6 mt-1" >What is your mother name a/c to your Form B or CNIC?</div>
                        <div className="col-sm-6 col-lg-5" >
                            <input className="form-control" type="text" placeholder="Medium input" />
                        </div>
                        <div className="col-sm-6 col-lg-1" ></div>
                    </div>
                    {/*  */}
                    <p style={{ fontWeight: 600, textAlign: 'center', margin: '30px  0px' }}> Optional for better rankings you can edit or set them later </p>
                    <div className="row py-2" >
                        <div className="col-sm-6 col-lg-5 mt-1" >Specializations no. 1:</div>
                        <div className="col-sm-6 col-lg-4" >
                            <input className="form-control" type="text" placeholder="Medium input" />
                        </div>
                        <div className="col-sm-6 col-lg-3" ></div>
                    </div>
                    {/*  */}
                    <div className="row py-2" >
                        <div className="col-sm-6 col-lg-5 mt-1" >Specializations no. 2:</div>
                        <div className="col-sm-6 col-lg-4" >
                            <input className="form-control" type="text" placeholder="Medium input" />
                        </div>
                        <div className="col-sm-6 col-lg-3" ></div>
                    </div>
                    {/*  */}
                    <div className="row py-2" >
                        <div className="col-sm-6 col-lg-5 mt-1" >What would you like to teach?</div>
                        <div className="col-sm-6 col-lg-4" >
                            <input className="form-control" type="text" placeholder="Medium input" />
                        </div>
                        <div className="col-sm-6 col-lg-3" ></div>
                    </div>
                    {/*  */}
                    <div className="row py-2" >
                        <div className="col-sm-6 col-lg-5 mt-1" >What are your hobbies?</div>
                        <div className="col-sm-6 col-lg-4" >
                            <input className="form-control" type="text" placeholder="Medium input" />
                        </div>
                        <div className="col-sm-6 col-lg-3" ></div>
                    </div>
                    {/*  */}
                    <div className="row py-2" >
                        <div className="col-sm-6 col-lg-5 mt-1" >What is your motto in life?</div>
                        <div className="col-sm-6 col-lg-4" >
                            <input className="form-control" type="text" placeholder="Medium input" />
                        </div>
                        <div className="col-sm-6 col-lg-3" ></div>
                    </div>
                    <div className=" text-center mt-4" >
                        <button style={{ borderRadius: '20px' }} type="button" className="btn btn-success btn-rounded">Countinue</button>
                    </div>
                    {/*  */}

                </div>
            </div>
        )
    }
}

export default From