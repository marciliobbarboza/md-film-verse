
import { useState } from "react";
import { Star, Play, Info } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

interface Movie {
  id: number;
  title: string;
  genre: string[];
  rating: number;
  year: number;
  poster: string;
  type: "movie" | "series";
}

interface MovieCardProps {
  movie: Movie;
}

const MovieCard = ({ movie }: MovieCardProps) => {
  const [userRating, setUserRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);

  const handleRating = (rating: number) => {
    setUserRating(rating);
    // Here you would typically make an API call to save the rating
    console.log(`Rated ${movie.title} with ${rating} stars`);
  };

  const renderStars = (rating: number, interactive = false) => {
    return Array.from({ length: 5 }, (_, index) => {
      const starValue = index + 1;
      const isFilled = interactive 
        ? starValue <= (hoveredRating || userRating)
        : starValue <= rating;
      
      return (
        <Star
          key={index}
          className={`h-4 w-4 ${
            isFilled 
              ? 'fill-amber-400 text-amber-400' 
              : 'text-slate-400'
          } ${interactive ? 'cursor-pointer hover:text-amber-400' : ''}`}
          onClick={interactive ? () => handleRating(starValue) : undefined}
          onMouseEnter={interactive ? () => setHoveredRating(starValue) : undefined}
          onMouseLeave={interactive ? () => setHoveredRating(0) : undefined}
        />
      );
    });
  };

  return (
    <Card className="group bg-slate-800/50 border-slate-700 overflow-hidden hover:border-amber-500/50 transition-all duration-300 hover:transform hover:scale-105">
      <div className="relative">
        <img 
          src={movie.poster} 
          alt={movie.title}
          className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
        
        {/* Type Badge */}
        <Badge 
          className={`absolute top-2 right-2 ${
            movie.type === 'movie' 
              ? 'bg-blue-600 hover:bg-blue-700' 
              : 'bg-purple-600 hover:bg-purple-700'
          }`}
        >
          {movie.type === 'movie' ? 'Movie' : 'Series'}
        </Badge>

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <Dialog>
            <DialogTrigger asChild>
              <Button size="sm" className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-0">
                <Info className="h-4 w-4 mr-2" />
                Details
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-slate-800 border-slate-700 text-white max-w-md">
              <DialogHeader>
                <DialogTitle className="text-xl font-bold">{movie.title}</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <img 
                  src={movie.poster} 
                  alt={movie.title}
                  className="w-full h-48 object-cover rounded-lg"
                />
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-300">Year:</span>
                    <span>{movie.year}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-300">Type:</span>
                    <Badge variant="secondary">{movie.type}</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-300">Rating:</span>
                    <div className="flex items-center space-x-1">
                      {renderStars(movie.rating)}
                      <span className="text-sm text-slate-300 ml-2">{movie.rating}</span>
                    </div>
                  </div>
                </div>
                <div>
                  <span className="text-slate-300 block mb-2">Genres:</span>
                  <div className="flex flex-wrap gap-2">
                    {movie.genre.map((g) => (
                      <Badge key={g} variant="outline" className="border-slate-600 text-slate-300">
                        {g}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <span className="text-slate-300 block mb-2">Your Rating:</span>
                  <div className="flex items-center space-x-1">
                    {renderStars(userRating, true)}
                    {userRating > 0 && (
                      <span className="text-sm text-amber-400 ml-2">
                        {userRating} star{userRating > 1 ? 's' : ''}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <CardContent className="p-4">
        <h3 className="font-semibold text-white mb-2 line-clamp-1">{movie.title}</h3>
        <p className="text-sm text-slate-400 mb-3">{movie.year}</p>
        
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-1">
            {renderStars(movie.rating)}
            <span className="text-sm text-slate-300 ml-2">{movie.rating}</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-1">
          {movie.genre.slice(0, 2).map((g) => (
            <Badge key={g} variant="secondary" className="text-xs bg-slate-700 text-slate-300">
              {g}
            </Badge>
          ))}
          {movie.genre.length > 2 && (
            <Badge variant="secondary" className="text-xs bg-slate-700 text-slate-300">
              +{movie.genre.length - 2}
            </Badge>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default MovieCard;
