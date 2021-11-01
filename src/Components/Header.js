import React,{useState} from 'react'

function Header() {

  const [navbarOpen, setNavbarOpen] = useState(false);

	
	return (
	
    <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-black mb-3">
    <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
      <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
        <a
          className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
          href="/"
        >
      History of Internet
        </a>
        <button
          className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-white rounded bg-transparent block lg:hidden outline-none focus:outline-none"
          type="button"
          onClick={() => setNavbarOpen(!navbarOpen)}
        >
          <i className="fas fa-bars" color='white'></i>
        </button>
      </div>
      <div
        className={
          "lg:flex flex-grow items-center" +
          (navbarOpen ? " flex" : " hidden")
        }
        id="example-navbar-danger"
      >
        <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
          <li className="nav-item">
            <a
              className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
              href="/"
            >
              <i className="fab fa-facebook-square text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Home</span>
            </a>
          </li>
          <li className="nav-item">
            <a
              className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
              href="history"
            >
              <i className="fab fa-facebook-square text-lg leading-lg text-white opacity-75"></i><span className="ml-2">History</span>
            </a>
          </li>
          <li className="nav-item">
            <a
              className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
              href="networks"
            >
              <i className="fab fa-twitter text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Networks</span>
            </a>
          </li>
          <li className="nav-item">
            <a
              className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
              href="web1"
            >
              <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Web 1.0</span>
            </a>
          </li>
          <li className="nav-item">
            <a
              className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
              href="web2"
            >
              <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Web 2.0</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>



	)
}

export default Header
