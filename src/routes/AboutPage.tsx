import {useHistory} from 'react-router-dom'

interface Props {
  
}

const AboutPage = (props: Props) => {
  const history = useHistory()

  return (
    <>
      <h1>About page</h1>
      <p>Lorem ipsum dolor sit amet.</p>
      <button onClick={() => history.push('/')}>Go to main page</button>
    </>
  )
}

export default AboutPage
