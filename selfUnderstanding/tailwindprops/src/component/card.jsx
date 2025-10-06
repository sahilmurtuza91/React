import React from 'react'

function card({username}) {
  return (
    <div className="relative h-[400px] w-[350px] rounded-md m-4">
  <img
    src="https://images.pexels.com/photos/33133388/pexels-photo-33133388.jpeg"
    alt="AirMax Pro"
    className="z-0 h-full w-full rounded-md object-cover"
  />
  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
  <div className="absolute bottom-4 left-4 text-left">
    <h1 className="text-lg font-semibold text-white ">{username}</h1>  
    <p className="mt-2 text-sm text-gray-300">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla porro quibusdam eveniet! Rerum porro ratione, molestias nemo reiciendis recusandae magni temporibus accusamus, ad culpa odit, et nostrum consequuntur dolore quas?
    </p>
    <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-black">
      View more →
    </button>
  </div>
</div>
  )
}

export default card
