import React from 'react';

export class NavbarXS extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            dropDown: true
        }
    }
    render() {
        const { dropDown } = this.state
        return (
            <div className="container-fluid" style={{ background: "#00B8D4" }} >
                <div className="animated fadeInDown d-block" >
                    <div className="">

                        {dropDown ?
                            <div onClick={() => this.setState({ dropDown: false })} className="text-right px-4 text-white" style={{ background: "#00B8D4", fontSize: '160%' }} >
                                <i className="fa fa-list prefix" aria-hidden="true"></i>
                            </div>
                            :
                            <div >
                                <div style={{ background: "#00B8D4", fontSize: '160%' }} className="text-right px-4 text-white" ><span onClick={() => this.setState({ dropDown: true })} >  X  </span> </div>
                                <div >
                                    <input className="w-100 px-4" type="text" />
                                    <div>Sign Up</div>
                                    <div>Sign In</div>
                                </div>
                            </div>
                        }
                    </div>
                </div>

            </div>
        )
    }
}