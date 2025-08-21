import { useCallback, useId, useReducer } from "react";



type UseSwitchOptions = {
  defaultChecked?: boolean;
  checked?: boolean;
  onChange?: (next: boolean) => void;
  disabled?: boolean;
  id?: string;
}



type Action =
  | { type: 'SET', payload: boolean }
  | { type: 'TOGGLE' }

function reducer(state: boolean, action: Action) {
  switch (action.type) {
    case 'SET':
      return action.payload
    case "TOGGLE":
      return !state
    default:
      return state;
  }
}



export function useSwitch(opts: UseSwitchOptions = {}) {

  const {
    defaultChecked = false,
    checked,
    onChange,
    id,
    disabled
  } = opts;


  const [internal, dispatch] = useReducer(reducer, defaultChecked);

  const reactId = useId();

  // const [uncontrolled, setUncontrolled] = useState(defaultChecked);
  const isControlled = checked !== undefined;
  const isChecked = isControlled ? checked : internal;

  // 버튼을 눌렀을때 값 강제 지정하는 역할
  const setChecked = useCallback((next: boolean) => {
    if (!isControlled) dispatch({ type: 'SET', payload: next })
    onChange?.(next)
  }, [isControlled, onChange])

  const toggle = useCallback(() => {
    if (disabled) return;

    if (!isControlled) {
      dispatch({ type: 'TOGGLE' });
      onChange?.(!isChecked);

    } else {
      onChange?.(!isChecked);
    }
    setChecked(!isChecked);
  }, [disabled, isChecked, isControlled, onChange, setChecked])


  // 태그 속성
  const a11yProps = {
    // id가 존재한다면 id 값을 주고, 없다면 reactId 값 넣어줌
    id: id ?? reactId,
    role: 'switch' as const,
    'aria-label': String(isChecked),
    'aria-disabled': disabled || undefined,
    tabIndex: disabled ? -1 : 0,

    // event binding
    onClick: () => toggle(),
    onKeyDown: (e: React.KeyboardEvent) => {
      if (disabled) return;
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggle();
      }
      if (e.key === 'ArrowLeft') setChecked(false);
      if (e.key === 'ArrowRight') setChecked(true);
    }
  }

  return { checked: isChecked, setChecked, toggle, a11yProps, disabled }
}