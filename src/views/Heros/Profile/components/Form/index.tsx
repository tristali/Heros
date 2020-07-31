import React from 'react';
import { useSelector } from 'react-redux';
import Div from './style';
import ConfirmButton from '../ConfirmButton';
import Info from '../Info';
import type { StateType, ProfilePropsKeyType } from '../../../../../store/reducer/type';
import type { HeroIdType } from '../../index';

function Form(props:{
  heroId: HeroIdType
}) {
  const { heroId } = props;
  const profile = useSelector((state: StateType) => state.profile);

  const renderInfo = () => {
    const infoCaptions = Object.keys(profile) as ProfilePropsKeyType[];
    const result = infoCaptions.map((item) => <Info key={item} caption={item} number={profile[item]} />);
    return result;
  }

  return <Div>
    <div>{renderInfo()}</div>
    <ConfirmButton heroId={heroId} />
  </Div>;
}

export default Form;