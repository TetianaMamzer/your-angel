import style from './title.module.scss';

const Title = ({ text, light }) => {
  
  const fullNameStyle = light ? `${style.title} ${style.light}` : `${style.title}`
  return (
    <>
      <h2 className={fullNameStyle}>{text}</h2>
    </>
  )
}

export default Title;