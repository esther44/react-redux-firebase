import React from 'react'
import {connect} from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'
import {Redirect} from 'react-router-dom';
import moment from 'moment' // Change date format - http://momentjs.com/
import DeleteProject from './DeleteProject'

const ProjectDetails = (props) => { // Props contient ici les détails du component à envoyer dans la route
    //console.log(Props);

    //const id = props.match.params.id;
    //console.log(props);
    const {project, auth} = props;
    if (!auth.uid) return <Redirect to='/signin'/>


    if (project) {

        return (
            <div className="container section project-details">
                <div className="card z-depth-0">
                    <div className="card-content">
                        <div className="card-title">{project.title}</div>
                        <p>{project.content}</p>
                    </div>
                    <div className="card-action gret lighten-4 grey-text">
                        <div>Posted by {project.authorFirstName} {project.authorLastName}</div>
                        <div>{moment(project.createdAt.toDate()).calendar()}</div>
                    </div>
                    <DeleteProject project={project}></DeleteProject>
                </div>
            </div>
        );
    }

    else {
        return (
            <div className="container center">
                <p>Loading project...</p>
            </div>
        )
    }
};

const MapStateToProps = (state, OwnProps) => {
    //console.log(state);
    const id = OwnProps.match.params.id;
    const projects = state.firestore.data.projects;
    const project = projects ? projects[id] : null;

    return {
        project: project,
        auth: state.firebase.auth
    }
};

export default compose(
    connect(MapStateToProps),
    firestoreConnect([
        {collection: 'projects'}
    ])
)(ProjectDetails)