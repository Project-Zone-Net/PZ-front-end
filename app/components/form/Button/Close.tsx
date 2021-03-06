import type {CloseButtonType} from 'app/types/form'

const CloseButton = ({
  onClickAction,
  focusRef,
}: CloseButtonType): JSX.Element => (
  <button className='h-6 items-start' onClick={onClickAction}>
    <span aria-label='dialog_close' tabIndex={-1} ref={focusRef}>
      &times;
    </span>
  </button>
)

export default CloseButton
