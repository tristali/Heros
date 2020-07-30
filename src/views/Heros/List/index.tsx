import React, { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../../components/Header';
import Loading from '../../../components/Loading';
import { fetchList } from '../../../store/views/Heros/action';
import Card from './components/Card';
import Div from './style';
import { useSelector } from 'react-redux';
import type { state } from '../../../store/reducer';

function List() {
  const [list, setList] = useState([]);
  const backgroundColor = useSelector((state: state) => state.backgroundColor);

  useEffect(()=>{
    fetchList().then((result)=>{
      setList(result.data);
    });
  },[]);

  const getList = () =>
    list.map((item, index) => <Card key={index} {...item} />);

  const renderList = () => {
    if (list.length > 0){
      return getList();
    }
    return <Loading />;
  }

  return (
    <Fragment>
      <Link to={`/heroes`}>
        <Header color={backgroundColor[1]}>HEROS</Header>
      </Link>
      <Div>{renderList()}</Div>
    </Fragment>
  );
}

export default List;