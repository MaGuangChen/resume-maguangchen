import gql from 'graphql-tag';

export default gql`
    mutation addCompany(
      $acount: String, $name: String, $position: String,
      $reservationDate: String, $minSalary: Int, 
      $maxSalary: Int){
        addCompanyToUser(
            acount: $acount, name: $name, position: $position,
            reservationDate:$reservationDate, minSalary:$minSalary,
            maxSalary:$maxSalary
        ){
            name
        }
    }
`;