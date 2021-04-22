# React Application

## Summary
![]()
On the top of the main page has three links: Home, Alert, and Grafana.
The Grafana link will redirect users to Grafana channel which is mentioned above.
The Home link will redirect users to visualization components which is also default when users open the application.
The Alerts link will redirect users to the hunting service page.
### Visualization Components

There are three visualization components: pie chart, stacked bar, and heat map.They are using the same datasource. Users can use the dropdown menu to switch components. All of the labels are dynamic.
Datasource
All of the data is from a Redis URL.
### Pie Chart
![](images/react-fe-pie-charts.png)

The pie chart shows the data from the last 4 weeks(start from Sunday). The airflow and the temperature are two separated channels. If the data is missing or -1(invalid data), the pie chart for that day will show “No Data”.
### Stacked Bar
![](images/react-fe-stackedbar-1.png)
![](images/react-fe-stackedbar-2.png)

The stacked bar shows the data from the latest week. The airflow and the temperature are two separated channels. If the data is missing or -1(invalid data), there will be no bar on that day.
### Heat Map
![](images/react-fe-heatmap.png)

The heat map shows the data from the last 4 weeks(start from Sunday). The airflow and the temperature are two separated channels. The label with highest frequency is presented each day.
Alerts(Hunting Service)
### Alerts
![](react-fe-alerts.png)
The page presents the device, timestamp of the hunting alerts. Users can use the button at the top left to filter.
Datasource
All of the data is from a URL.
Detail

By clicking the DETAILS button on each row, users can get the detail of the abnormal moments.
Relationship With Other Services:
Directions:
Additional Notes:  

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
