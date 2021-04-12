import React, { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import IconButton from '../../../../../components/IconButton';
import config from '../../../../../assets/config';
import { modifyProfile, modifyRemainder } from '../../../../../store/action';
import type { StateType, RemainderType, ProfilePropsKeyType } from '../../../../../store/reducer/type';
import type { NumberType } from '../Info';

function Counter(props:{
  caption: ProfilePropsKeyType;
  number: NumberType;
}) {
  const { caption, number } = props;
  const profile = useSelector((state: StateType) => state.profile);
  const remainder = useSelector((state: StateType) => state.remainder);
  const dispatch = useDispatch();
  const { colors } = config;

  const isAbleToAdd = remainder > 0;
  const isAbleToMinus = number > 0;
  const addColor = colors.item[3][1];
  const minusColor = colors.item[1][1];

  const setHandleAction = (profileProps: number, remainder: RemainderType) => {
    const newProfile = Object.assign({}, profile);
    newProfile[caption] = profileProps;
    dispatch(modifyProfile(newProfile));
    dispatch(modifyRemainder(remainder));
  }

  const handleAdd = () => {
    setHandleAction((number + 1), (remainder - 1));
  }

  const handleMinus = () => {
    setHandleAction((number - 1), (remainder + 1));
  }

  return <Fragment>
    <IconButton onClick={handleAdd} disabled={!isAbleToAdd} color={addColor}>+</IconButton>
    <h4>{number}</h4>
    <IconButton onClick={handleMinus} disabled={!isAbleToMinus} color={minusColor}>-</IconButton>
  </Fragment>;
}

export default Counter;