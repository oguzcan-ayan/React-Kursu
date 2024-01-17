/* import React from 'react';

export default function Modal({closeModal, name, data}) {
  return (
    <div>
        Show Modal Content
        <br/>
        <button onClick={closeModal}>
            Shut Down
        </button>
    </div>
  )
} */




import { useSelector, useDispatch } from 'react-redux';
import { closeModal } from '../stores/modal';
import modals from '../modals';

export default function Modal() {

  const dispatch = useDispatch();
  const {name, data } = useSelector(state => state.modal);
  const modal = modals.find(m => m.name === name);

  const close = () => {
    dispatch(closeModal())
  }

  return (
    <div className='modal'>
      <div className='modal-inner'>
        <modal.element data={data} close={close}/>
      </div>
    </div>
  )
}








