import { DisabledByDefault } from "@mui/icons-material";
import { Button, useTheme, useMediaQuery } from "@mui/material";

type CustomButtonProps = {
  text: string;
  color?: string;
  textColor?: string;
  borderColor?: string;
  onClick: () => void;
  startIcon?: React.ReactNode;
  size?: "small" | "medium" | "large";
  disabled?: boolean;
};

const CustomButton = ({
  text,
  color = "#1976d2",          
  textColor = "#fff",
  borderColor,
  onClick,
  startIcon,
  size = "medium",
}: CustomButtonProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const sizeStyles = {
    small: {
      height: 20,
      fontSize: 8,
      paddingX: 0.5,
    },
    medium: {
      height: 40,
      fontSize: 14,
      paddingX: 2,
    },
    large: {
      height: 50,
      fontSize: 16,
      paddingX: 2.5,
    },
  }[size];

  return (
    <Button
      variant="contained"
      onClick={onClick}
      startIcon={startIcon}
      sx={{
        fontSize: { xs: 14, sm: 16 },
        fontWeight: 700,
        backgroundColor: color,
        color: textColor,
        border: borderColor ? `2px solid ${borderColor}` : "none",
        borderRadius: "8px",
        paddingX: isMobile ? 1 : 2,
        height: 45,
        minWidth: isMobile ? "100%" : "auto",
        boxShadow: "none",
        transition: "all 0.2s ease-in-out",
        "&:hover": {
          backgroundColor: color,
          opacity: 0.85,
          boxShadow: "none",
        },
      }}
    >
      {text}
    </Button>
  );
};

export default CustomButton;
