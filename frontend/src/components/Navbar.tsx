//import { useNavigate } from "react-router-dom";
import { MainButton } from "./MainButton";

export function NavBar(){

    return <div className=" bg-[#B2E4DB] flex justify-between h-14 shadow font-large font-bold">
        <div className="flex flex-col justify-center h-full ml-4">
    Notesy
        </div><div className="flex">

    <div className="mr-1 flex">
        <MainButton  label={"Add Note"}  clickHandler={() => {
           
            }}></MainButton>
        <MainButton label={"Log out"}  clickHandler={() => {
           
            }}></MainButton>
    </div>
        
        </div>
    </div>
}