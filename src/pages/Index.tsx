
import { useState } from "react";
import { Search, Star, Film, User, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import AuthModal from "@/components/AuthModal";
import MovieCard from "@/components/MovieCard";
import SearchBar from "@/components/SearchBar";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  // Sample movie data for demonstration
  const featuredMovies = [
    {
      id: 1,
      title: "The Batman",
      genre: ["Action", "Crime", "Drama"],
      rating: 4.2,
      year: 2022,
      poster: "https://images.unsplash.com/photo-1489599904821-b33ee45b8a82?w=400&h=600&fit=crop",
      type: "movie"
    },
    {
      id: 2,
      title: "Dune",
      genre: ["Sci-Fi", "Adventure"],
      rating: 4.5,
      year: 2021,
      poster: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=400&h=600&fit=crop",
      type: "movie"
    },
    {
      id: 3,
      title: "The Crown",
      genre: ["Drama", "Biography"],
      rating: 4.3,
      year: 2016,
      poster: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop",
      type: "series"
    },
    {
      id: 4,
      title: "Interstellar",
      genre: ["Sci-Fi", "Drama"],
      rating: 4.8,
      year: 2014,
      poster: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=400&h=600&fit=crop",
      type: "movie"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Navigation */}
      <nav className="bg-slate-900/90 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-amber-500 to-orange-500 p-2 rounded-lg">
                <Film className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">MD Reviews</h1>
                <p className="text-xs text-amber-400">& Ratings</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
              
              {isLoggedIn ? (
                <div className="flex items-center space-x-4">
                  <span className="text-slate-300">Welcome back!</span>
                  <Button variant="outline" size="sm" className="border-slate-600 text-slate-300 hover:bg-slate-700">
                    Profile
                  </Button>
                </div>
              ) : (
                <Button 
                  onClick={() => setIsAuthOpen(true)}
                  className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white border-0"
                >
                  <User className="h-4 w-4 mr-2" />
                  Sign In
                </Button>
              )}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-slate-300"
              >
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-slate-700">
              <div className="space-y-4">
                <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
                <Button 
                  onClick={() => setIsAuthOpen(true)}
                  className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white border-0"
                >
                  <User className="h-4 w-4 mr-2" />
                  Sign In
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Discover & Rate
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
                Amazing Films
              </span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Join the community of film enthusiasts. Rate movies, discover hidden gems, and share your cinematic journey.
            </p>
          </div>

          {/* Featured Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="text-2xl font-bold text-amber-400 mb-2">10K+</div>
                <div className="text-slate-300">Movies & Series</div>
              </CardContent>
            </Card>
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="text-2xl font-bold text-amber-400 mb-2">50K+</div>
                <div className="text-slate-300">User Reviews</div>
              </CardContent>
            </Card>
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="text-2xl font-bold text-amber-400 mb-2">5K+</div>
                <div className="text-slate-300">Active Users</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Movies */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-white">Featured Movies & Series</h2>
            <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-700">
              View All
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredMovies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800 to-slate-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Rating?
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Join thousands of movie lovers and start building your film collection today.
          </p>
          <Button 
            onClick={() => setIsAuthOpen(true)}
            size="lg"
            className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white border-0 px-8 py-3 text-lg"
          >
            Get Started Free
          </Button>
        </div>
      </section>

      {/* Auth Modal */}
      <AuthModal 
        isOpen={isAuthOpen} 
        onClose={() => setIsAuthOpen(false)}
        onLogin={setIsLoggedIn}
        setUser={setUser}
      />
    </div>
  );
};

export default Index;
