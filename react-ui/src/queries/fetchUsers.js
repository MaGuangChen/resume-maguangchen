import gql from 'graphql-tag';

export default gql`
    {
        users {
            id
            acount
            password
        }
    }
`;