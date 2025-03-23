const SearchBox = ({value, onChange}) => {
    return (
        <div>
            <input type="text" value={value} onChange={onChange} placeholder="Search contacts by name" />
        </div>
    )
}
export default SearchBox