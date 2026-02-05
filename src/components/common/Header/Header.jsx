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
            {activeMega === 'products' && (
              <div className="overlap-container">
                <div className="mega-dropdown-container">
                  <div className="mega-dropdown products-mega">
                    <div className="mega-inner">
                      <div className="mega-left">
                        <h3>Our Products</h3>
                        <ul>
                          {prodData.leftItems.map(item => (
                            <li key={item.slug}>
                              <Link href={item.href}>
                              <div className="left-item">
                                <div className="left-text">
                                  <span className="left-title-box">
                                    <h5 className="left-title">{item.title}</h5>
                                    <ArrowUpRightIcon width={16} height={16} />
                                  </span>
                                  <p className="left-subtitle">{item.subtitle}</p>
                                </div>
                              </div>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="mega-divider" />
                      <div className="mega-right">
                        <div className="products-columns">
                          {prodData.products.map(product => (
                            <Link
                              key={product.href}
                              href={product.href}
                              className={`product-link ${pathname.includes(product.href) ? 'active' : ''}`}
                            >
                              {product.title}
                            </Link>
                          ))}
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            )}
            <button className={`nav-button ${pathname.startsWith('/products') ? 'active' : ''}`}>
              Products <ChevronDownIcon width={18} height={18} />
            </button>

          </li>

          {/* ───────── SOLUTIONS ───────── */}
          <li
            className="dropdown-container"
            onMouseEnter={() => setActiveMega('solutions')}
            onMouseLeave={() => setActiveMega(null)}
          >
            {activeMega === 'solutions' && (
              <div className="overlap-container">
                <div className="mega-dropdown-container">
                  <div className="mega-dropdown solutions-mega">
                    <div className="solutions-grid">
                      {solData.groups.map((group, idx) => (
                        <>
                          <div key={group} className="mega-left flex-1">
                            <h3>{group}</h3>
                            <ul>
                              {solData.itemsByGroup[group]?.map(item => (
                                <li key={item.slug}>
                                  <Link href={item.href}>
                                    <div className="left-item">
                                      <div className="left-text">
                                        <span className="left-title-box">
                                          <h5 className="left-title">{item.title}</h5>
                                          <ArrowUpRightIcon width={16} height={16} />
                                        </span>
                                        <p className="left-subtitle">{item.subtitle}</p>
                                      </div>
                                    </div>
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                          {idx != (solData.groups?.length - 1) && <div className="mega-divider" />}
                        </>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
            <button className={`nav-button ${pathname.startsWith('/solutions') ? 'active' : ''}`}>
              Solutions <ChevronDownIcon width={18} height={18} />
            </button>

          </li>

          <li>
            <Button title="Contact Us" size='medium' type='primary' />
          </li>
        </ul>
      </nav>
    </header>
  );
}
