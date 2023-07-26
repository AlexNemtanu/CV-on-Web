import React, { Component } from 'react';
import ProfileService from '../services/ProfileService';
import './ViewProfileComponent.module.css';
class ViewProfilesComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.match.params.id,
            profile: {}
        };
    }

    componentDidMount() {
        ProfileService.getProfileById(this.state.id).then(res => {
            this.setState({ profile: res.data });
        });
    }

    render() {
        const { firstName, lastName, emailId, description } = this.state.profile;

        return (
            <div>
                <div className="card col-md-8 offset-md-2 mt-5">
                    <div className="card-header">
                        <div className="row">
                            <div className="col-md-6 text-right">
                                <h5>{firstName} {lastName}</h5>
                            </div>
                            <div className="col-md-6 text-left">
                                <h5>{emailId}</h5>
                            </div>
                        </div>
                        <hr /> {/* Horizontal line */}
                    </div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col text-center">
                                <p>{description}</p>
                            </div>
                        </div>
                    </div>
                    <hr /> {/* Horizontal line */}
                </div>
            </div>
        );
    }
}

export default ViewProfilesComponent;
