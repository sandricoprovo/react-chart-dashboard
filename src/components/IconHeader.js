import React from "react";
import { Box } from "@material-ui/core";
import { IconButton } from "@material-ui/core";
import {
	Search as SearchIcon,
	WbSunny as WbSunnyIcon,
	Help as HelpIcon,
	Notifications as NotificationsIcon,
	Person as PersonIcon
} from "@material-ui/icons";

const IconHeader = () => {
	return (
		<Box display="flex" flexDirection="row-reverse" height="10%">
			<IconButton aria-label="search" component="span">
				<SearchIcon />
			</IconButton>
			<IconButton aria-label="color mode" component="span">
				<WbSunnyIcon />
			</IconButton>
			<IconButton aria-label="help" component="span">
				<HelpIcon />
			</IconButton>
			<IconButton aria-label="notifications" component="span">
				<NotificationsIcon />
			</IconButton>
			<IconButton aria-label="person icon" component="span">
				<PersonIcon />
			</IconButton>
		</Box>
	)
}

export default IconHeader
