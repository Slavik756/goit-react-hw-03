
const Contact = ({name, number, onDelete, id}) => {
    return (
        <div>
        <div>
            <div>
             <p>{name}</p>   
            </div>
            <div>
                <p>{number}</p>
            </div>
        </div>
        <button type="submit" onClick={() => onDelete(id)}>Delete</button>
        </div>
    );
};

export default Contact;