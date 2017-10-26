import gql from 'graphql-tag';

export default gql`
    mutation addCompany(
      $userId: ID, $name: String, $position: String,
      $reservationDate: String, $minSalary: Int, 
      $maxSalary: Int){
        addCompanyToUser(
            userId: $userId, name: $name, position: $position,
            reservationDate:$reservationDate, minSalary:$minSalary,
            maxSalary:$maxSalary
        ){
            name
            position
        }
    }
`;