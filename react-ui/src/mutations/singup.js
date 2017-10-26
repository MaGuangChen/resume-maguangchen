import gql from 'graphql-tag';

export default gql`
  mutation signUp($acount: String, $password: String) {
    addUser(acount: $acount, password: $password) {
      id
      acount
    }
  }
`;
