import "styled-components";
import ThemeType from "@/types/themeType";

declare module "styled-components" {
  export interface DefaultTheme extends ThemeType {}
}
