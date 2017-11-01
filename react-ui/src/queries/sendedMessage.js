import gql from 'graphql-tag';

export default gql`
    query sendedMessage($sendToUserAcount: String!) {
        message(sendToUserAcount: $sendToUserAcount){
            text
            createdTime
          }
    }
`;