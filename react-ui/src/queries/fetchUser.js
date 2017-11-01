import gql from 'graphql-tag';

export default gql`
    query fetchUser($id: ID!) {
        user(id:$id) {
            id
            acount
            company {
                id
                name
                position
                location
                eMail
                phoneNumber
                contactPeople
                minSalary
                maxSalary
                reservationDate
            }
        }
    }
`;