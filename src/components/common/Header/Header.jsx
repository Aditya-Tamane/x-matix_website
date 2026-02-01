'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Logo from '../../../../public/images/Logo.png';
import Button from '../Button/button';
import { ArrowUpRightIcon } from '@heroicons/react/24/outline';
import './Header.css';

export default function Header({
  menuItems = {
    products: {
      leftItems: [],
      products: [],
    },
    solutions: { groups: [], itemsByGroup: {} },
  },
}) {
  const pathname = usePathname();
  const [activeMega, setActiveMega] = useState(null);

  const prodData = {
    leftItems: [],
    products: [],
    ...menuItems.products,
  };

  const solData = menuItems.solutions;

  return (
    <header className="header">
      <nav className="nav-pill">
        <div className="logo">
          <Link href="/">
            <Image src={Logo} alt="xMatix" width={85} height={32} priority />
          </Link>
        </div>

        <ul className="nav-links">

          {/* ───────── PRODUCTS ───────── */}
          <li
            className="dropdown-container"
            onMouseEnter={() => setActiveMega('products')}
            onMouseLeave={() => setActiveMega(null)}
          >
            <button
              className={`nav-button ${pathname.startsWith('/products') ? 'active' : ''}`}
            >
              Products <ChevronDownIcon width={18} height={18} />
            </button>

            {activeMega === 'products' && (
              <div className="mega-dropdown products-mega">
                <div className="mega-inner">

                  {/* LEFT COLUMN */}
                  <div className="mega-left">
                    <h3>Our Products</h3>
                    <ul>
                      {prodData.leftItems.map(item => (
                        <li key={item.slug}>
                          <Link href={item.href}>
                          <div className="left-item">
                            <div className="left-text">
                              <div className="left-title">{item.title}</div>
                              <div className="left-subtitle">{item.subtitle}</div>
                            </div>

                            <span className="left-arrow">
                              <ArrowUpRightIcon width={16} height={20} />
                            </span>
                          </div>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mega-divider" />

                  {/* RIGHT SIDE */}
                  <div className="mega-right">
                    <div className="products-columns">
                      {prodData.products.map(product => (
                        <Link
                          key={product.href}
                          href={product.href}
                          className="product-link"
                        >
                          {product.title}
                        </Link>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            )}
          </li>

          {/* ───────── SOLUTIONS ───────── */}
          <li
            className="dropdown-container"
            onMouseEnter={() => setActiveMega('solutions')}
            onMouseLeave={() => setActiveMega(null)}
          >
            <button
              className={`nav-button ${pathname.startsWith('/solutions') ? 'active' : ''}`}
            >
              Solutions <ChevronDownIcon width={18} height={18} />
            </button>

            {activeMega === 'solutions' && (
              <div className="mega-dropdown solutions-mega">
                <div className="solutions-grid">
                  {solData.groups.map(group => (
                    <div key={group} className="solution-group">
                      <h4>{group}</h4>
                      {solData.itemsByGroup[group]?.map(item => (
                        <Link
                          key={item.slug}
                          href={item.href}
                          className="solution-link"
                        >
                          {item.title}
                          {item.subtitle && <div className="solution-subtitle">{item.subtitle}</div>}
                        </Link>
                      ))}
                    </div>
                  ))}
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
