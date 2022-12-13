// import PropTypes from 'prop-types'

function Header({ title }) {
  return (
    <div className="m-10">
      <p className='font-bold text-3xl text-center capitalize'>{title}</p>
    </div>
  )
}

Header.defaultProps = {
  title: "Login from add task",
}

// Header.propTypes = {
//   title: PropTypes.string
// }

export default Header
