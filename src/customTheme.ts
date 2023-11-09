import { theme } from "antd";

export const customTheme = {
    token: {
        colorPrimary: "6c1a99",
        colorInfo: "#6c1a99",
        colorSuccess: "#00c6b3",
        colorWarning: "#ff8051",
        colorLink: "#c10784",
        colorError: "#f44269",
        colorTextBase: "#292929",
        colorText: 'white'
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
        },
        Button: {
            "colorTextDisabled": "rgba(255, 255, 255, 0.35)"
        }
    },
    algorithm: theme.darkAlgorithm,
}