"use client"

import { useState } from "react"
import { MainButton } from "../components/MainButton"

interface AddNoteViewProps {
  noteId?: string
  initialTitle?: string
  initialDescription?: string
  isOpen: boolean
  onClose: () => void
  onSave: (title: string, description: string) => void
}

export function AddNoteView({
  noteId,
  initialTitle = "",
  initialDescription = "",
  isOpen,
  onClose,
  onSave,
}: AddNoteViewProps) {
  const [title, setTitle] = useState(initialTitle)
  const [description, setDescription] = useState(initialDescription)

  const handleSave = () => {
    if (title.trim() === "") {
      alert("Please enter a title")
      return
    }
    onSave(title, description)
    setTitle("")
    setDescription("")
  }

  const handleCancel = () => {
    setTitle("")
    setDescription("")
    onClose()
  }

  if (!isOpen) return null

  return (
    <>
      <div
        className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 transition-opacity duration-200"
        onClick={handleCancel}
      />

      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-xl max-w-md w-full animate-in fade-in slide-in-from-bottom-4 duration-200">

          <div className="bg-[#B2E4DB] px-6 py-4 rounded-t-lg">
            <h2 className="text-lg font-bold text-gray-800">{noteId ? "Edit Note" : "Add New Note"}</h2>
          </div>

          <div className="p-6 space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter note title"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B2E4DB] focus:border-transparent transition"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Enter note description"
                rows={5}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B2E4DB] focus:border-transparent transition resize-none"
              />
            </div>
          </div>

          <div className="px-6 py-4 bg-gray-50 rounded-b-lg flex gap-2">
            <div className="flex-1">
              <MainButton label="Cancel" clickHandler={handleCancel} />
            </div>
            <div className="flex-1">
              <MainButton label="Save" clickHandler={handleSave} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
