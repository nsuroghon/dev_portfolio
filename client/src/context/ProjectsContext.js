import { createContext, useState, useEffect } from "react";

const ProjectsContext = createContext();

export const ProjectsProvider = ({children}) => {

    // PROJECTS

    const [projects, setProjects] = useState([]);
    const [projectSelected, setProjectSelected] = useState({
        item: {},
        displayed: false
    })

    useEffect(() => {
      fetchProjects()
    }, [])

    // Fetch Projects from db function
    const fetchProjects = async () => {
        const response = await fetch(`/api/projects?_sort=id&_order=desc`)
        const data = await response.json()
        setProjects(data)
    }
    
    // set project to be displayed seperately, when user clicks on project from portfolio
    const displayProject = (item) => {
        setProjectSelected({
            item,
            displayed: true
        })
    }

    const removeProject = () => {
        setProjectSelected({
            item: {},
            displayed: false
        })
    }

    return <ProjectsContext.Provider 
        value={{
            projects,
            projectSelected,
            displayProject,
            removeProject
        }}
        >
        {children}
    </ProjectsContext.Provider>
}

export default ProjectsContext