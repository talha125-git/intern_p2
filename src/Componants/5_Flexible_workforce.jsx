import React from 'react'

const Flexible_workforce = () => {
  return (
    <section className="">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-2  gap-14 items-center">


          {/* Left Image */}
          <div className="flex justify-center lg:justify-end">
            <img
              src="https://images.prismic.io/coople/aF6JcHfc4bHWiyLb_demand-fluctuation-EN-CH.png?auto=format%2Ccompress&rect=210%2C0%2C1980%2C1980&w=1200&fit=crop&crop=faces%2Centropy&q=75"
              alt="Working together"
              className="rounded-2xl w-full max-w-xl object-cover"
            />
          </div>


          {/* Right Content */}
          <div>
            <h1 className="text-2xl md:text-3xl lg:text-5xl text-gray-900 leading-tight">
              Is your flexible workforce delivering what your business needs?
            </h1>

            <h3 className="mt-6 text-gray-700 text-2xl max-w-xl">
              Are you struggling with:
            </h3>

            <ul className="mt-4 flex flex-col gap-2 list-disc pl-6 text-gray-700 text-lg">
              <li>Fluctuating demand that leads to costly over- or understaffing?</li>
              <li>Inconsistent productivity from flexible workers?</li>
              <li>Too much admin just to keep shifts filled?</li>
            </ul>
          </div>



        </div>
      </div>
    </section>
  )
}

export default Flexible_workforce