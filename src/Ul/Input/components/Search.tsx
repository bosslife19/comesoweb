import { BsSearch } from "react-icons/bs";

interface SearchProps {
    id: string;
    name: string;
    value?: string;
    placeholder: string;
    disabled?: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Search: React.FC<SearchProps> = props => {
    const { id, name, value, placeholder, onChange, disabled } = props;
    return (
        <div className=" rounded-[19px] bg-[#F5F6FA]  border border-[#D5D5D5]   mr-1 px-3">
            <div className="flex items-center ">
                <span className="mr-2 cursor-pointer">
                    <BsSearch size={16} color="#667185" />
                </span>
                <input
                    id={id}
                    type="text"
                    name={name}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    disabled={disabled}
                    className="bg-[#F5F6FA]  outline-none flex-1 text-black text-md rounded-lg focus:outline-none  focus:ring-blue focus:border-blue placeholder-[#667185] disabled:cursor-not-allowed py-2 px- transition-all duration-300"
                />
            </div>
        </div>
    );
};

export default Search;
