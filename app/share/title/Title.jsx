import css from './title.module.scss';

const Title = ({ text, light }) => {
  
  const fullNameStyle = light ? `${css.title} ${css.light}` : `${css.title}`
  return (
    <>
      <h2 className={fullNameStyle}>{text}</h2>
    </>
  )
}

export default Title;