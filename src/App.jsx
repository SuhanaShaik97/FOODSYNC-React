import { useState } from 'react'

const pages = [
  { label: 'Sign in', path: '/legacy/index.html' },
  { label: 'Customer', path: '/legacy/customer.html' },
  { label: 'Restaurant manager', path: '/legacy/manager.html' },
  { label: 'Delivery partner', path: '/legacy/delivery.html' },
  { label: 'Admin', path: '/legacy/admin.html' },
]

export default function App() {
  const [active, setActive] = useState(pages[0])
  return (
    <main className="app">
      <header className="topbar">
        <a className="brand" href="/" onClick={(e) => { e.preventDefault(); setActive(pages[0]) }}>
          FOODSYNC<span>.</span>
        </a>
        <nav aria-label="FoodSync sections">
          {pages.map((page) => (
            <button key={page.path} className={active.path === page.path ? 'active' : ''}
              onClick={() => setActive(page)}>{page.label}</button>
          ))}
        </nav>
      </header>
      <section className="content">
        <iframe key={active.path} title={active.label} src={active.path} />
      </section>
    </main>
  )
}
