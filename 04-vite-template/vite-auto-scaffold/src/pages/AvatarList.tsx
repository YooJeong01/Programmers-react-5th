import {Avatar} from '../components/Avatar';

function AvatarListPage() {
  
  return (
    <ul className="avatarList">
      <Avatar name="jjanggu" status="online" />
      <Avatar name="jjangah" status="online" />
      <Avatar name="principal" status="online" />
      <Avatar name="maenggu" status="online" />
      <Avatar name="hoon" status="online" />
      <Avatar name="yuri" status="online" />
      <Avatar name="misun" status="online" />
    </ul>
  );
}

export default AvatarListPage;