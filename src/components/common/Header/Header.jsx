'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Logo from '../../../../public/images/Logo.png';
import Button from '../Button/button';
import './Header.css';

export default function Header({
  menuItems = {
    products: {
      left: { title: 'Our Products', items: [] },
      products: [], // renamed from allItems for clarity
    },
    solutions: { groups: [], itemsByGroup: {} },
  },
}) {
  const pathname = usePathname();

  // Safe defaults
  const prodData = {
    left: { title: 'Our Products', items: [] },
    products: [],
    ...menuItems?.products,
  };

  const solData = menuItems?.solutions || { groups: [], itemsByGroup: {} };

  const [activeMega, setActiveMega] = useState(null);

  return (
    <header className="header">
      <nav className="nav-pill">
        <div className="logo">
          <Link href="/">
            <Image
              src={Logo}
              alt="xMatix"
              width={85}
              height={32}
              priority
            />
          </Link>
        </div>

        <ul className="nav-links">
          {/* ── PRODUCTS MEGA MENU ─────────────────────────────────────── */}
          <li
            className="dropdown-container"
            onMouseEnter={() => setActiveMega('products')}
            onMouseLeave={() => setActiveMega(null)}
          >
            <button
              className={`nav-button ${pathname.startsWith('/products') ? 'active' : ''}`}
            >
              Products
              <ChevronDownIcon width={18} height={18} />
            </button>

            {activeMega === 'products' && (
              <div className="mega-dropdown products-mega">
                <div className="mega-content independent-split">

                 <div className="left-column">
                  <h3>Explore Categories</h3>
                  <ul>
                    {prodData.leftItems?.length > 0 ? (
                      prodData.leftItems.map((item) => (
                        <li key={item.slug} className="left-item">
                          <Link href={item.href} className="left-link">
                            <div className="left-title">{item.title}</div>
                            <div className="left-subtitle">{item.subtitle}</div>
                          </Link>
                        </li>
                      ))
                    ) : (
                      <li>No categories available</li>
                    )}
                  </ul>
                </div>

                  {/* RIGHT SIDE – flat list of all products */}
                  <div className="right-section">
                    <div className="products-grid">
                      {prodData.products.length > 0 ? (
                        prodData.products.map((product) => (
                          <Link
                            key={product.slug}
                            href={product.href}
                            className="product-card"
                          >
                            <div className="product-title">{product.title}</div>
                            {product.subtitle && (
                              <div className="product-subtitle">
                                {product.subtitle}
                              </div>
                            )}
                          </Link>
                        ))
                      ) : (
                        <div className="empty-placeholder">
                          No products available
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </li>

          {/* ── SOLUTIONS MEGA MENU (unchanged) ────────────────────────── */}
          <li
            className="dropdown-container"
            onMouseEnter={() => setActiveMega('solutions')}
            onMouseLeave={() => setActiveMega(null)}
          >
            <button
              className={`nav-button ${pathname.startsWith('/solutions') ? 'active' : ''}`}
            >
              Solutions
              <ChevronDownIcon width={18} height={18} />
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
                            <Link
                              key={item.slug}
                              href={item.href}
                              className="solution-card"
                            >
                              <div className="solution-title">{item.title}</div>
                              <div className="solution-subtitle">
                                {item.subtitle || ''}
                              </div>
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
            <Button title="Contact Us" />
          </li>
        </ul>
      </nav>
    </header>
  );
}