import Navbar from "./Navbar"
import useFetch from "./hooks/useFetch"
import useGetFullName from "./hooks/useGetFullName"



const About = () => {
    const { data, error } = useFetch("photos")
    console.log(data)
    return (
        <>
            {
                useGetFullName("Jane", "Smith")
            }
            <Navbar/>
            <div>
               
            Ths is the about page
        </div>
        </>
    )
}

export default About