import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import config from '../../../assets/config';
import { modifyBackgroundColor } from '../../../store/action';
import { getColor } from '../method';
import { fetchProfile } from '../../../store/views/Heros/action';

function Profile() {
  const [info, setInfo] = useState([]);
  const params = useParams();
  const { heroId } = params;
  const dispatch = useDispatch();
  
  useEffect(() => {
    const { colors } = config;
    const color = getColor(heroId, colors.item);
    dispatch(modifyBackgroundColor(color));
  }, [modifyBackgroundColor, dispatch, params]);

  useEffect(() => {
    fetchProfile(heroId).then((result) => {
      setInfo(result.data);
    });
  }, [params]);

  return <div>Profile</div>;
}

export default Profile;
