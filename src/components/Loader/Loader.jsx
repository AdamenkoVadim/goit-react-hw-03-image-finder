import { Circles } from 'react-loader-spinner';
import css from 'components/Loader/Loader.module.css'

export const Loader =() => {
    return (
        <div className={css.loader}>
          <Circles
              height="80"
              width="80"
              color="#4fa94d"
              ariaLabel="circles-loading"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
          />  
        </div>
    )
}