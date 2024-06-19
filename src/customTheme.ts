import { theme } from "antd";

const primary = "#4148ff"
const primaryHover = "#7176FF"
const modalGray = "#181818"
const success = "#00c6b3"
const warning = "#ff8051"
const error = "#f44269"
const text = "#ededed"

export const customTheme = {
    token: {
        colorPrimary: primary,
        colorPrimaryHover: primaryHover,
        colorInfo: primary,
        colorSuccess: success,
        colorWarning: warning,
        colorLink: "#ff6dce",
        colorError: error,
        colorTextBase: "#292929",
        colorText: text
    },
    components: {
        Tooltip: {
            colorBgSpotlight: "white",
            colorTextLightSolid: "black",
            paddingSM: 4,
            controlHeight: 12
        },
        Modal: {
            contentBg: modalGray,
            headerBg: modalGray,
            titleColor: text,
            colorIcon: "rgba(255, 255, 255, 0.45)",
            colorIconHover: "rgb(255, 255, 255)",
            colorText: text
        },
        Button: {
            "colorTextDisabled": "rgba(255, 255, 255, 0.35)",
            defaultBg: '#282828'
        },
        Popover: {
            colorBgElevated: modalGray
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