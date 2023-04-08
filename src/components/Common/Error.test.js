/*
 * @Author: Jiayu Ran
 * @Date: 2023-04-08 12:46:16
 * @LastEditors: Jiayu Ran
 * @LastEditTime: 2023-04-08 12:57:43
 * @Description: Description
 */
import React from 'react';
import ReactDOM from 'react-dom';
import Error from './Error';
import {render, screen} from '@testing-library/react';



it('renders Dropdown component', () => {
  render(<Error />);

    expect(screen.getByText("Something gose wrong.")).toBeInTheDocument();
});