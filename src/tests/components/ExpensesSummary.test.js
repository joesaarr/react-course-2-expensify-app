import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';

test('Should render ExpensesSummary correctly', () => {
  const wrapper = shallow(<ExpensesSummary expenseCount={23} expensesTotal={150234500} />);
  expect(wrapper).toMatchSnapshot();
});

test('Should render ExpensesSummary with one expense correctly', () => {
  const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={54632}/>);
  expect(wrapper).toMatchSnapshot();
});