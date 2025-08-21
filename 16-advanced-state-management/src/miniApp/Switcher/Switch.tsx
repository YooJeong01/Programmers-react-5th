import { useSwitch } from '@/hook/useSwitchReducer';
import './switch.css'

interface Props {
  defaultChecked?: boolean;
  checked?: boolean;
  onChange?: (next: boolean) => void;
  disabled?: boolean;
  id?: string;
  size?: 'sm' | 'md' | 'lg'
}


function Switch({ size = 'md', ...restProps }: Props) {

  const { checked, a11yProps, disabled, setChecked } = useSwitch(restProps);

  return (
    <>
      <button
        {...a11yProps}
        className={[
          "switch",
          `switch--${size}`,
          checked ? "is-on" : "is-off",
          disabled ? "is-disabled" : "",
          "mb-1"
        ].join(" ")}
        type="button"
      >
        <span className="switch__track" />
        <span className="switch__thumb" />
      </button>
      <button type="button" className='border border-2 p-1 rounded-lg text-sm cursor-pointer' onClick={() => setChecked(true)}><b>SET</b></button>
    </>
  )
}
export default Switch



// 아래 코드 똑같은거 같은데 왜 안되지? => 언더스코어가 두개였다..
/**
 *   
  return (
    <button
      {...a11yProps}
      className={[
        "switch",
        `switch--${size}`,
        checked ? "is-on" : "is-off",
        disabled ? "is-disabled" : "",
      ].join(' ')}
      type="button"
    >
      <span className="switch_track" />
      <span className="switch_thumb" />
    </button>
  )

 */