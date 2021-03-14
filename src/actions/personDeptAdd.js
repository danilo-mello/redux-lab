const personAdd = (data) => {
    return { 
        type: 'ADD_PERSON', 
        payload: { data } 
    }
}

export default personAdd