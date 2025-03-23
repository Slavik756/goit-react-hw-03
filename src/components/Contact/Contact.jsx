import style from "./Contact.module.css"
const Contact = ({name, number, onDelete, id}) => {
    return (
        <div className={style.wrap}>
        <div>
            <div className={style.pi}>
             <p>{name}</p>   
            </div>
            <div > 
                <p>{number}</p>
            </div>
        </div>
        <button type="submit" onClick={() => onDelete(id)}>Delete</button>
        </div>
    );
};

export default Contact;