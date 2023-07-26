import React, { Component } from 'react';
import ProfileService from '../services/ProfileService';

class ListProfiles extends Component {
    constructor(props)
    {
        super(props)
        this.state = {
            profiles:[]
        }
        this.addProfile = this.addProfile.bind(this);
        this.editProfile = this.editProfile.bind(this);
        this.deleteProfile=this.deleteProfile.bind(this);
    }

    editProfile(id)
    {
        this.props.history.push(`/add-profile/${id}`);
        window.location.reload();
    }
    deleteProfile(id)
    {
        const shouldDelete = window.confirm("Are you sure you want to delete this profile?");
        if(shouldDelete){
            ProfileService.deleteProfile(id).then(res => {
                this.setState({profiles: this.state.profiles.filter(profile => profile.id !== id)});
            });
        }else {
            this.props.history.push('/list-profiles');
        }
       
    }
    viewProfile(id)
    {
        this.props.history.push(`/view-profile/${id}`);
        window.location.reload();
       
    }
    componentDidMount(){
        ProfileService.getProfiles().then((res) => {
            this.setState({profiles: res.data});
        });
    }
    addProfile(){
        this.props.history.push('/add-profile/add');
        window.location.reload();
    }

    render() {
        return (
            <div>
               <h2 className="text-center">CV's list</h2> 
               <div className="row">
            <button className="btn btn-primary" onClick={this.addProfile}>Add CV</button>
               </div>
               <div className = "row">
                <table className = "table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Description</th>
                           
                            
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.profiles.map(
                                profile =>
                                <tr key = {profile.id}>
                                    <td>{profile.firstName}</td>
                                    <td>{profile.lastName}</td>
                                    <td>{profile.emailId}</td>
                                    <td>{profile.description}</td>
                                    <td>
                                        <button onClick={ () => this.editProfile(profile.id)} className="btn btn-info">Update</button>
                                        <button style={{marginLeft: "10px"}} onClick={ () => this.deleteProfile(profile.id)} className="btn btn-danger">Delete</button>
                                        <button style={{marginLeft: "10px"}} onClick={ () => this.viewProfile(profile.id)} className="btn btn-info">View</button>
                                    </td>
                                </tr>
                            )
                        }

                    </tbody>

                    </table>


               </div>

                
            </div>
        );
    }
}

export default ListProfiles;