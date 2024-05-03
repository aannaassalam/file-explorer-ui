import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/system";
import React from "react";

interface BannerSectionProps {
  title: string;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function BannerSection({ title, setOpen }: BannerSectionProps) {
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      width="100%"
      paddingBlock="30px"
    >
      <Typography variant="h3">{title}</Typography>
      <Button variant="contained" onClick={() => setOpen(true)}>
        Add
      </Button>
    </Stack>
  );
}
