import React, { useContext } from 'react';
import Styles from './input-styles.scss'
import Context from '@/presentation/contexts/form-context'

type Props = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

const Input: React.FC<Props> = (props: Props) => {
  const { state, setState } = useContext(Context)
  const error = state[`${props.name}Error`]
  const enableInput = ({ target }: React.FocusEvent<HTMLInputElement>): void => {
    target.readOnly = false
  }
  const handleChange = ({ target }: React.FocusEvent<HTMLInputElement>): void => {
    setState({ ...state, [target.name]: target.value })
  }
  const getStatus = (): string => '🔴'
  const getTitle = (): string => error;

  return (
    <div className={Styles.inputWrap}>
      <input {...props} data-testid={props.name} readOnly onFocus={enableInput} onChange={handleChange}/>
      <span data-testid={`${props.name}-status`} title={getTitle()} className={Styles.status}>{getStatus()}</span>
    </div>
  )
}

export default Input;
