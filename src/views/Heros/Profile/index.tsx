import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { initalProfile, initalRemainder, modifyProfileLoading } from '../../../store/action';
import Div from './style';
import { fetchProfile } from '../../../API/Heros';
import Loading from '../../../components/Loading';
import Form from './components/Form';
import type { StateType } from '../../../store/reducer/type';

type HeroIdType = string;

function Profile() {
  const params = useParams() as { heroId: HeroIdType };
  const { heroId } = params;
  const dispatch = useDispatch();
  const isLoading = useSelector((state: StateType) => state.isProfileLoading);

  useEffect(() => {
    dispatch(modifyProfileLoading(true));

    fetchProfile(heroId).then((result) => {
      dispatch(initalProfile(result.data));
      dispatch(initalRemainder());
      dispatch(modifyProfileLoading(false));
    }).catch((e)=>alert(e.message));

  }, [dispatch, modifyProfileLoading, initalProfile, initalRemainder, fetchProfile, heroId]);

  if (isLoading){
    return <Loading />
  }

  return <Div theme={{ heroId }}>
    <Form heroId={heroId} />
  </Div>;
}

export default Profile;
export type { HeroIdType };