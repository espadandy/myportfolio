import React from 'react';
import { Link, Button } from '@aws-amplify/ui-react';

const Navbar: React.FC = () => {
  return (
    <nav style={styles.navbar}>
      <div style={styles.leftLinks}>
        <Link href="/" style={styles.link}>Home</Link>
        <Link href="/apps" style={styles.link}>Note</Link>
      </div>
      <div style={styles.rightLinks}>
        <Button variation="primary"><Link href="/login" style={styles.link}>Account</Link></Button>
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px 20px',
    backgroundColor: '#333',
    color: 'white'
  },
  leftLinks: {
    display: 'flex',
    gap: '10px'
  },
  rightLinks: {
    display: 'flex',
    justifyContent: 'flex-end'
  },
  link: {
    color: 'white',
    textDecoration: 'none'
  }
};

export default Navbar;