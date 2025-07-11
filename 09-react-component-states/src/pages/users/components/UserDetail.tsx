import type { UserType } from "../types/user"

interface Props {
    user: UserType;
}


const S = {color:'inherit', textDecoration:'none'}

function UserDetail({user}:Props) {
    const {name, email, province} = user;
    return (
        <li>
            <strong>{name}</strong>
            {' '}-{' '}
            <span>
                <a style={S} href={`mailto:${email}`}>
                    {email} ({province})
                </a>
            </span>
        </li>
    )
}

export default UserDetail