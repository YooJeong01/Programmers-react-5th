import { createContext, useContext, useMemo, useReducer } from "react";
import reducer, { addTask, deleteTask, INITIAL_TASK, setTask, togglePin, type Task } from "./@reducer";



type TaskMethods = {
  addTask: (nextStep: string) => void;
  deleteTask: (deleteId: string) => void;
  setTask: (taskId: string, isCompleted: boolean) => void;
  togglePin: (taskId: string) => void;
}


type TaskContextValue = {
  pinnedTaskList: Task[], // State로 써도 되지만 명시적이지 않기때문에 Task[] 로 씀
  unpinnedTaskList: Task[],
  methods: TaskMethods
} | null



const TaskContext = createContext<TaskContextValue>(null);
TaskContext.displayName = 'TaskContext'; // devtools에 뜸



export function TaskProvider(props: React.PropsWithChildren) {

  const [taskList, dispatch] = useReducer(reducer, INITIAL_TASK)

  // methods
  // 객체를 반환하기 때문에 useMemo (함수였으면 useCallback)
  const taskMethods = useMemo<TaskMethods>(() => {
    const handleAddTask = (nextStep: string) => { dispatch(addTask(nextStep)); }

    const handleDeleteTask = (deleteId: string) => { dispatch(deleteTask(deleteId)); }

    const handleTogglePin = (taskId: string) => { dispatch(togglePin(taskId)); }

    const handleSetTask = (taskId: string, isCompleted: boolean) => { dispatch(setTask(taskId, isCompleted)) }

    return {
      addTask: handleAddTask,
      deleteTask: handleDeleteTask,
      togglePin: handleTogglePin,
      setTask: handleSetTask
    }

  }, [])


  // 파생 상태
  const { pinnedTaskList, unpinnedTaskList } = useMemo(() => {
    return {
      pinnedTaskList: taskList.filter(task => task.isPin),
      unpinnedTaskList: taskList.filter(task => !task.isPin)
    }
  }, [taskList])


  return (
    <TaskContext.Provider value={{ pinnedTaskList, unpinnedTaskList, methods: taskMethods }} {...props} />
  )
}

export const useTask = () => {
  const contextValue = useContext(TaskContext)
  if (!contextValue) throw new Error('useTask 혹은 TaskProvider 내부에서만 사용 가능합니다');
  return contextValue;
}