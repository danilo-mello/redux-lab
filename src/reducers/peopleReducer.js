const peopleData = []

const peopleReducer = (state = peopleData, action) => {

    switch(action.type) {

        case 'ADD_PERSON':

            const newPerson = {
                id: Math.random(),
                name: 'Max',
                age: Math.floor( Math.random() * 40 )
            }
            
            return [...state, newPerson]
            
          
        case 'DEL_PERSON':

            const currPeople = [...state]

            let newPeople = []


            for (let i = 0; i < currPeople.length; i++){
                if (currPeople[i].id !== action.payload.id) {
                    newPeople.push(currPeople[i])
                }
            }


            return newPeople

        default:
            return state
    }

}

export default peopleReducer;