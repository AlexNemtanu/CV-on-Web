import React, { Component } from 'react'
import ProfileService from '../services/ProfileService';

class CreateProfileComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
            id: this.props.match.params.id,
            firstName: '',
            lastName: '',
            emailId: '',
            description: ''
        }
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.saveOrUpdateProfile = this.saveOrUpdateProfile.bind(this);
    }
    
    
    componentDidMount(){

        
        if(this.state.id === 'add'){
            return
        }else{
            ProfileService.getProfileById(this.state.id).then( (res) =>{
                let profile = res.data;
                this.setState({firstName: profile.firstName,
                    lastName: profile.lastName,
                    emailId : profile.emailId,
                    description: profile.description
                });
            });
        }        
    }
    saveOrUpdateProfile = (e) => {
        e.preventDefault();
        let profile = {firstName: this.state.firstName, lastName: this.state.lastName, emailId: this.state.emailId, description:this.state.description};
        console.log('profile => ' + JSON.stringify(profile));

       if(this.state.id === 'add'){
            ProfileService.createProfile(profile).then(res =>{
                this.props.history.push('/profiles');
                window.location.reload();
            });
        }else{
            ProfileService.updateProfile(profile, this.state.id).then( res => {
                this.props.history.push('/profiles');
                window.location.reload();
            });
        }
    }
    
    changeFirstNameHandler= (event) => {
        this.setState({firstName: event.target.value});
    }

    changeLastNameHandler= (event) => {
        this.setState({lastName: event.target.value});
    }

    changeEmailHandler= (event) => {
        this.setState({emailId: event.target.value});
    }
    changeDescriptionHandler= (event) => {
        this.setState({description: event.target.value});
    }

    cancel(){
        this.props.history.push('/profiles');
    }

    getTitle(){
        if(this.state.id === 'add'){
            return <h3 className="text-center">Add Profile</h3>
        }else{
            return <h3 className="text-center">Update Profile</h3>
        }
    }
    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    this.getTitle()
                                }
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> First Name: </label>
                                            <input placeholder="First Name" name="firstName" className="form-control" 
                                                value={this.state.firstName} onChange={this.changeFirstNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Last Name: </label>
                                            <input placeholder="Last Name" name="lastName" className="form-control" 
                                                value={this.state.lastName} onChange={this.changeLastNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Email Id: </label>
                                            <input placeholder="Email Address" name="emailId" className="form-control" 
                                                value={this.state.emailId} onChange={this.changeEmailHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Description: </label>
                                            <input placeholder="Description" name="description" className="form-control" 
                                                value={this.state.description} onChange={this.changeDescriptionHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.saveOrUpdateProfile}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default CreateProfileComponent