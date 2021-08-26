// Write your code here

import './index.css'

const UserDetails = props => {
  const {blogsData, deleteUser} = props
  const {name, role, email, id} = blogsData
  console.log(id)
  const onDelete = () => {
    deleteUser(id)
  }

  return (
    <div>
      <ul className="profile-container">
        <input type="checkbox" />
        <h1 className="name">{name}</h1>
        <p className="role">{role}</p>
        <p className="email">{email}</p>
        <div className="image-container">
          <img
            src="https://www.pngfind.com/pngs/m/70-704184_png-file-svg-pencil-edit-icon-png-transparent.png"
            alt="edit"
            className="edit"
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
            alt="delete"
            className="delete-img"
            onClick={onDelete}
          />
        </div>
      </ul>
    </div>
  )
}
export default UserDetails
