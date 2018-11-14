import React from 'react'
import ProjectSummary from './ProjectSummary'
import {Link} from 'react-router-dom'


const Projectlist = ({projects}) => {
    return (
        <div className="project-list section">
            {projects && projects.map(project => { // si il y a des projets alors faire la function map, si pas de projets ne rien faire
                return (
                    <Link to={'/project/' + project.id} key={project.id}>
                        <ProjectSummary project={project} />
                    </Link>
                )
            })}
        </div>
    )
};

export default Projectlist;