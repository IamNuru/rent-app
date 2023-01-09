import { useSelector } from 'react-redux';

const ShowItemIfAllowed = ({children, allowedItems}) => {
  const authState = useSelector((state) => state.auth);

  if(allowedItems?.includes(authState?.user?.type)){
    return(children)
  }

}

export default ShowItemIfAllowed