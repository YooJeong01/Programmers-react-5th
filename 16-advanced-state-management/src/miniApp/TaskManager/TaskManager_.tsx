import tw from "@/utils/tw"
import UnpinnedTaskList_ from "./UnpinnedTaskList_"
import PinnedTaskList_ from "./PinnedTaskList_"
import { TaskProvider } from "./@context"


function TaskManager_({ className }: { className: string }) {

  return (
    <TaskProvider>
      <div
        lang="en"
        className={tw('tw-72 flex flex-col p-5 border border-accent text-accent', className)}
      >
        <PinnedTaskList_ />
        <UnpinnedTaskList_ />
      </div>
    </TaskProvider>
  )
}
export default TaskManager_