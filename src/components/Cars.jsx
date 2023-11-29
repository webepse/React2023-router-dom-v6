import { Outlet } from "react-router-dom"

const Cars = () => {
    return ( 
        <>
            <h1>Liste des voitures</h1>
            <div>
                Rechercher: 
                <input type="text" />
            </div>
            <div>voiture 1</div>
            <div>voiture 2</div>
            <div>voiture 3</div>
            <div>voiture 4</div>
            <Outlet />
        </>
     );
}
 
export default Cars;