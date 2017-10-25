import gql from 'graphql-tag';

export default gql`
    {
        users {
            id
            acount
            password
            companies{
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