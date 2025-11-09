import { Note } from "../components/Note";

interface NoteData {
  id: number;
  title: string;
  description: string;
}

export function NoteView() {
  //gotta call here
  const notes: NoteData[] = [
    {
      id: 1,
      title: "Project Ideas",
      description: "Brainstorm new project ideas for the upcoming quarter...",
    },
    {
      id: 1,
      title: "Meeting Notes",
      description: "Important points from today's standup meeting with the team...",
    },
    {
      id: 1,
      title: "To-Do List",
      description: "Complete API documentation and review pull requests...",
    },
    {
      id: 1,
      title: "Learning Resources",
      description: "Useful links and tutorials for TypeScript and React...",
    },
    {
      id: 1,
      title: "Learning Resources",
      description: "Useful links and tutorials for TypeScript and React...",
    },
    {
      id: 1,
      title: "Learning Resources",
      description: "Useful links and tutorials for TypeScript and React...",
    },
    {
      id: 1,
      title: "Learning Resources",
      description: "Useful links and tutorials for TypeScript and React...",
    },
  ];



  const handleDeleteNote = (id: number) => {
    console.log("Delete note:", id);
    // gotta call here
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">All Notes</h2>
          <p className="text-gray-600">
            {notes.length} notes • 
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {notes.map((note) => (
            <Note
              key={note.id}
              id={note.id}
              title={note.title}
              description={note.description}
              onDelete={handleDeleteNote}
            />
          ))}
        </div>

        
        {notes.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No notes yet. Create one to get started!</p>
          </div>
        )}
      </div>
    </div>
  );
}