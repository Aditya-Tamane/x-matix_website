'use client'
export default function Header() {
  return (
    <div className="header-section">
    <nav
      className="header-badge"
      // style={{
      //   backgroundColor: 'transparent', // very dark gray / almost black
      //   color: '#ffffff',
      //   padding: '0 2rem',
      //   height: '70px',
      //   width: '100%',
      //   display: 'flex',
      //   alignItems: 'center',
      //   justifyContent: 'space-between',
      //   position: 'relative',
      //   border: 'none',
      // }}
    >
      {/* Logo */}
      <div
        className="logo"
        style={{
          fontSize: '1.8rem',
          fontWeight: 'bold',
          letterSpacing: '-0.5px',
        }}
      >
        xMatix
      </div>

      {/* Navigation */}
      <ul
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '2.5rem',
          listStyle: 'none',
          margin: 0,
          padding: 0,
        }}
      >
        <li
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.35rem',
            fontSize: '1rem',
            fontWeight: 500,
            cursor: 'pointer',
          }}
        >
          Products <span style={{ fontSize: '0.75rem', opacity: 0.7 }}>▼</span>
        </li>

        <li
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.35rem',
            fontSize: '1rem',
            fontWeight: 500,
            cursor: 'pointer',
          }}
        >
          Solutions <span style={{ fontSize: '0.75rem', opacity: 0.7 }}>▼</span>
        </li>

        <li>
          <button
            style={{
              alignItems: 'center',
              backgroundColor: '#0066ff', 
              color: '#ffffff',
              border: 'none',
              padding: '10px 20px',
              borderRadius: '999px',
              fontSize: '1rem',
              fontWeight: 500,
              cursor: 'pointer',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#0055dd')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#0066ff')}
          >
            Contact Us
          </button>
        </li>
      </ul>
    </nav>
    </div>
  );
}