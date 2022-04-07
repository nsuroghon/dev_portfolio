import { createContext, useState, useEffect } from "react";

const ProjectsContext = createContext();

export const ProjectsProvider = ({children}) => {

    // Sample projects

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
        const response = await fetch(`/projects?_sort=id&_order=desc`)
        const data = await response.json()
        // console.log(data)

        setProjects(data)
    }
    

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