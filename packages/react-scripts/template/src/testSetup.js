import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// enzyme configuration
configure({ adapter: new Adapter() });

function noop() {
  return {};
}

// prevent mocha tests from breaking when trying to require a css file
require.extensions['.css'] = noop;
require.extensions['.scss'] = noop;
require.extensions['.svg'] = noop;
require.extensions['.png'] = noop;