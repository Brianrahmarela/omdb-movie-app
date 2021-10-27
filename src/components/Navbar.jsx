import React from 'react'
import { BrowserRouter, Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div 
      className="tw-bg-blue-500 tw-h-16" 
      data-testid="navbar"
    >
      <main className="tw-flex tw-flex-row tw-justify-between tw-max-w-7xl tw-mx-auto tw-p-4">
        <BrowserRouter>
          <Link to="/">
            <h1 className="tw-text-white tw-font-bold tw-text-2xl">
              OMDb
            </h1>
          </Link>
        </BrowserRouter>
        <main className="tw-flex">
          <h2 className="tw-text-white tw-font-bold tw-text-xl tw-mx-4">
            Movies
          </h2>
          <h2 className="tw-text-white tw-font-bold tw-text-xl">
            Collection
          </h2>
        </main>
      </main>
    </div>
  )
}

export default Navbar
