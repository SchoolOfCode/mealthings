import React from "react"
import Rating from "@material-ui/lab/Rating"
import Typography from "@material-ui/core/Typography"
import Box from "@material-ui/core/Box"
import { sizing } from "@material-ui/system"

export default function SimpleRating() {
  const [value, setValue] = React.useState(2)

  return (
    <div>
      <Box component="fieldset" mb={3} borderColor="transparent">
        <Typography component="legend">User Rating on App Store</Typography>
        <Rating
          name="size-large"
          defaultValue={2}
          size="large"
          value={5}
          readOnly
        />
      </Box>
    </div>
  )
}
