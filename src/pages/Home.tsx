import React from 'react';
const Home: React.FC = () => {
    return (
        <div style={styles.container}>
            <h1>Welcome to my home page!</h1>
            <img src="/me+cat.JPG" alt="Your Name" style={styles.image} />
            <p style={styles.description}>
                你好, 我是一名软件工程师, 擅长iOS开发和后端架构设计, 热衷于新技术的探索。
            </p>
            <p style={styles.description}>
            Hello, I am a software engineer specializing in iOS development and backend architecture design, and I am passionate about exploring new technologies.
            </p>
        </div>
    );
};

const styles: { [key: string]: React.CSSProperties } = {
    container: {
        textAlign: 'center',
        padding: '20px',
        color: 'black'
    },
    image: {
        width: '400px',
        borderRadius: '50%'
    },
    description: {
        fontSize: '18px',
        marginTop: '20px'
    }
};

export default Home;