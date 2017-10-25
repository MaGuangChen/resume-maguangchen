import gql from 'graphql-tag';

export default gql`
    {
        users {
            id
            acount
            password
            company{
                id
                name
                position
                location
                contactPeople
                eMail
                phoneNumber
            }
        }
    }
`;