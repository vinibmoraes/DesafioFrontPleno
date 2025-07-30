import { Typography } from "@mui/material";
import type { TypographyProps, SxProps, Theme } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

type TextSize =
  | "display1"      
  | "display2"      
  | "h1"          
  | "h2"            
  | "h3"            
  | "h4"            
  | "h5"            
  | "h6"            
  | "subtitle1"     
  | "subtitle2"   
  | "subtitle3"   
  | "body1"         
  | "body2"         | "caption"      
  | "overline"      
  | "button"      
  | "inherit";    

interface CustomTextDefaultProps extends TypographyProps {
  size?: TextSize;
  text?: string | React.ReactNode;
  color?: string;
  responsive?: boolean;
  children?: React.ReactNode;
}

const getSizeStyles = (size: TextSize, responsive: boolean, theme: Theme): SxProps<Theme> => {
  if (responsive) {
    return {
      fontSize: {
        xs: getResponsiveFontSize(size, 'xs', theme),
        sm: getResponsiveFontSize(size, 'sm', theme),
        md: getResponsiveFontSize(size, 'md', theme),
        lg: getResponsiveFontSize(size, 'lg', theme),
        xl: getResponsiveFontSize(size, 'xl', theme),
      },
      lineHeight: 1.5,
    };
  }

  const staticSizes: Record<TextSize, SxProps<Theme>> = {
    display1: { fontSize: "3.5rem", fontWeight: 700, lineHeight: 1.2 },
    display2: { fontSize: "2.5rem", fontWeight: 700, lineHeight: 1.3 },
    h1: { fontSize: "2rem", fontWeight: 700, lineHeight: 1.3 },
    h2: { fontSize: "1.75rem", fontWeight: 700, lineHeight: 1.3 },
    h3: { fontSize: "1.5rem", fontWeight: 600, lineHeight: 1.3 },
    h4: { fontSize: "1.25rem", fontWeight: 600, lineHeight: 1.4 },
    h5: { fontSize: "1.125rem", fontWeight: 600, lineHeight: 1.4 },
    h6: { fontSize: "1rem", fontWeight: 600, lineHeight: 1.5 },
    subtitle1: { fontSize: "1rem", fontWeight: 500, lineHeight: 1.5 },
    subtitle2: { fontSize: "0.9375rem", fontWeight: 500, lineHeight: 1.5 },
    subtitle3: { fontSize: "0.875rem", fontWeight: 500, lineHeight: 1.5 },
    body1: { fontSize: "1rem", fontWeight: 400, lineHeight: 1.5 },
    body2: { fontSize: "0.875rem", fontWeight: 400, lineHeight: 1.5 },
    caption: { fontSize: "0.75rem", fontWeight: 400, lineHeight: 1.5 },
    overline: { 
      fontSize: "0.625rem", 
      fontWeight: 400, 
      lineHeight: 1.5,
      textTransform: "uppercase",
      letterSpacing: "1px",
    },
    button: { fontSize: "0.875rem", fontWeight: 500, lineHeight: 1.5, textTransform: "uppercase" },
    inherit: {},
  };

  return staticSizes[size];
};

const getResponsiveFontSize = (size: TextSize, breakpoint: 'xs' | 'sm' | 'md' | 'lg' | 'xl', theme: Theme): string => {
  const baseSizes = {
    display1: { xs: "2.5rem", sm: "2.75rem", md: "3rem", lg: "3.25rem", xl: "3.5rem" },
    display2: { xs: "2rem", sm: "2.25rem", md: "2.375rem", lg: "2.5rem", xl: "2.75rem" },
    h1: { xs: "1.75rem", sm: "1.875rem", md: "2rem", lg: "2.125rem", xl: "2.25rem" },
    h2: { xs: "1.5rem", sm: "1.625rem", md: "1.75rem", lg: "1.875rem", xl: "2rem" },
    h3: { xs: "1.25rem", sm: "1.375rem", md: "1.5rem", lg: "1.625rem", xl: "1.75rem" },
    h4: { xs: "1.125rem", sm: "1.1875rem", md: "1.25rem", lg: "1.3125rem", xl: "1.375rem" },
    h5: { xs: "1rem", sm: "1.0625rem", md: "1.125rem", lg: "1.1875rem", xl: "1.25rem" },
    h6: { xs: "0.875rem", sm: "0.9375rem", md: "1rem", lg: "1.0625rem", xl: "1.125rem" },
    subtitle1: { xs: "0.875rem", sm: "0.9375rem", md: "1rem", lg: "1.0625rem", xl: "1.125rem" },
    subtitle2: { xs: "0.84375rem", sm: "0.890625rem", md: "0.9375rem", lg: "0.984375rem", xl: "1.03125rem" },
    subtitle3: { xs: "0.8125rem", sm: "0.84375rem", md: "0.875rem", lg: "0.90625rem", xl: "0.9375rem" },
    body1: { xs: "0.875rem", sm: "0.9375rem", md: "1rem", lg: "1.0625rem", xl: "1.125rem" },
    body2: { xs: "0.8125rem", sm: "0.84375rem", md: "0.875rem", lg: "0.90625rem", xl: "0.9375rem" },
    caption: { xs: "0.75rem", sm: "0.78125rem", md: "0.8125rem", lg: "0.84375rem", xl: "0.875rem" },
    overline: { xs: "0.625rem", sm: "0.65625rem", md: "0.6875rem", lg: "0.71875rem", xl: "0.75rem" },
    button: { xs: "0.8125rem", sm: "0.84375rem", md: "0.875rem", lg: "0.90625rem", xl: "0.9375rem" },
    inherit: { xs: "inherit", sm: "inherit", md: "inherit", lg: "inherit", xl: "inherit" },
  };

  return baseSizes[size][breakpoint];
};

const CustomTextDefault = ({
  text,
  size = "body1",
  color,
  responsive = true,
  sx,
  children,
  ...props
}: CustomTextDefaultProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
  const baseStyles: SxProps<Theme> = {
    fontFamily: '"Poppins", sans-serif',
    color: color || theme.palette.text.primary,
    transition: theme.transitions.create('font-size'), 
  };

  const sizeStyles = getSizeStyles(size, responsive, theme);
  const mergedSx = { ...baseStyles, ...sizeStyles, ...(sx || {}) };

  return (
    <Typography
      sx={mergedSx}
      {...props}
    >
      {text || children}
    </Typography>
  );
};

export default CustomTextDefault;