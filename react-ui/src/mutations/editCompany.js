import gql from 'graphql-tag';

export default {
    position: gql`
        mutation editCompanyPosition($id: ID, $position: String){
            editCompanyPosition(id: $id, position: $position){
                name
            }
        } 
    `,
    name: gql`
        mutation editCompanyName($id: ID, $name: String){
            editCompanyName(id: $id, name: $name){
                name
            }
        }
    `,
    location: gql`
        mutation editCompanyLocation($id: ID, $location: String){
            editCompanyLocation(id: $id, location: $location){
                name
            }
        }
    `,
    eMail: gql`
        mutation editCompanyEmail($id: ID, $eMail: String){
            editCompanyEmail(id: $id, eMail: $eMail){
                name
            }
        }
    `,
    phone: gql`
        mutation editCompanyPhoneNumber($id: ID, $phoneNumber: String){
            editCompanyPhoneNumber(id: $id, phoneNumber: $phoneNumber){
                name
            }
        }
    `,
    contactPeople: gql`
        mutation editCompanyContactPeople($id: ID, $contactPeople: String){
            editCompanyContactPeople(id: $id, contactPeople: $contactPeople){
                name
            }
        }
    `,
    minSalary: gql`
        mutation editMinSalary($id: ID, $minSalary: Int){
            editMinSalary(id: $id, minSalary: $minSalary){
                name
            }
        }
    `,
    maxSalary: gql`
        mutation editMaxSalary($id: ID, $maxSalary: Int){
            editMaxSalary(id: $id, maxSalary: $maxSalary){
                name
            }
        }
    `,
    reservationDate: gql`
        mutation editReserVationDate($id: ID, $reservationDate: String){
            editReserVationDate(id: $id, reservationDate: $reservationDate){
                name
            }
        }
    `,
}
