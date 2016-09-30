/* import all html files as stings */
declare module "*.html" {
    var __html__: string;
    export default __html__;
}

declare module "*.scss" {
    var __scss__: string;
    export default __scss__;
}