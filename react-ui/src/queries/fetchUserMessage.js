import gql from 'graphql-tag';

export default gql`
    query fetchUserMessage($userAcount: String!) {
        userMessage(userAcount: $userAcount) {
            message {
                text
                createdTime
                sendToUserAcount
            }
        }
    }
`;