import ReportIcon from "@mui/icons-material/Report";
import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";

const RenderFormikErrors = ({ formik }) => {
    return (
        <List style={{ paddingTop: 0 }}>
            {Object.keys(formik.errors).map(function (value, index) {
                return (
                    <ListItem
                        key={value}
                        alignItems="flex-start"
                        className="listItem"
                        style={{
                            color: "#e31414",
                            marginTop: "4px",
                            paddingTop: "0px",
                            paddingBottom: "0px",
                            paddingLeft: "8px",
                            paddingRight: "8px",
                        }}
                    >
                        <ListItemIcon
                            style={{ minWidth: "30px", color: "red", margin: 0 }}
                        >
                            <ReportIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText disableTypography
                            sx={{ margin: 0, fontWeight: 'lighter', fontSize: '0.85rem', lineHeight: 1.5 }}
                            primary={formik.errors[value]}
                        />
                    </ListItem>
                );
            })}
        </List>
    )
}

export default RenderFormikErrors