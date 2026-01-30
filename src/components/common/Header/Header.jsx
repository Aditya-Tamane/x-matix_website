'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Header({ menuItems = { products: { groups: [], itemsByGroup: {} }, solutions: { groups: [], itemsByGroup: {} } } }) {
  const pathname = usePathname();
  const [activeMega, setActiveMega] = useState(null);

  const prodData = menuItems.products || { groups: [], itemsByGroup: {} };
  const solData = menuItems.solutions || { groups: [], itemsByGroup: {} };

  const defaultProdGroup = prodData.groups[0] || null;
  const defaultSolGroup = solData.groups[0] || null;

  const [activeProdGroup, setActiveProdGroup] = useState(defaultProdGroup);
  const [activeSolGroup, setActiveSolGroup] = useState(defaultSolGroup);

  return (
    <header className="header">
      <nav className="nav-pill">
        <Link href="/" className="logo">
          xMatix
        </Link>

        <ul className="nav-links">
          <li
            className="dropdown-container"
            onMouseEnter={() => {
              setActiveMega('products');
              setActiveProdGroup(defaultProdGroup);
            }}
            onMouseLeave={() => setActiveMega(null)}
          >
            <button className={`nav-button ${pathname.startsWith('/products') ? 'active' : ''}`}>
              Products ▼
            </button>

            {activeMega === 'products' && (
              <div className="mega-dropdown products-mega">
                <div className="mega-content">
                  <div className="left-column">
                    <h3>Our Products</h3>
                    <ul>
                      {prodData.groups.map((group) => (
                        <li
                          key={group}
                          className={`group-item ${activeProdGroup === group ? 'active' : ''}`}
                          onClick={() => setActiveProdGroup(group)}
                        >
                          <div className="group-title">{group}</div>
                          <div className="group-subtitle">
                            {prodData.itemsByGroup[group]?.[0]?.subtitle || 'Explore our tools'}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="right-grid">
                    {activeProdGroup && prodData.itemsByGroup[activeProdGroup] ? (
                      <div className="products-grid">
                        {prodData.itemsByGroup[activeProdGroup].map((item) => (
                          <Link key={item.slug} href={item.href} className="product-card">
                            <div className="product-title">{item.title}</div>
                          </Link>
                        ))}
                      </div>
                    ) : (
                      <div className="placeholder">Select a category</div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </li>

          <li
            className="dropdown-container"
            onMouseEnter={() => {
              setActiveMega('solutions');
              setActiveSolGroup(defaultSolGroup);
            }}
            onMouseLeave={() => setActiveMega(null)}
          >
            <button className={`nav-button ${pathname.startsWith('/solutions') ? 'active' : ''}`}>
              Solutions ▼
            </button>

            {activeMega === 'solutions' && (
              <div className="mega-dropdown solutions-mega">
                <div className="mega-content solutions-content">
                  <div className="solutions-grid">
                    {solData.groups.map((group) => (
                      <div key={group} className="solution-group">
                        <h4>{group}</h4>
                        <div className="cards-container">
                          {solData.itemsByGroup[group]?.map((item) => (
                            <Link key={item.slug} href={item.href} className="solution-card">
                              <div className="solution-title">{item.title}</div>
                              <div className="solution-subtitle">{item.subtitle}</div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </li>

          <li>
            <button className="contact-btn">Contact Us</button>
          </li>
        </ul>
      </nav>
    </header>
  );
}