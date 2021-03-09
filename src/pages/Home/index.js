import React from 'react'
import { Button, Gap } from '../../components'
import './home.scss'

const Home = () => {
	return (
		<div className='home-page-wrapper'>
			<div className="title">
				<p className="title">hallo World</p>
			</div>
			<Gap height={20} />
			<div className='content-wrapper'></div>
			<div className='pagination'>
				<Button title='Previous' />
				<Gap width={20} />
				<Button title='Next' />
			</div>
			<Gap height={20} />
		</div>
	)
}

export default Home
