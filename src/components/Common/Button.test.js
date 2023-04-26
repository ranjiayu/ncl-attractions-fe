/*
 * @Author: Jiayu Ran
 * @Date: 2023-04-08 12:46:16
 * @LastEditors: Jiayu Ran
 * @LastEditTime: 2023-04-26 11:01:58
 * @Description: Description
 */
import React from 'react';
import ReactDOM from 'react-dom';
import Button from "./Button";
import {render, screen} from '@testing-library/react';



it('renders Dropdown component', () => {
  render(<Button type="primary">Click Me</Button>);

    expect(screen.getByText("Click Me")).toBeInTheDocument();
    expect(screen.getByText("Click Me").getAttribute("class")).toContain("button-primary");
});