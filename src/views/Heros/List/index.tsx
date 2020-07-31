import React, { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../../components/Header';
import Loading from '../../../components/Loading';
import { fetchList } from '../../../API/Heros';
import Card from './components/Card';
import Div from './style';
import { useSelector } from 'react-redux';
import type { StateType } from '../../../store/reducer/type';

function List() {
  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const backgroundColor = useSelector((state: StateType) => state.backgroundColor);
  const color = backgroundColor[1];

  useEffect(()=>{
    setIsLoading(true);
    fetchList().then((result)=>{
      setList(result.data);
      setIsLoading(false);
    });
  }, [setList, setIsLoading, fetchList]);

  const getList = () =>
    list.map((item, index) => <Card key={index} {...item} />);

  const renderList = () => {
    if (isLoading){
      return <Loading />;
    }
    return getList();
  }

  return (
    <Fragment>
      <Link to={`/heroes`}>
        <Header color={color}>HEROS</Header>
      </Link>
      <Div theme={{ isLoading }}>{renderList()}</Div>
    </Fragment>
  );
}

export default List;