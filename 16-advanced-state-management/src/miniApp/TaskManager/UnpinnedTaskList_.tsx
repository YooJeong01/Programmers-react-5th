import tw from "@/utils/tw";
import { PiPushPinFill, PiPushPinLight } from "react-icons/pi";
import { RxCross1 } from "react-icons/rx";
import { useTask } from "./@context";

function UnpinnedTaskList_() {

  const {
    methods: { deleteTask, setTask, togglePin },
    unpinnedTaskList
  } = useTask();



  const handleSetTask = (taskId: string, isCompleted: boolean) => setTask(taskId, isCompleted);

  const handleTogglePin = (taskId: string) => togglePin(taskId);

  const handleDeleteTask = (deleteId: string) => deleteTask(deleteId);

  return (
    <ul className="flex flex-col gap-6">
      {
        unpinnedTaskList.map(({ content, id, isCompleted, isPin }) => (
          <li key={id} className="flex justify-between gap-1.5">
            <label className={tw("flex gap-1", isCompleted && 'line-through')}>
              {/* onChange로 이벤트를 넣으면 checked 옵션 뽑아올수있다. onClick때는 에러난는듯 */}
              <input type="checkbox" onChange={(e) => handleSetTask(id, e.target.checked)} />
              {content}
            </label>
            <div className="flex gap-2">
              <button type="button" onClick={() => handleTogglePin(id)}>
                {isPin ? <PiPushPinFill /> : <PiPushPinLight />}
              </button>
              <button type="button" onClick={() => handleDeleteTask(id)}><RxCross1 /></button>
            </div>
          </li>
        ))
      }
    </ul>

  )
}
export default UnpinnedTaskList_