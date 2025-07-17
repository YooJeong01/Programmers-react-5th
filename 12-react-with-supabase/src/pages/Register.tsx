import { useId, useState } from 'react'
import S from './Register.module.css'
import supabase from '@/supabase/supabase';
import Swal from 'sweetalert2';

function Register() {

  const emailId = useId();
  const pwId = useId();
  const pwConfirmId = useId();
  const avatarId = useId();


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [avatarFile, setAvatarFile] = useState<File|null>(null);
  const [avatarPreview, setAvatarPreview] = useState<string|null>(null);
  
  const [error, setError] = useState<string|null>(null);
  
  const handleSubmit = async(e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if(passwordConfirm !== password){
      setError('비밀번호가 일치하지 않습니다')
    }
    const {
      data:{user}, // 회원가입한 대상
      error: signUpError
    } = await supabase.auth.signUp({
      email,
      password,
      // options:{ // 이메일 확인 커스텀
      //   emailRedirectTo:'http://localhost:3000/callback'
      // }
    })

    localStorage.clear();

    if(signUpError || !user) {
      console.error('회원가입 실패!');
      setError(signUpError?.message || '회원가입에 실패했습니다')
      return;
    }


    if(avatarFile){
      const fileExt = avatarFile.name.split('.').pop();
      const fileName = `${user.id}.${fileExt}`;
      const filePath = fileName;

      const {error : uploadError} = await supabase.storage
      .from('avatars')
      .upload(filePath, avatarFile,{
        upsert:true, //파일이 존재할때 덮어쓸거냐? 없으면 업데이트
      })

      if(uploadError){
        console.log(uploadError)
        setError('이미지 등록에 실패했습니다')
        return;
      }

    }
    
    Swal.fire({
      title: '회원가입 완료!',
      text : '로그인 페이지로 이동합니다.',
      icon : 'success',
    }).then(()=>{
      history.pushState(null,'','/Login');
      location.reload();
    })
    

  }


  return (
    <div className={S.container}>
      <form onSubmit={handleSubmit}> 
        <h2>회원가입</h2>
        <hr />
        <div>
          <label htmlFor={emailId}>이메일</label>
          <input 
            id = {emailId}
            type="email" 
            required
            onChange={(e)=>setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor={pwId}>비밀번호</label>
          <input 
            id = {pwId}
            type="password" 
            required
            onChange={(e)=>setPassword(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor={pwConfirmId}>비밀번호 확인</label>
          <input 
            id = {pwConfirmId}
            type="password" 
            required
            onChange={(e)=>setPasswordConfirm(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor={avatarId}>프로필 이미지</label>
          <input 
            id = {avatarId}
            type="file" 
            // 모든 이미지 확장자를 다 받을수 있도록
            accept='image/*'
            onChange={(e)=>{
              const file = e.target.files?.[0] ?? null;
              setAvatarFile(file);
              if(file){
                // 객체반환
                const reader = new FileReader();
                // 객체에 내장된 함수 사용
                reader.onloadend = () => {
                  setAvatarPreview(reader.result as string);
                }
                // 읽을 수 있게 이미지 url 생성해주는 함수
                reader.readAsDataURL(file);
              } else {
                // 파일이 없는 경우 처리
                setAvatarPreview(null);
              }
            }}
          />
          {
            avatarPreview && (
              <div style={{marginTop:'1rem', textAlign:'center'}}>
                <img 
                  src={avatarPreview} 
                  alt="프로필" 
                  style={{
                    width:'80px',
                    height:'80px',
                    borderRadius:'20px',
                    border: '1px solid #ccc'
                  }}
                />
              </div>
            )
          }
        </div>

        <button type="submit">가입하기</button>
        {
          error && <p>{error}</p>
        }
      </form>
    </div>
  )
}
export default Register