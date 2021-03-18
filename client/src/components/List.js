import { Children } from "react"

const List = (props)=>{
    const {name,  data, renderData} = props
    return(
        <>
        <h1>{name}</h1>
        <div>
            {data.map( d => renderData ? renderData(d) : <pre>{JSON.stringify(d,null,2)}</pre> )}
        </div>
        </>
    )
}

export default List