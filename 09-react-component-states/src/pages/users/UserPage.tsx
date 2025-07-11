import userData from '@/data/users.json'
import { useState } from 'react'
import UserList from './components/UserList';
import UserSearchBox from './components/UserSearchBox';
import UserListCount from './components/UserListCount';
import InstantSearch from './components/InstantSearch';


function UserPage() {
    /* 상태 선언 ================================ */
    const [users] = useState(userData);
    const [searchTerm, setSearchTerm] = useState('');
    const [isInstantSearch, setIsInstantSearch] = useState(false);
    
    
    /* 상태 업데이트 ============================= */
    const handleSearch = (userInput:string) => {
        setSearchTerm(userInput)
        
    }

    const handleToggleInstanceSearch = () => {
        setIsInstantSearch(!isInstantSearch)
    }

    const handleReset = () => setSearchTerm('');

    /* 파생된 상태 ======================= */
    const searchedUsersList = users.filter((user)=>
        user.name.includes(searchTerm) ||
        user.email.includes(searchTerm) ||
        user.city.includes(searchTerm)

    )
  
    
    
    
    /* 마크업 =================================== */
    return (
        <div className="userPage">
            <InstantSearch 
            isInstantSearch={isInstantSearch}
            onToggle={handleToggleInstanceSearch}
            />
            <UserSearchBox 
            isInstantSearch={isInstantSearch}
            searchTerm={searchTerm}
            onSearch={handleSearch}
            onReset={handleReset}
            />
            <UserList users={searchedUsersList}/>
            <UserListCount 
            searchedUsersCount={searchedUsersList.length} 
            totalUsersCount={users.length}
            />
        </div>
    )
}

export default UserPage
