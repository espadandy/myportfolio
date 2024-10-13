import React from 'react';
import { Link, Button } from '@aws-amplify/ui-react';

const Navbar: React.FC = () => {
  return (
    <nav style={styles.navbar}>
      <div style={styles.leftLinks}>
        <Button variation="link"><Link href="/" style={styles.link}>Home</Link></Button>
        <Button variation="link"><Link href="/apps" style={styles.link}>Note</Link></Button>
        <Button variation="link"><Link href="/gallery" style={styles.link}>Gallery</Link></Button>
        <Button variation="link"><Link href="/cv" style={styles.link}>CV</Link></Button>
      </div>
      <div style={styles.rightLinks}>
        <Button variation="link"><Link href="/login" style={styles.link}>Account</Link></Button>
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px 20px',
    backgroundColor: '#FF7F50',
    color: 'white'
  },
  leftLinks: {
    display: 'flex',
    gap: '10px'
  },
  rightLinks: {
    display: 'flex',
    justifyContent: 'flex-end',
    fontSize: '20px'
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '20px',
  }
};

export default Navbar;