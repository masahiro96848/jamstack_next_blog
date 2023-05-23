import Link from 'next/link'

const header = () => {
  return (
    <header>
      <header>
        <nav className="p-2">
          <ul className="flex items-center space-x-2">
            <li>
              <img src="/vercel.svg" className="w-32" />
            </li>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
          </ul>
        </nav>
      </header>
    </header>
  )
}

export default header
