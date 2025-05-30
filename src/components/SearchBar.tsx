
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface SearchBarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const SearchBar = ({ searchQuery, setSearchQuery }: SearchBarProps) => {
  return (
    <div className="relative w-full max-w-md">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
      <Input
        type="text"
        placeholder="Search movies and series..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="pl-10 bg-slate-800/50 border-slate-600 text-white placeholder-slate-400 focus:border-amber-400 focus:ring-amber-400/20"
      />
    </div>
  );
};

export default SearchBar;
