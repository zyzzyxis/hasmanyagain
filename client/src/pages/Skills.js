import useAxiosOnMount from '../hooks/useAxiosOnMount'
import AxiosContainer from '../components/AxiosContainer'
import List from '../components/List'
import { Link } from 'react-router-dom'
import CardContainer from '../components/CardContainer'


const Skills = (props)=>{
 const {data, loading, error} = useAxiosOnMount('/api/skills') 
 
 return (
     <AxiosContainer fullError loading={loading} error={error} loaderMessage={'Loading URL, please wait'}>
        <List name='Skills'
             data={data}
             renderData={(skill)=> {
               return(
                 <Link to={`skills/${skill.id}`}>
                 <CardContainer>
                    <p>{skill.name}</p>
                    <p>{skill.description}</p>
                  </CardContainer>
                 </Link>
               )
             }}
        />
     </AxiosContainer>
 )
}

export default Skills















