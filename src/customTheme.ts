import { theme } from "antd";

export const customTheme = {
    token: {
        colorPrimary: "#B5B6FB",
        colorPrimaryHover: "#c1c3f1",
        colorInfo: "#B5B6FB",
        colorSuccess: "#00c6b3",
        colorWarning: "#ff8051",
        colorLink: "#ff6dce",
        colorError: "#f44269",
        colorTextBase: "#292929",
        colorText: '#ffffff'
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
            titleColor: "#ffffff",
            colorIcon: "rgba(255, 255, 255, 0.45)",
            colorIconHover: "rgb(255, 255, 255)",
            colorText: "#ffffff"
        },
        Button: {
            "colorTextDisabled": "rgba(255, 255, 255, 0.35)"
        },
        Popover: {
            colorBgElevated: "#282828"
        }
    },
    algorithm: theme.darkAlgorithm,
}