import gql from 'graphql-tag';

export default  gql` 
    mutation sendMessage($acount: String, $text: String, $time: String){
        sendMessage(acount: $acount, text: $text, time: $time){
            text
        }
    }
`;