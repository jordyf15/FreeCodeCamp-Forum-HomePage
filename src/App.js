import React,{useState,useEffect} from 'react';
import {getForumPost} from './services/getForumPost';
import ForumList from './forumList/ForumList';
import styled from 'styled-components';

const H1=styled.h1`
  color: #e9f3ed;
`;

const App =()=>{
  const [users,setUsers]=useState(null);
  const [topics,setTopics]=useState(null);

  useEffect(()=>{
    getForumPost()
    .then((response)=>{
      setUsers(response.users);
      setTopics(response.topics);
    })
  },[])

  if(!topics || !users)return null;

  return(
    <div>
        <H1><i className="fab fa-free-code-camp"></i> FCC Forum HomePage</H1>
        <ForumList topics={topics} users={users}/>
    </div>
  )
};

export default App;