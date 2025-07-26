import { Link, useNavigate } from 'react-router-dom';

const topics = [
  { id: 1, title: 'Topic 1' },
  { id: 2, title: 'Topic 2' },
  { id: 3, title: 'Topic 3' },
  { id: 4, title: 'Topic 4' },
  { id: 5, title: 'Topic 5' },
  { id: 6, title: 'Topic 6' },
  { id: 7, title: 'Topic 7' },
];

export default function Categories() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-aqua-dark relative overflow-hidden">
      {/* Background decorative wave */}
      <div className="absolute inset-0 opacity-80">
        <div className="absolute top-0 left-0 w-full h-[60%] bg-aqua-light transform rotate-[8deg] origin-left scale-110 -translate-y-20"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen">
        {/* Header */}
        <header className="flex flex-col lg:flex-row lg:items-center lg:justify-between p-4 lg:p-8">
          {/* Brand */}
          <div className="mb-6 lg:mb-0">
            <Link to="/">
              <h1 className="font-audiowide text-3xl lg:text-6xl text-aqua-brand font-normal tracking-wide hover:text-aqua-brand/80 transition-colors">
                Aqua Row
              </h1>
            </Link>
          </div>

          {/* Search Box */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
            <div className="bg-aqua-light rounded-2xl px-4 py-3 w-full sm:w-80 lg:w-96">
              <input
                type="text"
                placeholder="Search..."
                className="w-full bg-transparent text-aqua-brand placeholder-aqua-brand/70 outline-none text-lg"
              />
            </div>
            <button className="bg-aqua-teal hover:bg-aqua-teal/80 text-white px-6 py-3 rounded-2xl text-lg lg:text-2xl font-medium transition-colors">
              Search
            </button>
          </div>
        </header>

        <div className="flex flex-col lg:flex-row">
          {/* Sidebar Navigation */}
          <aside className="lg:w-80 p-4 lg:p-8">
            {/* Breadcrumb */}
            <nav className="mb-6 space-y-2">
              <Link 
                to="/" 
                className="block bg-aqua-green border border-aqua-green-dark rounded-tl-[48px] px-6 py-3 text-aqua-green-dark text-lg lg:text-xl font-medium hover:bg-aqua-green/80 transition-colors"
              >
                Home Page
              </Link>
              <div className="block bg-aqua-green border border-aqua-green-dark rounded-bl-[48px] px-6 py-3 text-aqua-green-dark text-lg lg:text-xl font-medium">
                Categories
              </div>
            </nav>

            {/* Topic Navigation */}
            <nav className="space-y-0">
              {topics.map((topic, index) => (
                <Link
                  key={topic.id}
                  to={`/topic/${topic.id}`}
                  className={`block bg-aqua-light border border-black px-6 py-6 text-black text-2xl lg:text-4xl font-montserrat font-bold text-center hover:bg-aqua-light/80 transition-colors ${
                    index === 0 ? 'rounded-tl-[48px]' : ''
                  } ${
                    index === topics.length - 1 ? 'rounded-br-[48px]' : ''
                  }`}
                >
                  {topic.title}
                </Link>
              ))}
            </nav>
          </aside>

          {/* Main Content Area */}
          <main className="flex-1 p-4 lg:p-8">
            <div className="bg-black/20 backdrop-blur-sm rounded-lg p-6 lg:p-12 text-white">
              <h2 className="text-3xl lg:text-5xl font-bold mb-8 text-center">
                Welcome to Categories
              </h2>
              
              <div className="space-y-6 text-base lg:text-lg leading-relaxed">
                <p>
                  Explore our comprehensive collection of topics covering various aspects of aquatic life, 
                  marine biology, and underwater ecosystems. Each topic provides in-depth information 
                  and engaging content to help you dive deeper into the fascinating world beneath the waves.
                </p>
                
                <p>
                  From coral reefs to deep-sea creatures, from coastal environments to open ocean habitats, 
                  our topics cover the full spectrum of marine life and oceanic phenomena. Select any topic 
                  from the sidebar to begin your underwater journey.
                </p>
                
                <p>
                  Whether you're a student, researcher, or simply someone fascinated by marine life, 
                  you'll find valuable insights and detailed explanations in each of our carefully 
                  curated topic sections.
                </p>
              </div>

              <div className="mt-12 text-center">
                <button 
                  onClick={() => navigate('/topic/1')}
                  className="bg-aqua-teal hover:bg-aqua-teal/80 text-white px-8 py-4 rounded-full text-xl font-medium transition-colors"
                >
                  Start with Topic 1
                </button>
              </div>
            </div>
          </main>
        </div>

        {/* Decorative fish image */}
        <div className="hidden lg:block absolute bottom-0 right-0 w-96 h-96 opacity-30 pointer-events-none">
          <img 
            src="https://api.builder.io/api/v1/image/assets/TEMP/14afe3b41275e4e523bc26ced3c1a1714afecf72?width=1794" 
            alt="Decorative aquatic element" 
            className="w-full h-full object-contain transform rotate-90"
          />
        </div>
      </div>
    </div>
  );
}
