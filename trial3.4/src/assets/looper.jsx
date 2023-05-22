const Block  = ({name, id, sch}) => {
    return (
      <div className='std_cont'>
        <div className='std'>
        <h3> Name:{name}</h3>
      <p>From:{sch}</p>
      <p>Id:{id}</p>
      </div>
      </div>
    )
    
  }

export default Block