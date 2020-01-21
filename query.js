/** 
 * very first time when you run the project
 * query {
    people {
        id,
        firstname,
        lastname
    }
}
*/

/**
 * create using mutation
 * mutation CreatePerson($firstname: String!, $lastname: String!) {
    person(firstname: $firstname, lastname: $lastname) {
        id,
        firstname,
        lastname
    }
}
 */

/** 
 * get a particular person using id
 * query {
    person(id: "5e25a4c6f8fbf311fb577374") {
        firstname
    }
}
*/

/** 
 * get list of people and a particular person using id
 * query {
    people {
        id,
        firstname,
        lastname
    }
    person(id: "5e25a4c6f8fbf311fb577374") {
        firstname
    }
}
*/
