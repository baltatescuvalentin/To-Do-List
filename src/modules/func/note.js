


let note = (details) => {
    let _details = details;

    const getDetails = () => _details;

    const setDetails = (details) => {
        _details = details;
    }

    return { 
        getDetails, 
        setDetails,
    };
}

export default note;
