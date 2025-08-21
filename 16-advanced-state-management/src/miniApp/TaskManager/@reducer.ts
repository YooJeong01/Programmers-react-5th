


// 타입 정의
export type Task = {
  id: string;
  content: string;
  isCompleted: boolean;
  isPin: boolean;
}

export type State = Task[]


const ACTION_TYPES = {
  ADD_TASK: '테스크 추가',
  SET_TASK: '테스크 토글',
  TOGGLE_PIN: '핀 토글',
  DELETE_TASK: '테스크 삭제',
} as const

type ActionType = typeof ACTION_TYPES[keyof typeof ACTION_TYPES];


// 초기값
export const INITIAL_TASK: State = [
  {
    id: '2904252c-d9e5-435b-815d-9cf7333e9e91',
    content: 'Context + Reducer',
    isCompleted: false,
    isPin: false
  },
  {
    id: '5f62f411-7b86-45de-9dcf-8162560c4cc7',
    content: 'Zustand',
    isCompleted: false,
    isPin: false
  },
]


type Action =
  | { type: typeof ACTION_TYPES.ADD_TASK, payload: string }
  | { type: typeof ACTION_TYPES.DELETE_TASK, payload: string } // task id
  | { type: typeof ACTION_TYPES.TOGGLE_PIN, payload: string } // task id
  | { type: typeof ACTION_TYPES.SET_TASK, payload: { taskId: string, isCompleted: boolean } } // {taskId, isCompleted}


/* 

action creator :
  Redux의 전통적인 패턴
  자동완성 / 타입추론 / 유지보수 때문에 쓴다
  action creator + reducer + context(methods wrapping) 구조로 주로 작성한다
  recoil, jotai?, zustand 도 이런식으로 짜여있다

  => RTK (Redux ToolKit) 의 createSlice()가 methods wrapping을 만들어준다
  ex. createSlice({
        name: 'tasks',
        reducers: {
          addTask: {...},
          deleteTask: {...},
        }
      })

  Zustand는 createSlice를 Slices Pattern 으로 따로 빼뒀다

*/
// addTask----------------------------------------------------------------

export type AddTaskAction = {
  type: typeof ACTION_TYPES.ADD_TASK;
  payload: string;
}

export const addTask = (nextStep: string): AddTaskAction => ({
  type: ACTION_TYPES.ADD_TASK,
  payload: nextStep
})

// deleteTask----------------------------------------------------------------


export type DeleteTaskAction = {
  type: typeof ACTION_TYPES.DELETE_TASK;
  payload: string;
}
export const deleteTask = (deleteId: string): DeleteTaskAction => ({
  type: ACTION_TYPES.DELETE_TASK,
  payload: deleteId
})


// togglePin----------------------------------------------------------------


export type TooglePinAction = {
  type: typeof ACTION_TYPES.TOGGLE_PIN;
  payload: string;
}
export const togglePin = (taskId: string) => ({
  type: ACTION_TYPES.TOGGLE_PIN,
  payload: taskId
})


// setTask----------------------------------------------------------------

export type SetTaskAction = {
  type: typeof ACTION_TYPES.SET_TASK;
  payload: { taskId: string, isCompleted: boolean };
}
export const setTask = (taskId: string, isCompleted: boolean): SetTaskAction => ({
  type: ACTION_TYPES.SET_TASK,
  payload: { taskId, isCompleted }
})







// reducer
export default function reducer(state: State, action: Action): State {

  switch (action.type) {
    // 추가
    case ACTION_TYPES.ADD_TASK: {
      // 태스크 생성  
      const newTask = {
        id: crypto.randomUUID(),
        content: action.payload,
        isCompleted: false,
        isPin: false
      }

      // 테스크 병함
      const nextState = [newTask, ...state];
      return nextState // 배열 리턴
    }

    // 제거
    // dispatch({type:ACTION_TYPES.DELETE_TASK, payload:'~~~'})
    case ACTION_TYPES.DELETE_TASK: {
      const deleteId = action.payload
      const nextState = state.filter((item) => item.id !== deleteId)
      return nextState // 배열 리턴
    }

    // 핀 토글
    // dispatch({type:ACTION_TYPES.TOGGLE_PIN, payload:'~~~'})
    case ACTION_TYPES.TOGGLE_PIN: {
      const taskId = action.payload
      const nextState = state.map((item) => {
        if (item.id === taskId) {
          const nextTask = { ...item, isPin: !item.isPin }
          return nextTask
        } else {
          return item
        }
      })

      return nextState
    }

    // 체크 토글
    // dispatch({type:ACTION_TYPES.SET_TASK, payload:{taskId:string, isCompleted:boolean}})
    case ACTION_TYPES.SET_TASK: {
      const { taskId, isCompleted } = action.payload

      const nextState = state.map((item) => {
        if (item.id === taskId) {
          const nextTask = { ...item, isCompleted }
          return nextTask
        } else {
          return item
        }
      })

      return nextState
    }

  }


}