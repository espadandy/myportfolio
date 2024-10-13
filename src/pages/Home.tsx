import React from 'react';
import { Flex, Text, Image, Heading } from '@aws-amplify/ui-react'

const Home: React.FC = () => {
    return (
        <Flex
            direction={{ base: 'column', large: 'row' }}
            padding="1rem"
            style={styles.container}
        >
            <Image src="/me+cat.JPG" alt="Your Name" style={styles.image} />
            <Flex justifyContent="space-between" direction="column">
                <Heading level={1}>Welcome to my home page!</Heading>
                <Text style={styles.description}>
                    你好, 我是徐奕聪。我是一名软件工程师, 擅长iOS开发和后端架构设计, 热衷于新技术的探索。
                </Text>
                <Text style={styles.description}>
                    Hello, I am Yicong Xu, a software engineer specializing in iOS development and backend architecture design, and I am passionate about exploring new technologies.
                </Text>
                <Heading level={4}>All my links</Heading>
                <a href="https://www.linkedin.com/in/yicong-xu-02270a101/">LinkedIn</a>
                <a href="https://github.com/espadandy">GitHub</a>
                <a href="https://leetcode.com/u/espadandy/">LeetCode</a>
            </Flex>
        </Flex>
    );
}

const styles: { [key: string]: React.CSSProperties } = {
    container: {
        textAlign: 'left',
        padding: '10px',
        color: 'black'
    },
    image: {
        width: '1000px',
        aspectRatio: '4/3',
        borderRadius: '40%',
        objectFit: 'cover'
    },
    description: {
        fontSize: '18px',
        marginTop: '10px'
    }
};

export default Home;