import './App.css'
// import FaqItem from './components/FaqItem'
import {Component} from 'react'

import UserDetails from './components/UserDetails'

class App extends Component {
  state = {blogsData: [], searchInput: ''}

  componentDidMount() {
    this.getBlogsData()
  }

  getBlogsData = async () => {
    const response = await fetch(
      'https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json',
    )
    const statusCode = await response.statusCode
    console.log(statusCode)
    const data = await response.json()
    console.log(data)

    const formattedData = data.map(eachItem => ({
      id: eachItem.id,
      email: eachItem.email,
      role: eachItem.role,
      name: eachItem.name,
    }))
    this.setState({blogsData: formattedData})
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  deleteUser = uniqueNo => {
    const {blogsData} = this.state
    const filteredUsersData = blogsData.filter(each => each.id !== uniqueNo)

    this.setState({
      blogsData: filteredUsersData,
    })
  }

  render() {
    const {searchInput} = this.state
    const {blogsData} = this.state
    const searchResults = blogsData.filter(eachDestination =>
      eachDestination.name.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="bg-container">
        <input
          className="input"
          type="search"
          placeholder="Search by name,email or role."
          onChange={this.onChangeSearchInput}
        />
        <div className="heading-container">
          <input type="checkbox" />
          <h3 className="name">Name</h3>
          <h3 className="role">role</h3>
          <h3 className="email">email</h3>
          <h3>actions</h3>
        </div>
        <div className="profile-cards-container">
          {searchResults.map(item => (
            <UserDetails
              blogsData={item}
              key={item.id}
              deleteUser={this.deleteUser}
            />
          ))}
        </div>
      </div>
    )
  }
}

export default App
