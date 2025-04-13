export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center items-center text-center px-6 py-16"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
      <div className="w-16 h-1 bg-black mb-10 mx-auto"></div>

      <div className="max-w-4xl w-full flex flex-col md:flex-row gap-8 mt-3">
        <div className="md:w-1/2 text-left">
          <h3 className="text-xl md:text-2xl font-semibold mb-4">What I Do</h3>
          <p className="text-base md:text-lg">
            I build high-performance web applications, modernize stock market
            systems, and develop enterprise dashboards.
          </p>
        </div>

        <div className="md:w-1/2 text-left">
          <div className="grid grid-cols-2 gap-6">
            <div>
              <p className="text-base md:text-lg font-medium">Name:</p>
              <p className="text-base md:text-lg text-gray-600">
                Ali Nikfarjam
              </p>
            </div>
            <div>
              <p className="text-base md:text-lg font-medium">Location:</p>
              <p className="text-base md:text-lg text-gray-600">Tehran</p>
            </div>
            <div>
              <p className="text-base md:text-lg font-medium">Email:</p>
              <p className="text-base md:text-lg text-gray-600">
                Alinikfarjam344@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
