import supabase from "@/supabase/supabase";

// promise로 타입 추론을 잘해주는데 명시한건 string|null 로 내보내기 위함인가?
export async function getAvatarUrl(userId:string):Promise<string|null>{
  const {data: files, error:listError } = await supabase.storage
  .from('avatars')
  .list("",{
    limit:100
  });

  if(listError || !files){
    console.error('파일을 불러오지 못했습니다');
    // 항상 이후 코드가 실행되지 않도록 return 처리 해주기
    return null;
  }

  // 파일명이 유저 아이디로 시작하는 파일 딱 하나 찾아서 객체 반환
  const matchedFile = files.find((file)=> file.name.startsWith(userId))

  // 파일없는 경우 예외처리
  if(!matchedFile){
    console.warn('해당하는 이미지가 없습니다');
    return null;
  }

  const {data} = supabase
  .storage
  .from('avatars')
  .getPublicUrl(matchedFile.name); // 객체에서 이름 뽑아서 url인자로 넘기기

  return data?.publicUrl || null;

}