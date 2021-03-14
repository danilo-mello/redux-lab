const personDel = (index, id) => {
    return { 
        type: 'DEL_PERSON', 
        payload: { index, id } 
    }
}

export default personDel