import React from 'react'
import {shallow} from "enzyme/build"
import App from '../App'

describe('App test suite', () => {
	it('renders without crashing', () => {
		const tree = shallow(<App/>)
		expect(tree).toMatchSnapshot()
	})
})
