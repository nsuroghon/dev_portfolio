// import axios from "axios";
import { createContext, useState, useEffect } from "react";

const ResumeContext = createContext();

export const ResumeProvider = ({children}) => {

    // Resume
    const [isLoading, setIsLoading] = useState(true)
    const [resumeData, setResumeData] = useState([]);

    useEffect(() => {
      fetchResume()
    }, [])
    
    
         // Fetch resume from db function
     const fetchResume = async () => {
        const response = await fetch(`/api/about?_sort=id&_order=desc`)
        const data = await response.json() 
        setResumeData(data[0])
        setIsLoading(false)
    }
    
    return <ResumeContext.Provider 
        value={{
            resumeData,
            isLoading
        }}
        >
        {children}
    </ResumeContext.Provider>
}

export default ResumeContext