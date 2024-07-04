import React from 'react'

export function About() {
  return (
    <section>
      <div className="mx-auto max-w-7xl px-2 lg:px-0">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl lg:leading-tight">
            Enthusiastic Electronics Engineer
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lG text-gray-600">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam reiciendis a vel error
            explicabo voluptatum nihil possimus veritatis eos culpa.
          </p>
        </div>
    <section className="px-2 py-10 md:px-0">
      <div className="mx-auto max-w-4xl">
        <div className="md:flex md:items-center md:justify-center md:space-x-14">
          <div className="relative h-48 w-48 flex-shrink-0">
            <img
              className="relative h-48 w-48 rounded-full object-cover"
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
              alt=""
            />
          </div>

          <div className="mt-10 md:mt-0">
            <blockquote>
              <p className="text-2xl text-black">
                “Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam aliquam repellat
                laborum minima tempore deserunt explicabo placeat! Fugit, molestias nesciunt.”
              </p>
            </blockquote>
            <p className="mt-7 text-lg font-semibold text-black">Gayan khera</p>
            <p className="mt-1 text-base text-gray-600">Student Thapar University</p>
          </div>
        </div>
      </div>
    </section>
        <div className="mt-8 text-center md:mt-16">
          <button
            type="button"
            className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            More about Me
          </button>
        </div>
      </div>
    </section>
  )
}
