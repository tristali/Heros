import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../../../../components/Button';
import Remained from '../Remained';
import Div from './style';
import { editProfile } from '../../../../../API/Heros';
import { modifyProfileLoading, initalRemainder } from '../../../../../store/action';
import type { StateType } from '../../../../../store/reducer';
import type { HeroIdType } from '../../index';
 
function ConfirmButton(props:{
  heroId: HeroIdType
}) {
  const { heroId } = props;
  const profile = useSelector((state: StateType) => state.profile);
  const remainder = useSelector((state: StateType) => state.remainder);
  const backgroundColor = useSelector((state: StateType) => state.backgroundColor);
  const dispatch = useDispatch();
  const isAbledSave = remainder === 0;
  const color = backgroundColor[1];

  const handleSave = () => {
    dispatch(modifyProfileLoading(true));
    editProfile(heroId, profile).then(()=>{
      dispatch(modifyProfileLoading(false));
      dispatch(initalRemainder());
    });
  }

  const remainedStyles = `
    cursor: default;
    :hover{
      box-shadow: none;
    }
  `

  return <Div>
    <Button borderWidth='1px' disabled={isAbledSave} styles={remainedStyles} color={color}>
      <Remained number={remainder} />
    </Button>
    <Button onClick={handleSave} disabled={!isAbledSave} color={color}>Save</Button>
  </Div>;
}

export default ConfirmButton;
