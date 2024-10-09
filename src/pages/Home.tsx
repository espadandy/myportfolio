import React from 'react';
import { Flex, Text, Image, Heading } from '@aws-amplify/ui-react'

const Home: React.FC = () => {
    return (
        <Flex
      direction={{ base: 'column', large: 'row' }}
      padding="1rem"
      width="100%"
      style = { styles.container }
    >
        <Image src="/me+cat.JPG" alt="Your Name" style={styles.image} />
        <Flex justifyContent="space-between" direction="column">
            <Heading level={3}>Welcome to my home page!</Heading>
            <Text style={styles.description}>
                你好, 我是徐奕聪。我是一名软件工程师, 擅长iOS开发和后端架构设计, 热衷于新技术的探索。
            </Text>
            <Text style={styles.description}>
                Hello, I am Yicong Xu, a software engineer specializing in iOS development and backend architecture design, and I am passionate about exploring new technologies.
            </Text>
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
        borderRadius: '40%'
    },
    description: {
        fontSize: '18px',
        marginTop: '10px'
    }
};

export default Home;