import { Link } from 'react-router-dom';

interface PlaceholderProps {
  title?: string;
  message?: string;
}

export default function Placeholder({ 
  title = "Sorry!",
  message = "This option is n/a right now"
}: PlaceholderProps) {
  return (
    <div className="min-h-screen bg-aqua-dark relative overflow-hidden">
      {/* Background decorative wave */}
      <div className="absolute inset-0 opacity-80">
        <div className="absolute top-0 left-0 w-full h-[40%] bg-aqua-light transform rotate-[4deg] origin-left scale-110 -translate-y-10"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header */}
        <header className="p-4 lg:p-8">
          <Link to="/">
            <h1 className="font-audiowide text-4xl lg:text-7xl text-aqua-brand font-normal tracking-wide hover:text-aqua-brand/80 transition-colors">
              Aqua Row
            </h1>
          </Link>
        </header>

        {/* Main Content */}
        <main className="flex-1 flex flex-col items-center justify-center px-4 text-center space-y-8">
          {/* Error Message */}
          <div className="space-y-4">
            <h2 className="text-4xl lg:text-6xl font-bold">
              <span className="text-aqua-yellow">{title} </span>
              <span className="text-white">{message}</span>
            </h2>
          </div>

          {/* Go Home Button */}
          <Link to="/">
            <button className="bg-aqua-beige hover:bg-aqua-beige/90 text-aqua-dark text-2xl lg:text-4xl font-bold py-6 lg:py-8 px-12 lg:px-16 rounded-[45px] transition-all hover:scale-105 shadow-2xl">
              Go To Home
            </button>
          </Link>

          {/* Decorative fish image */}
          <div className="absolute bottom-0 right-0 w-64 lg:w-96 h-64 lg:h-96 opacity-40 pointer-events-none">
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/d5b6b4d0f9afffea22ff683671d577b95764ee66?width=1794" 
              alt="Decorative aquatic element" 
              className="w-full h-full object-contain"
            />
          </div>
        </main>
      </div>
    </div>
  );
}
