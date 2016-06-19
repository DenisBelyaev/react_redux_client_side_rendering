import App from '../components/App';
import manager from './managerRoute';

module.exports = {
    component: 'div',
    childRoutes: [ {
        path: '/',
        component: require('../components/App'),
        childRoutes: [
            require('./managerRoute')
        ]
    } ]
}