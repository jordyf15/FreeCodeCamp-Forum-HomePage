import React from 'react';
import styled from 'styled-components';

const Img=styled.img`
    border-radius: 15px;
    margin: 0px 2px;
    :hover{
        border: 2px solid black;
    }
`;

const Td=styled.td`
    border: 2px solid  #e9f3ed;
    border-bottom: none;
    border-left: none;
`;

const Topic=styled.td`
    border: 2px solid  #e9f3ed;
    border-bottom: none;
    border-left: none;
    :hover {
        color: black;
    }
`;

const Activity=styled.td`
    border-top: 2px solid  #e9f3ed;
`;

const Forum=({index,topic,replies,views,activity,posters,slug})=>{

    
    return(
        <tr>
            <Td>{index}</Td>
            <Topic onClick={()=>window.open(`https://forum.freecodecamp.org/t/${slug}`,'_blank')}>{topic}</Topic>
            <Td>{posters.map(p=>{
                return <Img onClick={()=>window.open(`https://www.freecodecamp.org/forum/u/${p.username}`,'_blank')} key={p.username} src={`https://freecodecamp.org/forum${p.avatar_template.replace('{size}','25')}`} alt='' height='25px' width='25px' />
                }
            )}</Td>
            <Td>{replies}</Td>
            <Td>{views}</Td> 
            <Activity>{activity}</Activity>
        </tr>
    )
};

export default Forum;