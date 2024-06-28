import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import UserInfo from './UserInfo'

/* eslint-enable */

describe('Display UserInfo', () => {
  it('renders with user avatar and name', () => {
    const user = {
      avatarUrl: 'https://example.com/avatar.png',
      name: 'John Doe'
    };
    render(<UserInfo user={user} />)

    //Assert..
    const name = screen.getByText(/John Doe/);
     const image = screen.getByRole("img");
    expect(name).toHaveTextContent("John Doe")
   const username = screen.getByText(`${user.name}`) //HTMLDivElement
   const avatarUrl = screen.getByAltText(`${user.name} avatar`) as HTMLImageElement 
 
   expect(username).toBeInTheDocument();
   expect(avatarUrl.src).toBe(user.avatarUrl)
  })
  // it('should render the user\'s name', () => {
  //   // todo
  // })
})
