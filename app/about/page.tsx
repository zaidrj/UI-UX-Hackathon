export default function About() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">About Us</h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We are passionate about delivering exceptional products and experiences to our customers.
              Our journey began with a simple idea: to create a platform where quality meets
              convenience.
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Today, we continue to grow and evolve, always putting our customers first and striving
              to exceed expectations in everything we do.
            </p>
          </div>
          <div className="relative">
            <img
              src="https://source.unsplash.com/random/800x600?store"
              alt="Our store"
              className="rounded-lg object-cover"
            />
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">Our Values</h2>
          <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Quality",
                description:
                  "We source only the finest products that meet our strict quality standards.",
              },
              {
                title: "Customer Service",
                description:
                  "Our dedicated team is here to assist you every step of the way.",
              },
              {
                title: "Innovation",
                description:
                  "We constantly evolve and adapt to bring you the latest and best products.",
              },
            ].map((value) => (
              <div key={value.title} className="rounded-lg bg-gray-50 p-8">
                <h3 className="text-xl font-semibold text-gray-900">{value.title}</h3>
                <p className="mt-4 text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}