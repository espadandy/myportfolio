import { Authenticator, Button, Flex } from "@aws-amplify/ui-react";
export default function LoginView() {
    return (
        <Authenticator>
            {({ signOut }) => (
                <Flex
                    className="App"
                    justifyContent="center"
                    alignItems="center"
                    direction="column"
                    width="70%"
                    margin="0 auto"
                >
                    <Button onClick={signOut}>Sign Out</Button>
                </Flex>
            )}
        </Authenticator>

    );
}