import { useSelector } from 'react-redux';

const ShowItemIfAllowed = (props) => {
  const authState = useSelector((state) => state.auth);

  if (props.type === "*") {
    return(props.children) 
  }

  if (authState?.user?.type !== props.type) {
    return ''
  }

  return(props.children) 
}

export default ShowItemIfAllowed