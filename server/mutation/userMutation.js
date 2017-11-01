const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, 
    GraphQLID, GraphQLInt } = graphql;
const mongoose = require('mongoose');

const user = mongoose.model('user');
const UserType =  require('../schema/type/user_type');
const CompanyType =  require('../schema/type/company_type');

const userMutation = {
    addUser: {
        type: UserType,
        args: {
            acount: { type: GraphQLString },
            password: { type: GraphQLString }
        },
        resolve(parentValue, { acount, password}){
            return (new user({ acount, password })).save()
        }
    },
    deleteUser: {
        type: UserType,
        args: { id: { type:  GraphQLID } },
        resolve(parentValue, { id }){
            return user.remove({ _id: id });
        }
    },
    addCompanyToUser:  {
		type: CompanyType,
		args: { 
		    acount: { type:  GraphQLString },
		    name: { type: GraphQLString },
			position: { type: GraphQLString },
			reservationDate: { type: GraphQLString },
			minSalary: { type: GraphQLInt },
            maxSalary: { type: GraphQLInt }
		},
		resolve(parentValue, { 
            acount, name, position,
             reservationDate, minSalary, maxSalary }) {
            return user.addCompany( acount, name, position, 
                reservationDate, minSalary, maxSalary);
		}
    },
    
};

module.exports = userMutation;