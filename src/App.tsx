import Header from './Shared/Header/Header';
import Homepage from './Pages/Homepage/Homepage';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { canvas, homepage } from './routes';
import ErrorPage from './Shared/ErrorPage/ErrorPage';
import CanvasPage from './Pages/CanvasPage/CanvasPage';
import { Provider } from 'react-redux';
import store from './store';
import { ConfigProvider } from 'antd';

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

  const theme = {
    token: {
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
      }
    }
  }

  return (
    <ConfigProvider theme={theme}>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </ConfigProvider>

  );
}

export default App;
