
interface NoteProps {
  id: number;
  title: string;
  description: string;
  onEdit?: (id: number) => void;
  onDelete?: (id: number) => void;
}

export function Note({ id, title, description, onEdit, onDelete }: NoteProps) {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden cursor-pointer border border-gray-100 hover:border-[#B2E4DB] group">
      <div className="h-1 bg-[#B2E4DB]"></div>
      <div
        className="p-5 h-full flex flex-col"
        onClick={() => onEdit?.(id)}
      >
        <h3 className="font-bold text-lg text-gray-800 mb-3 line-clamp-2 group-hover:text-[#B2E4DB] transition-colors">
          {title}
        </h3>

        <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 grow mb-4">
          {description}
        </p>

        <div className="flex justify-between items-center pt-3 border-t border-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onEdit?.(id);
            }}
            className="text-xs font-medium text-[#B2E4DB] hover:text-[#8FCCBB] transition-colors"
          >
            Edit
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onDelete?.(id);
            }}
            className="text-xs font-medium text-red-500 hover:text-red-700 transition-colors"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}