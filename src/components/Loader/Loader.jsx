import { ThreeDots } from 'react-loader-spinner';


export default function Loader() {
  return (
     <ThreeDots 
          height="80" 
          width="80" 
          radius="9"
          color="#3f51b5" 
          ariaLabel="three-dots-loading"
          wrapperStyle={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}
          wrapperClassName=""
          visible={true}
          />
  )
}
