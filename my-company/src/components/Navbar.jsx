import { Link } from 'react-router-dom';

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/services', label: 'Services' },
  { path: '/contact', label: 'Contact' }
];

function Navbar() {
  return (
    <nav
      style={{
        backgroundColor: '#444',
        padding: '10px',
        display: 'flex',
        justifyContent: 'space-between'
      }}
    >
      <div style={{ display: 'flex' }}>
        {navLinks.map(({ path, label }) => (
          <Link 
            key={path} 
            to={path} 
            style={{ color: 'white', marginRight: '20px', textDecoration: 'none' }}
          >
            {label}
          </Link>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;
