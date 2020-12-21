import React from 'react';
import Forum from './Forum';
import styled from 'styled-components';

const Table=styled.table`
    table-layout: fixed;
    border: 10px solid #9d4822;
    background-color: #179e76;
    color: #e9f3ed;
`;

const Th=styled.th`
    border-right: 2px solid #e9f3ed;
`;

const Posters=styled.th`
    border-right: 2px double #e9f3ed;
    width: 19%;
`;


const ForumList=({topics,users})=>{

    const getPostersofTopic=(topic)=>{
        const posters=topic.posters.map(p=>users.filter(u=>u.id===p.user_id)[0]);
        return posters;
    }

    const getLastActivity=(time)=>{
        const now=Date.parse(new Date())/1000;
        const bumped=Date.parse(time)/1000;
        const lastActivity=now-bumped;
        if(lastActivity>=86400){
            return `${Math.floor(lastActivity/86400)}d`;
        }else if(lastActivity>=3600){
            return `${Math.floor(lastActivity/3600)}h`;
        }else if(lastActivity>=60){
            return `${Math.floor(lastActivity/60)}m`;
        }else{
            return '1m';
        }
    }

    return (
        <Table>
            <thead>
                <tr>
                    <Th>#</Th>
                    <Th>Topic</Th>
                    <Posters>Posters</Posters>
                    <Th>Replies</Th>
                    <Th>Views</Th>
                    <th>Activity</th>
                </tr>
            </thead>
            <tbody>
                {topics.map((t,i)=><Forum key={t.id} slug={t.slug} index={i+1} topic={t.title} posters={getPostersofTopic(t)} replies={t.reply_count} 
                views={t.views} activity={getLastActivity(t.bumped_at)} />)}
            </tbody>
        </Table>
    )
};

export default ForumList;