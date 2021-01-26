import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import ArticleList196750Navigator from '../features/ArticleList196750/navigator';
import ArticleList196749Navigator from '../features/ArticleList196749/navigator';
import ArticleList196748Navigator from '../features/ArticleList196748/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
ArticleList196750: { screen: ArticleList196750Navigator },
ArticleList196749: { screen: ArticleList196749Navigator },
ArticleList196748: { screen: ArticleList196748Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
