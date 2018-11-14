export const createProject = (project) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        // make async call to database
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const authId = getState().firebase.auth.uid;

        firestore.collection('projects').add({
            ...project,
            authorFirstName: profile.firstName,
            authorLastName: profile.lastName,
            authorId: authId,
            createdAt: new Date()
        }).then(() => {
            dispatch({type: 'CREATE_PROJECT', project})
        }).catch((err) => {
            dispatch({type: 'CREATE_PROJECT_ERROR', err})
        })
    }
};

export const deleteProject = ((project) => {
    return ( dispatch, getState, {getFirebase, getFirestore}) => {
        const firestore = getFirestore();
        const project = getState().firestore.project;

    return firestore.collection('projects')
        .delete(project)
        .then(doc => console.log('project deleted', doc));
    }    
});