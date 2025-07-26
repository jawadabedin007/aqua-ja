import { Link, useParams } from 'react-router-dom';

const topics = [
  { id: 1, title: 'Topic 1' },
  { id: 2, title: 'Topic 2' },
  { id: 3, title: 'Topic 3' },
  { id: 4, title: 'Topic 4' },
  { id: 5, title: 'Topic 5' },
  { id: 6, title: 'Topic 6' },
  { id: 7, title: 'Topic 7' },
];

const loremContent = `What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).

Where does it come from? Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.

Where can I get some? There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.`;

export default function Topic() {
  const { id } = useParams<{ id: string }>();
  const topicId = parseInt(id || '1', 10);
  const currentTopic = topics.find(t => t.id === topicId) || topics[0];

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

          {/* Topic Title */}
          <div className="text-center lg:text-right">
            <h2 className="text-white text-4xl lg:text-7xl font-bold">
              {currentTopic.title}
            </h2>
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
              <Link
                to="/categories"
                className="block bg-aqua-green border border-aqua-green-dark rounded-bl-[48px] px-6 py-3 text-aqua-green-dark text-lg lg:text-xl font-medium hover:bg-aqua-green/80 transition-colors"
              >
                Categories
              </Link>
            </nav>

            {/* Topic Navigation */}
            <nav className="space-y-0">
              {topics.map((topic, index) => (
                <Link
                  key={topic.id}
                  to={`/topic/${topic.id}`}
                  className={`block border border-black px-6 py-6 text-2xl lg:text-4xl font-montserrat font-bold text-center transition-colors ${
                    topic.id === topicId
                      ? 'bg-black text-aqua-light'
                      : 'bg-aqua-light text-black hover:bg-aqua-light/80'
                  } ${
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
            <div className="max-w-4xl mx-auto">
              <div className="bg-black/20 backdrop-blur-sm rounded-lg p-6 lg:p-12 text-white">
                <div className="prose prose-lg lg:prose-xl prose-invert max-w-none">
                  <div className="text-base lg:text-xl leading-relaxed space-y-6">
                    {loremContent.split('\n\n').map((paragraph, index) => (
                      <p key={index} className="text-justify">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>

                {/* Navigation Controls */}
                <div className="mt-12 flex flex-col sm:flex-row justify-between gap-4">
                  {topicId > 1 && (
                    <Link
                      to={`/topic/${topicId - 1}`}
                      className="bg-aqua-teal hover:bg-aqua-teal/80 text-white px-6 py-3 rounded-full text-lg font-medium transition-colors text-center"
                    >
                      ← Previous Topic
                    </Link>
                  )}
                  
                  <Link
                    to="/categories"
                    className="bg-aqua-green hover:bg-aqua-green/80 text-aqua-green-dark px-6 py-3 rounded-full text-lg font-medium transition-colors text-center"
                  >
                    Back to Categories
                  </Link>

                  {topicId < topics.length && (
                    <Link
                      to={`/topic/${topicId + 1}`}
                      className="bg-aqua-teal hover:bg-aqua-teal/80 text-white px-6 py-3 rounded-full text-lg font-medium transition-colors text-center"
                    >
                      Next Topic →
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
