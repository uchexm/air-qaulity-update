import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import Countries from '../components/countries';

it('Render <Countries /> correctly', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <MemoryRouter>
          <Countries />
        </MemoryRouter>
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
