import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Popover from "@material-ui/core/Popover"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import { sizing } from "@material-ui/system"
import css from "./module.Popover.css"

const useStyles = makeStyles(theme => ({
  typography: {
    padding: theme.spacing(2.5),
  },
}))

export default function SimplePopover() {
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = React.useState(null)

  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)
  const id = open ? "simple-popover" : undefined

  return (
    <div>
      <Button
        class="button"
        aria-describedby={id}
        variant="contained"
        onClick={handleClick}
        border-radius="50%"
        size="large"
      >
        Download App{" "}
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <Typography className={classes.typography}>
          Coming soon to Google Play -(sign up below for first preview)
          {/* Apple Store/ Play Store. */}
        </Typography>
      </Popover>
    </div>
  )
}
