const TextInput = (props) => {
    const { value, onChange, placeholder } = props;
    return (
        <div>
            <input
                type="text"
                value={value}
                onChange={onChange}
                placeholder={placeholder}
            />
        </div>
    );
};

export default TextInput;
