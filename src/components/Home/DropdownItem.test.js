/*
 * @Author: Jiayu Ran
 * @Date: 2023-04-08 12:38:03
 * @LastEditors: Jiayu Ran
 * @LastEditTime: 2023-04-08 12:53:05
 * @Description: Description
 */
import React from 'react';
import ReactDOM from 'react-dom';
import DropdownItem from './DropdownItem';
import {render, screen} from '@testing-library/react';



it('renders DropdownItem component', () => {
  render(<DropdownItem 
      distance={2000} 
      name={"testName"} 
      type={"park"} 
    />);

    expect(screen.getByText("testName")).toBeInTheDocument();
    expect(screen.getByText("Park")).toBeInTheDocument();
    expect(screen.getByText("1.24 mile")).toBeInTheDocument();
});