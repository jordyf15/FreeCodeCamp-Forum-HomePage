import axios from 'axios';

export const getForumPost=async()=>{
    const {data}=await axios.get('https://forum-proxy.freecodecamp.rocks/latest');
    const{users,topic_list}=data;
    const{topics}=topic_list;
    return {users,topics};
}