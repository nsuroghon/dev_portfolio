import { createContext, useState } from "react";

const ProjectsContext = createContext();

export const ProjectsProvider = ({children}) => {

    // Sample projects

    const [projects, setProjects] = useState([
        {
            id: 1,
            text: 'this item is from context',
            title: 'projectName'
        },
        {
            id: 2,
            text: 'this item is from context',
            title: 'projectName'
        }
    ])



    const [projectSelected, setProjectSelected] = useState({
        item: {},
        displayed: false
    })

    // set project to be displayed seperately, when user clicks on project from portfolio
    const displayProject = (item) => {
        setProjectSelected({
            item,
            displayed: true
        })
    }

    return <ProjectsContext.Provider 
        value={{
            projects,
            displayProject,
            projectSelected
        }}
        >
        {children}
    </ProjectsContext.Provider>
}

export default ProjectsContext