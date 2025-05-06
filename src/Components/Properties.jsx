import React from 'react'

const Properties = () => {
  return (
    <div className="bg-gray-100 py-16 mt-20">
  <div className="mx-4 sm:mx-10 md:mx-20 lg:mx-28 text-center">
    {/* Header Section */}
    <div className="flex flex-col md:flex-row mb-12 text-left">
      <h1 className="text-3xl font-bold md:w-1/2 mb-4 md:mb-0">Property Neighborhoods</h1>
      <p className="md:w-1/2 text-gray-700 md:pl-12">
        Fostering a future where every individual finds their perfect home, every family creates lasting memories.
      </p>
    </div>

    {/* First Big Image */}
    <div className="relative mb-6">
      <img src="Big Home1.jpg" className="rounded-lg w-full h-auto max-h-68 object-cover" />
      <h2 className="text-2xl sm:text-3xl text-white font-semibold absolute top-1/2 left-6 transform -translate-y-1/2">
        Addis Ababa, Bole
      </h2>
      <div className="absolute bottom-4 left-6 flex flex-wrap items-center bg-black/60 rounded-xl gap-2 py-2 px-3">
        <img src="Table.png" className="w-5 h-5" />
        <p className="text-sm text-white">2,550 Sq ft</p>
        <img src="Bed.png" className="w-5 h-5" />
        <p className="text-sm text-white">5 Bedroom</p>
        <img src="Bath.png" className="w-5 h-5" />
        <p className="text-sm text-white">3 Bathroom</p>
      </div>
    </div>

    {/* Two Smaller Images */}
    <div className="flex flex-col md:flex-row gap-5 mb-10">
      {/* Left Side Image */}
      <div className="relative w-full md:w-3/5">
        <img src="Big Home2.jpg" className="rounded-lg w-full h-auto max-h-72 object-cover" />
        <h2 className="text-2xl sm:text-3xl text-white font-semibold absolute top-1/2 left-6 transform -translate-y-1/2">
          Hawassa, Piassa
        </h2>
        <div className="absolute bottom-4 left-6 flex flex-wrap items-center bg-black/60 rounded-xl gap-2 py-2 px-3">
          <img src="Table.png" className="w-5 h-5" />
          <p className="text-sm text-white">2,550 Sq ft</p>
          <img src="Bed.png" className="w-5 h-5" />
          <p className="text-sm text-white">5 Bedroom</p>
          <img src="Bath.png" className="w-5 h-5" />
          <p className="text-sm text-white">3 Bathroom</p>
        </div>
      </div>

      {/* Right Side Image */}
      <div className="relative w-full md:w-2/5">
        <img src="Big Home3.jpg" className="rounded-lg w-full h-auto max-h-72 object-cover" />
        <h2 className="text-2xl sm:text-3xl text-white font-semibold absolute top-1/2 left-6 transform -translate-y-1/2">
          Mekelle, Aynalem
        </h2>
        <div className="absolute bottom-4 left-6 flex flex-wrap items-center bg-black/60 rounded-xl gap-2 py-2 px-3">
          <img src="Table.png" className="w-5 h-5" />
          <p className="text-sm text-white">2,550 Sq ft</p>
          <img src="Bed.png" className="w-5 h-5" />
          <p className="text-sm text-white">5 Bedroom</p>
          <img src="Bath.png" className="w-5 h-5" />
          <p className="text-sm text-white">3 Bathroom</p>
        </div>
      </div>
    </div>

    {/* See More Button */}
    <p className="border-blue-700 border text-blue-700 px-6 py-2 inline-block cursor-pointer rounded-full 
    font-semibold hover:bg-blue-700 hover:text-white transition">
      See More
    </p>
  </div>
</div>
  )
}

export default Properties