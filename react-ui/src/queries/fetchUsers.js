import gql from 'graphql-tag';

export default gql`
    {
        user {
            id
            acount
            company
            position
        }
    }
`;