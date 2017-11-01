import gql from 'graphql-tag';

export default gql`
    mutation addMessageToUserMessage($userAcount: String, $text: String, $createdTime: String, $sendToUserAcount: String){
        addMessageToUserMessage(userAcount: $userAcount, text: $text, createdTime: $createdTime, sendToUserAcount: $sendToUserAcount) {
            id
        }
    }
`;