import Header from './Shared/Header/Header';
import Homepage from './Pages/Homepage/Homepage';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { canvas, homepage } from './routes';
import ErrorPage from './Shared/ErrorPage/ErrorPage';
import CanvasPage from './Pages/CanvasPage/CanvasPage';
import { Provider } from 'react-redux';
import store from './store';
import { ConfigProvider, theme } from 'antd';

const App = () => {
  const router = createBrowserRouter([
    {
      path: homepage,
      element: <Homepage />,
      errorElement: <ErrorPage />
    },
    {
      path: canvas,
      element: <CanvasPage />,
      errorElement: <ErrorPage />

    }
  ]);

  const customTheme = {
    token: {
      colorPrimary: "6c1a99",
      colorInfo: "#6c1a99",
      colorSuccess: "#00c6b3",
      colorWarning: "#ff8051",
      colorLink: "#c10784",
      colorError: "#f44269",
      colorTextBase: "#292929"
    },
    components: {
      Tooltip: {
        colorBgSpotlight: "white",
        colorTextLightSolid: "black",
        paddingSM: 4,
        controlHeight: 12
      },
      Modal: {
        contentBg: "#282828",
        headerBg: "#282828",
        titleColor: "white",
        colorIcon: "rgba(255, 255, 255, 0.45)",
        colorIconHover: "rgb(255, 255, 255)",
        colorText: "white"
      }
      // "InputNumber": {
      //   "activeBorderColor": "rgb(114, 46, 209)",
      //   "handleHoverColor": "rgb(77, 11, 113)",
      //   "hoverBorderColor": "rgb(77, 11, 113)",
      //   "handleBg": "rgba(139, 139, 139, 0.75)",
      //   "colorBgContainer": "rgb(80, 80, 80)",
      //   "colorText": "rgba(255, 255, 255, 0.88)",
      //   "handleBorderColor": "rgba(110, 110, 110, 0.45)"
      // }
    },
    algorithm: theme.darkAlgorithm,

  }

  return (
    <ConfigProvider theme={customTheme}>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </ConfigProvider>

  );
}

export default App;
