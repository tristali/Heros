import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { initialProfile, initialRemainder, modifyProfileLoading } from '../../../store/action';
import Div from './style';
import { fetchProfile } from '../../../API/Heros';
import Loading from '../../../components/Loading';
import Form from './components/Form';
import type { StateType } from '../../../store/reducer/type';

function Profile(props: { 
  heroId: string; 
}) {
  const { heroId } = props;
  const dispatch = useDispatch();
  const isLoading = useSelector((state: StateType) => state.isProfileLoading);

  useEffect(() => {
    dispatch(modifyProfileLoading(true));

    fetchProfile(heroId).then((result) => {
      dispatch(initialProfile(result));
      dispatch(initialRemainder());
      dispatch(modifyProfileLoading(false));
    }).catch((e)=>alert(e.message));

  }, [dispatch, modifyProfileLoading, initialProfile, initialRemainder, fetchProfile, heroId]);

  if (isLoading){
    return <Loading />
  }

  return <Div theme={{ heroId }}>
    <Form heroId={heroId} />
  </Div>;
}

export default Profile;