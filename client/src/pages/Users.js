import useAxiosOnMount from '../hooks/useAxiosOnMount'
import AxiosContainer from '../components/AxiosContainer'
import List from '../components/List'
import { Link } from 'react-router-dom'
import CardContainer from '../components/CardContainer'


const Users = (props)=>{
 const {data, loading, error} = useAxiosOnMount('/api/users') 
 
 return (
     <AxiosContainer fullError loading={loading} error={error} loaderMessage={'Loading URL, please wait'}>
        <List name='Users'
          data={data}
          renderData={(user)=> {
            return(
              <Link to={`users/${user.id}`}>
              <CardContainer>
                <p>{user.name}</p>
                </CardContainer>
              </Link>
            )
          }}
        />
     </AxiosContainer>
 )
}

export default Users


