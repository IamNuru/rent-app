import { useSelector } from 'react-redux';

const ShowMyItem = (props) => {
  const authState = useSelector((state) => state.auth);

  if(!authState.user){
    return;
  }

  if (props.user_id !== authState.user?.id) {
    return;
  }


  return(props.children) 
}

export default ShowMyItem