import React, {Component} from 'react'
import {connect} from 'react-redux'
import {compose} from "redux";
import {firestoreConnect} from "react-redux-firebase";
import PropTypes from "prop-types"
import { getFirebase } from 'react-redux-firebase';
import {deleteProject} from '../../store/actions/projectActions'



class DeleteProject extends Component {

    render(){
        return (
            <div className="container-button">
            <button className="delete" onClick={deleteProject()}>Supprimer le projet</button>
            </div>
        )
    }
}

export default DeleteProject;
