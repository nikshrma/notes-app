import { NavBar } from "../components/navbar";
import { NoteView } from "./NoteView";

export function Dashboard(){
    return<>
        <NavBar/>
        <NoteView/>
    </>
}