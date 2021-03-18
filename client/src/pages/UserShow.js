import useAxiosOnMount from '../hooks/useAxiosOnMount'
import AxiosContainer from '../components/AxiosContainer'
import StringifyJson from '../components/StringifyJSON'
import {useParams} from 'react-router-dom'


const UserShow = (props)=>{
  const {id} = useParams()
  const {data, loading, error} = useAxiosOnMount(`/api/users/${id}`) 
 
 return (
     <AxiosContainer fullError loading={loading} error={error} loaderMessage={'Loading URL, please wait'}>
        <StringifyJson json={data}/>
     </AxiosContainer>
 )
}

export default UserShow


