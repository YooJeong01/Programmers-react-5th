import { useId } from "react"
import './UserSearchBox.css'
import { throttle } from "@/utils/throttle";
import { debounce } from "@/utils/debounce";

interface Props {
    isInstantSearch:boolean;
    searchTerm:string;
    onSearch : (userInput:string) => void;
    onReset : () => void;
}


function UserSearchBox({isInstantSearch, searchTerm ,onSearch, onReset}:Props) {

    const id = useId();

    const handleSearch = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const input = document.getElementById(id) as HTMLInputElement;
        const value = input.value.trim();
        console.log(value);
        
        
        if(value.length > 0) {
            // 사용자가 단어를 입력했음. 검색 진행
            onSearch?.(value);
            input.value = ''
        } else {
            // 사용자가 단어 입력 x. 검색 진행 x
            alert('검색어를 입력해주세요');
            input.value = ''
            input.focus();
        }        
    }

    const handleReset = () => {
        onReset?.()
    }

    // debounce와 throttle을 사용해 렌더링 속도 제어하기
    // const handleChange = throttle((e:React.ChangeEvent<HTMLInputElement>) => onSearch(e.target.value), 600);
    const handleChange = debounce((e:React.ChangeEvent<HTMLInputElement>) => onSearch(e.target.value), 600);

    return (
        <form 
            className="UserSearchBox"
            onSubmit={handleSearch}
            onReset={handleReset}
        >
            <div className="control">
                <label htmlFor={id}>사용자 검색{' '}
                    <input 
                        id={id} 
                        type="search"
                        placeholder="사용자 정보 입력"    
                        onChange={ isInstantSearch ? handleChange : undefined}
                    />
                </label>
            </div>
            <button hidden={isInstantSearch} type="submit">찾기</button>
            <button hidden={isInstantSearch} type="reset">목록 초기화</button>

        </form>
    )
}

export default UserSearchBox