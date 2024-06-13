import { theme } from "antd";
const primary = "#B5B6FB"

export const customTheme = {
    token: {
        colorPrimary: primary,
        colorPrimaryHover: "#c1c3f1",
        colorInfo: primary,
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
            "colorTextDisabled": "rgba(255, 255, 255, 0.35)",
            defaultBg: '#282828'
        },
        Popover: {
            colorBgElevated: "#282828"
        },
        Slider: {
            trackBg: primary,
            handleColor: primary,
            handleActiveColor: "#C2C2F2",
            railBg: "rgba(242, 242, 242, 0.2)",
            trackHoverBg: "#c1c3f1",
            railHoverBg: "rgba(255, 255, 255, 0.23)",
            handleSize: 6,
            handleSizeHover: 7,
            colorTextDescription: "#fff",
            handleLineWidthHover: 3
        }
    },
    algorithm: theme.darkAlgorithm,
}