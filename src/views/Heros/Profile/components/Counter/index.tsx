import React, { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import IconBotton from '../../../../../components/IconBotton';
import config from '../../../../../assets/config';
import { modifyProfile, modifyRemainder } from '../../../../../store/action';
import type { StateType, RemainderType, ProfilePropsKeyType } from '../../../../../store/reducer';
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

  const isAbledAdd = remainder > 0;
  const isAbledMinus = number > 0;
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
    <IconBotton onClick={handleAdd} disabled={!isAbledAdd} color={addColor}>+</IconBotton>
    <h4>{number}</h4>
    <IconBotton onClick={handleMinus} disabled={!isAbledMinus} color={minusColor}>-</IconBotton>
  </Fragment>;
}

export default Counter;