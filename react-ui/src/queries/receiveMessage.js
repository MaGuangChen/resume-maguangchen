import gql from 'graphql-tag';

export default gql`
    query receiveMessage($sendToUserAcount: String!) {
        message(sendToUserAcount: $sendToUserAcount){
            text
            createdTime
          }
    }
`;