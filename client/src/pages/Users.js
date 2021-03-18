import useAxiosOnMount from '../hooks/useAxiosOnMount'
import AxiosContainer from '../components/AxiosContainer'
import List from '../components/List'


const Users = (props)=>{
 const {data, loading, error} = useAxiosOnMount('/api/users') 
 
 return (
     <AxiosContainer fullError loading={loading} error={error} loaderMessage={'Loading URL, please wait'}>
        <List name='Users'
          data={data}
        />
     </AxiosContainer>
 )
}

export default Users















