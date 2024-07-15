
import { useNavigate } from 'react-router-dom'

export default function AboutUs() {
    const navigate = useNavigate()
    const handleClick =()=>{
        
        navigate("/home")
    }

  return (
    <>
    <div>Welcome AboutUs</div>
    <button onClick={handleClick}>Home</button>
    </>
  )
}
