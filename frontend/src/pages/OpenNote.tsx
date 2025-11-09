"use client"

import { useNavigate, useParams } from "react-router-dom"

import { MainButton } from "../components/MainButton"
import { NavBar } from "../components/navbar"

interface Note {
  id: string
  title: string
  description: string
}

export function OpenNote() {
  const navigate = useNavigate()
  const { noteId } = useParams()

  // gotta call here
  const note: Note = {
    id: noteId || "1",
    title: "Sample Note Title",
    description:
      "This is a sample note description. You can add any content here and it will be displayed in full on this page. The note view provides a clean, focused reading experience without distractions.",
  }

   {/*gotta add delete logic here*/}
  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this note?")) {
      // gotta call here
      // await deleteNote(note.id)
      navigate("/dashboard", { replace: true })
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />

      <div className="max-w-4xl mx-auto p-8">
        <div className="bg-[#B2E4DB] h-2 rounded-full mb-8" />
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">{note.title}</h1>
          <p className="text-gray-400 text-sm">Created on {new Date().toLocaleDateString()}</p>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">{note.description}</p>
        </div>

        <div className="flex gap-4 items-center">
          <div className="w-32">
            <MainButton label="Delete" clickHandler={handleDelete} />
          </div>
          <div className="w-32">
            <button
              onClick={() => navigate("/dashboard", { replace: true })}
              className="transition-all duration-120 select-none bg-gray-300 text-gray-800 font-medium text-center cursor-pointer p-1.25 w-full hover:bg-gray-400 active:bg-gray-500 rounded-lg text-sm px-5 py-2.5"
            >
              Back
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
