import { useParams } from 'react-router'

const Car = () => {
    let { model } = useParams()
    return ( 
        <>
            <h1>Voiture {model}</h1>
        </>
     );
}
 
export default Car;