import React from 'react';
import { Link, Card, Divider, Flex, Heading, Text } from "@aws-amplify/ui-react"

const CVPage: React.FC = () => {
    return (
        <Flex direction="column">
            <Heading level={1}>Yicong Xu (Andy)</Heading>
            <Heading level={2}>857-384-2867, yandyxu@outlook.com</Heading>
            <Divider></Divider>
            <Heading level={3}>Work Experience:</Heading>
            <Divider></Divider>
            <Card>
                <Flex direction="column" alignItems="flex-start">
                    <Heading level={4}>Software Development Engineer - Mobile, Onshape, PTC Inc.	Oct 2020 – present</Heading>
                    <Text textAlign="start">
                        <ul>
                            <li>Develop cloud native CAD software on iOS and Android. Create responsive UI with SwiftUI, UIKit and ReactiveObjC. Implement cutting-edge features through REST API and WebSocket. Build and launch new features by expanding in-house graphics library based on OpenGL ES and Metal.</li>
                            <li>Conduct code reviews and version control through GitHub and improve automated testing coverage (based on KIF and XCTest) for integration tests.</li>
                            <li>Collaborate with the UX, QA and DevOps teams to contributing to the overall product lifecycle.</li>
                            <li>Onboard new employees; interview and mentored interns. Write and maintain documentation.</li>
                        </ul>
                    </Text>
                </Flex>
            </Card>
            <Card>
                <Flex direction="column" alignItems="flex-start">
                    <Heading level={4}>Software Development Engineer - Mobile, Vuforia, PTC Inc.	May 2018 – Oct 2020</Heading>
                    <Text textAlign="start">
                        Contributed to AR app Vuforia View on iOS, Android, and UWP devices. Maintained and tested the internal graphics library. Wrote tests using JavaScript (AngularJS).
                    </Text>
                </Flex>
            </Card>
            <Card>
                <Flex direction="column" alignItems="flex-start">
                    <Heading level={4}>Robotics Engineer Internship, MiiVii Dynamics (start-up), Beijing	May 2017 – Aug. 2017</Heading>
                    <Text textAlign="start">
                        Calibrated RGBD cameras using OpenCV. Wrote Python scripts to test face recognition modules and ORB SLAM2. Accomplished robot-computer communication through ROS and tested on NVIDIA Jetson TX1.
                    </Text>
                </Flex>
            </Card>

            <Divider></Divider>
            <Heading level={3}>Education:</Heading>
            <Divider></Divider>
            <Card>
                <Flex direction="column" alignItems="flex-start">
                    <Heading level={4}>Worcester Polytechnic Institute (WPI), Worcester, MA, U.S.	Aug. 2016 – May 2018</Heading>
                    <Text textAlign="start">
                        Master of Robotics Engineering	GPA 3.9/4.0
                        Courses: Robot Dynamics, Robot Control, Formal Methods in Robotics, Machine Learning
                    </Text>
                </Flex>
            </Card>
            <Card>
                <Flex direction="column" alignItems="flex-start">
                    <Heading level={4}>Beihang University (BUAA), Beijing, China	Aug. 2012 – Jun. 2016</Heading>
                    <Text textAlign="start">
                        Bachelor of Electronic Information Engineering	GPA 3.5/4.0
                        Was selected as top 50 students to study in the School of Advanced Engineering. Completed honors courses in Electronic and Computer Engineering. Assisted research in wireless telecommunications.
                    </Text>
                </Flex>
            </Card>

            <Divider></Divider>
            <Heading level={3}>Projects:</Heading>
            <Divider></Divider>
            <Card>
                <Flex direction="column" alignItems="flex-start">
                    <Heading level={4}>
                        <Flex justifyContent="space-between" alignItems="center">
                            <Link
                                href='www.cechaton.com'
                                textDecoration={'underline'}
                                isExternal={true}>
                                AI Enhanced Diary
                            </Link>
                            <Text style={{ flexShrink: 0, marginLeft: '10px' }}>
                                Oct. 2024 – Present
                            </Text>
                        </Flex>
                    </Heading>
                    <Text textAlign="start">
                        <ul>
                            <li>Configured AWS Amplify to host a cross-platform note-taking application for web and iOS.</li>
                            <li>Developed a responsive web client using Amplify UI for React.</li>
                            <li>Integrated OpenAI GPT model to enable one-click note enrichment for users.</li>
                            <li>Implemented an iOS version to access to the same backend services and data.</li>
                        </ul>
                    </Text>
                </Flex>
            </Card>
            <Card>
                <Flex direction="column" alignItems="flex-start">
                    <Heading level={4}>
                        <Flex justifyContent="space-between" alignItems="center">
                            <Link
                                href='https://www.onshape.com/en/features/onshape-vision/'
                                textDecoration="underline"
                                isExternal={true}
                            >
                                Onshape Vision on Apple Vision Pro
                            </Link>
                            <Text style={{ flexShrink: 0, marginLeft: '10px' }}>
                                Sep. 2023 – Mar. 2024
                            </Text>
                        </Flex>
                    </Heading>
                    <Text textAlign="start">
                        <ul>
                            <li>Collaborated with Office of CTO to define and develop features for one of the first design review applications on visionOS. The application allows users to view and interact with CAD models transmitted from the Onshape iOS app.</li>
                            <li>Communicated the features and technical limitations of Onshape CAD system to ensure accurate expectations for the new product and eliminate uncertainties. Monitored project progress and synchronized release cycles  to ensure seamless integration between the two apps.</li>
                            <li>Implemented casting and pairing UI using SwiftUI and UIKit. Leveraged Apple’s Multipeer Connectivity and Swift Concurrency library to handle server-iOS-visionOS communication.</li>
                        </ul>
                    </Text>
                </Flex>
            </Card>
            <Card>
                <Flex direction="column" alignItems="flex-start">
                    <Heading level={4}>
                        <Flex justifyContent="space-between" alignItems="center">
                            <div>
                                <Link href='https://cad.onshape.com/help/Content/augmented_reality.htm' isExternal={true} textDecoration={'underline'}>
                                    AR
                                </Link>
                                {' '}and{' '}
                                <Link href='https://cad.onshape.com/help/Content/import-scan.htm' isExternal={true} textDecoration={'underline'}>
                                    Lidar scan
                                </Link>
                                {' '}in Onshape
                            </div>
                            <Text>Jun. 2021 – Mar. 2022</Text>
                        </Flex>
                    </Heading>
                    <Text textAlign="start">
                        <ul>
                            <li>Led and engineered the augmented reality project on iOS. In 2023, the AR feature has been opened by 39,700+ times from 18,400+ users.</li>
                            <li>Realized mesh scan and object placement by leveraging the Lidar and other hardware capabilities of the iPhone/iPad Pro.</li>
                            <li>Communicated the features and technical limitations of our CAD system to ensure accurate expectations for the new product, eliminating uncertainties. Monitored project progress and synchronized release cycles to ensure seamless integration between the two apps.</li>
                            <li>Integrated the augmented reality framework – Vuforia into Onshape through AWS S3.</li>
                        </ul>
                    </Text>
                </Flex>
            </Card>
            <Divider></Divider>
            <Heading level={3}>Publication:</Heading>
            <Divider></Divider>

            <Card>
                <Flex direction="column" alignItems="flex-start">
                    <Heading level={4}>
                        <Flex justifyContent="space-between" alignItems="center">
                            <Link href='https://arxiv.org/abs/1901.08522' textDecoration='underline'>
                                Mixed-Granularity Human-Swarm Interaction, ICRA
                            </Link>
                            <Text>Aug. 2017 – Apr.2018</Text>
                        </Flex>
                    </Heading>
                    <Text textAlign="start">
                        <ul>
                            <li>Developed an iOS application with an augmented reality interface in Unity.</li>
                            <li>Tracked objects with computer vision package Vuforia and sent the pose data through UDP socket. Integrated visual positioning system, Vicon, to locate poses of a robot swarm.</li>
                            <li>Engineered a swarm robot controller in the open-source simulator ARGoS in Linux to conduct decision making and motion planning.</li>
                            <li>Designed experiments that compared the effects of different levels of automation and human intervention on efficiency and cost savings.</li>
                        </ul>
                    </Text>
                </Flex>
            </Card>
            <Divider></Divider>
            <Heading level={3}>Skills:</Heading>
            <Divider></Divider>
            <Text textAlign={"start"}>
                <Heading>Programming Languages:</Heading>
                <Text>C/C++, Java, Python, Swift (Obj-C), Kotlin, TypeScript (JavaScript)</Text>
                <Heading marginTop = { '10px' }>Technologies:</Heading>
                <Text>Git, AWS, SQL, SwiftUI, Jetpack Composer, ARKit, ROS, Gazebo, OpenCV</Text>
            </Text>
        </ Flex>
    )
};

export default CVPage;