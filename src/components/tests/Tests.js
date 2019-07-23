import { createAppContainer, createMaterialTopTabNavigator } from 'react-navigation';

import TestSpeed from '../test-speed';
import TestStandard from '../test-standard';

const Tests = createMaterialTopTabNavigator({
  TestSpeed,
  TestStandard
});

export default createAppContainer(Tests);