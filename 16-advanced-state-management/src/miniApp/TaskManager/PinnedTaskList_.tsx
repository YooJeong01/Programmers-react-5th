import tw from "@/utils/tw";
import { PiPushPinFill, PiPushPinLight } from "react-icons/pi";
import { useTask } from "./@context";

function PinnedTaskList_() {

  const {
    methods: { setTask, togglePin },
    pinnedTaskList
  } = useTask();

  const handleSetTask = (taskId: string, isCompleted: boolean) => setTask(taskId, isCompleted);

  const handleTogglePin = (taskId: string) => togglePin(taskId);



  return (
    <ul className="flex flex-col gap-6">
      {
        pinnedTaskList.map(({ content, id, isCompleted, isPin }) => (
          <li key={id} className="flex justify-between gap-1.5">
            <label className={tw("text-2xl flex gap-1", isCompleted && 'line-through')}>
              {/* onChange로 이벤트를 넣으면 checked 옵션 뽑아올수있다. onClick때는 에러난는듯 */}
              <input type="checkbox" onChange={(e) => handleSetTask(id, e.target.checked)} />
              {content}
            </label>
            <div className="flex gap-2">
              <button type="button" onClick={() => handleTogglePin(id)}>
                {isPin ? <PiPushPinFill /> : <PiPushPinLight />}
              </button>
            </div>
          </li>
        ))
      }
    </ul>
  )
}
export default PinnedTaskList_