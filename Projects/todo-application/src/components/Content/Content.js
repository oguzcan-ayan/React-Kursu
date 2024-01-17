import React from 'react';
import ContentFooter from './ContentFooter';
import UserList from './UserList';

function Content() {
  return (
    <>
    <section className="main">
		<input className="toggle-all" type="checkbox" />
		<label htmlFor="toggle-all">
			Mark all as complete
		</label>
		<UserList />
	</section>
    <ContentFooter />
    </>
  )
}

export default Content;