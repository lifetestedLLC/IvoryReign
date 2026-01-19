export default function About() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="text-center mb-20">
        <h1 className="graffiti-heading mb-6">ABOUT IVORYREIGN</h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Born from the streets, elevated to royalty. We're more than a brand – we're a movement.
        </p>
      </section>

      {/* Story Section */}
      <section className="mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6 graffiti-text">
              <span className="text-graffiti-pink">OUR</span>{' '}
              <span className="text-graffiti-purple">STORY</span>
            </h2>
            <div className="space-y-4 text-gray-300">
              <p>
                IvoryReign was founded with a vision to merge the raw energy of street culture 
                with the sophistication of premium fashion. We believe that streetwear isn't just 
                clothing – it's a statement, an identity, a way of life.
              </p>
              <p>
                Our designs are inspired by graffiti art, hip-hop culture, and the unstoppable 
                spirit of urban communities worldwide. Each piece tells a story, carries a message, 
                and represents the reign of those who dare to be different.
              </p>
              <p>
                From carefully selected fabrics to bold graphics that pop, every detail is crafted 
                with precision and passion. We don't follow trends – we create them.
              </p>
            </div>
          </div>
          <div className="spray-paint-border rounded-2xl p-8 bg-gray-900">
            <div className="text-center">
              <div className="text-9xl mb-4">👑</div>
              <h3 className="text-3xl font-bold text-graffiti-yellow mb-4">REIGN SUPREME</h3>
              <p className="text-gray-400">
                Quality. Authenticity. Culture. These aren't just words – they're our foundation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="mb-20">
        <h2 className="text-4xl font-bold text-center mb-12 graffiti-text">
          <span className="text-graffiti-yellow">OUR</span>{' '}
          <span className="text-graffiti-green">VALUES</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="card-graffiti">
            <div className="text-5xl mb-4">🎨</div>
            <h3 className="text-xl font-bold text-white mb-2 graffiti-text">AUTHENTICITY</h3>
            <p className="text-gray-400 text-sm">
              Real art, real culture, real voices. No imitations, no compromises.
            </p>
          </div>
          <div className="card-graffiti">
            <div className="text-5xl mb-4">⭐</div>
            <h3 className="text-xl font-bold text-white mb-2 graffiti-text">EXCELLENCE</h3>
            <p className="text-gray-400 text-sm">
              Premium materials and superior craftsmanship in every single piece.
            </p>
          </div>
          <div className="card-graffiti">
            <div className="text-5xl mb-4">🌍</div>
            <h3 className="text-xl font-bold text-white mb-2 graffiti-text">COMMUNITY</h3>
            <p className="text-gray-400 text-sm">
              Building a global family united by style, passion, and purpose.
            </p>
          </div>
          <div className="card-graffiti">
            <div className="text-5xl mb-4">🚀</div>
            <h3 className="text-xl font-bold text-white mb-2 graffiti-text">INNOVATION</h3>
            <p className="text-gray-400 text-sm">
              Constantly pushing boundaries and redefining streetwear culture.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="mb-20">
        <h2 className="text-4xl font-bold text-center mb-12 graffiti-text">
          <span className="text-graffiti-pink">MEET</span>{' '}
          <span className="text-graffiti-purple">THE TEAM</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {['Nate', 'Marco', 'Jeff', 'Zion'].map((name) => (
            <div key={name} className="card-graffiti text-center">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-graffiti-pink to-graffiti-purple flex items-center justify-center text-6xl">
                👤
              </div>
              <h3 className="text-2xl font-bold text-white mb-2 graffiti-text">{name}</h3>
              <p className="text-graffiti-yellow font-bold mb-2">CO-FOUNDER</p>
              <p className="text-gray-400 text-sm">
                Visionary leader bringing street culture to the forefront of fashion.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Mission Section */}
      <section className="spray-paint-border rounded-2xl p-12 text-center">
        <h2 className="text-4xl font-bold mb-6 graffiti-text text-white">
          OUR MISSION
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
          To empower individuals through bold, authentic streetwear that celebrates urban culture 
          while maintaining the highest standards of quality and design. We're building a legacy, 
          one piece at a time.
        </p>
        <div className="text-6xl mb-4">♕</div>
        <p className="text-2xl font-bold text-graffiti-yellow graffiti-text">
          REIGN WITH US
        </p>
      </section>
    </div>
  );
}
