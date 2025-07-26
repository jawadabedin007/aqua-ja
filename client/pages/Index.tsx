import { Link } from 'react-router-dom';

export default function Index() {
  return (
    <div className="min-h-screen bg-aqua-dark relative overflow-hidden">
      {/* Background decorative wave */}
      <div className="absolute inset-0 opacity-80">
        <div className="absolute top-[105px] -left-[5px] w-[1405px] h-[60%] bg-aqua-light transform rotate-[8deg] origin-left scale-110 -translate-y-20"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header */}
        <header className="flex flex-col lg:flex-row lg:items-center lg:justify-between p-4 lg:p-8">
          {/* Brand */}
          <div className="mb-6 lg:mb-0">
            <h1 className="font-audiowide italic text-4xl lg:text-[82px] leading-[72px] text-aqua-brand font-normal tracking-wide pt-[27px] pl-3">
              Aqua Row
            </h1>
          </div>

          {/* Navigation and Search */}
          <div className="flex flex-col lg:items-end space-y-4">
            {/* Top Navigation */}
            <nav className="flex flex-wrap gap-4 lg:gap-8 text-white text-base lg:text-3xl">
              <Link to="/login" className="font-aboreto italic hover:text-aqua-light transition-colors">
                Log in
              </Link>
              <Link to="/profile" className="font-aboreto italic hover:text-aqua-light transition-colors">
                Profile
              </Link>
              <Link to="/info" className="font-aboreto italic hover:text-aqua-light transition-colors">
                Info
              </Link>
            </nav>

            {/* Search Box */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
              <div className="bg-aqua-light rounded-2xl px-4 py-3 w-full sm:w-80 lg:w-96">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full bg-transparent text-aqua-brand placeholder-aqua-brand/70 outline-none text-lg italic"
                />
              </div>
              <button className="bg-aqua-teal hover:bg-aqua-teal/80 text-white px-6 py-3 rounded-2xl font-aldrich text-3xl font-medium transition-colors">
                Search
              </button>
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 flex flex-col lg:flex-row items-center justify-center px-4 lg:px-8 py-8 lg:py-16">
          {/* Left side - decorative fish image */}
          <div className="hidden lg:flex lg:flex-1 flex-col justify-end">
            {/* Decorative aquatic element */}
            <div className="w-full h-96 opacity-50">
              <img 
                src="https://cdn.builder.io/api/v1/image/assets%2F3099c1fdf8f64b89bd97f2b47537b6c2%2Fa971d16495964651af23d17bc2b1dded" 
                alt="Decorative aquatic element" 
                className="flex flex-grow object-contain w-[200%] pt-[200px]"
                style={{ margin: '96px -2px 0 -200px' }}
              />
            </div>
          </div>

          {/* Right side - Main CTA */}
          <div className="flex-1 flex flex-col items-center lg:items-end justify-center space-y-8">
            {/* Main CTA Button */}
            <Link to="/categories">
              <button 
                className="bg-aqua-light hover:bg-aqua-light/90 text-[#0c3946] rounded-full transition-all hover:scale-105 shadow-2xl font-zen-tokyo-zoo text-[41px] leading-10 font-bold mb-[200px]"
                style={{ padding: '77px 96px 68px' }}
              >
                <p>
                  <span>SEE CATEGORIES</span>
                </p>
              </button>
            </Link>
          </div>
        </main>
      </div>

      {/* Mobile decorative fish image */}
      <div className="lg:hidden absolute bottom-0 right-0 w-64 h-64 opacity-30">
        <img 
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/14afe3b41275e4e523bc26ced3c1a1714afecf72?width=1794" 
          alt="Decorative aquatic element" 
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
}
