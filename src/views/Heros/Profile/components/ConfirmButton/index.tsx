import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../../../../components/Button';
import Remained from '../Remained';
import Div from './style';
import { editProfile } from '../../../../../API/Heros';
import { modifyProfileLoading, initialRemainder } from '../../../../../store/action';
import type { StateType } from '../../../../../store/reducer/type';

function ConfirmButton(props:{
  heroId: string;
}) {
  const { heroId } = props;
  const profile = useSelector((state: StateType) => state.profile);
  const remainder = useSelector((state: StateType) => state.remainder);
  const backgroundColor = useSelector((state: StateType) => state.backgroundColor);
  const dispatch = useDispatch();
  const isAbleToSave = remainder === 0;
  const color = backgroundColor[1];

  const handleSave = () => {
    dispatch(modifyProfileLoading(true));
    editProfile(heroId, profile).then(()=>{
      dispatch(modifyProfileLoading(false));
      dispatch(initialRemainder());
    });
  }

  const remainedStyles = `
    cursor: default;
    :hover{
      box-shadow: none;
    }
  `

  return <Div>
    <Button borderWidth='1px' disabled={isAbleToSave} styles={remainedStyles} color={color}>
      <Remained number={remainder} />
    </Button>
    <Button onClick={handleSave} disabled={!isAbleToSave} color={color}>Save</Button>
  </Div>;
}

export default ConfirmButton;
