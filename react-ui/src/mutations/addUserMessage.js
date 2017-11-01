import gql from 'graphql-tag';

export default gql`
    mutation addUserMessage($userAcount: String){
        addUserMessage(userAcount: $userAcount) {
            id
        }
    }
`;