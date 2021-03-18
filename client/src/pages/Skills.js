import useAxiosOnMount from '../hooks/useAxiosOnMount'
import AxiosContainer from '../components/AxiosContainer'
import List from '../components/List'


const Skills = (props)=>{
 const {data, loading, error} = useAxiosOnMount('/api/skills') 
 
 return (
     <AxiosContainer fullError loading={loading} error={error} loaderMessage={'Loading URL, please wait'}>
        <List name='Skills'
          data={data}
        />
     </AxiosContainer>
 )
}

export default Skills















