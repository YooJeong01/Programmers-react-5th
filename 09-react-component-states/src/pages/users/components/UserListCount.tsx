interface Props {
  searchedUsersCount:number;
  totalUsersCount:number;
}

function UserListCount({searchedUsersCount,totalUsersCount}:Props) {
  return (
    <span data-testid="user-list-count">
      {searchedUsersCount} / <b> {totalUsersCount} </b>
    </span>
  )
}
export default UserListCount