import React from 'react'
import {shallow} from 'enzyme'
import {TRexContainer} from ".."

describe('Containers', () => {
	describe('T-Rex Container', () => {
		it('should render', () => {
			const tree = shallow(<TRexContainer/>)
			expect(tree).toMatchSnapshot()
		})
	})
})