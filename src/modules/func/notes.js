


let notes = () => {
    let _notes = [];

    const addNote = (note) => {
        if(existNote(note) === false)
            _notes.push(note)
    };

    const removeNote = (note) => {
        _notes = _notes.filter((n) => n.getDetails() !== note.getDetails());
    }

    const existNote = (note) => {
        return _notes.some((n) => n.getDetails() === note.getDetails());
    }

    const getNote = (details) => {
        return _notes.find((n) => n.getDetails() === details);
    }

    const getNotes = () => _notes;

    return {
        addNote,
        removeNote,
        getNote,
        getNotes,
    }
}

export default notes;